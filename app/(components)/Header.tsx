'use client'

import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useState } from 'react'
import { sliceEmail } from '../../lib/sliceEmail'
import Menu from './Menu'
import Image from 'next/image'

const modalState = {
  DEFAULT: 'DEFAULT',
  MENU: 'MENU',
  PROFILE: 'PROFILE',
}

export default function Header() {
  const { data: session } = useSession()
  const [modal, setModal] = useState(modalState.DEFAULT)

  return (
    <>
      <header className='fixed top-0 inset-x-0 bg-[#fbfbfb] bg-opacity-80 border py-2 px-4 z-10'>
        <div className='flex justify-between items-center max-w-[1200px] mx-auto'>
          <Link href='/' className='h-full'>
            <Image
              className='w-20'
              width={80}
              height={40}
              src='/tdt-logo.webp'
              alt='tdt logo'
              referrerPolicy='no-referrer'
            />
          </Link>

          <div className='flex items-center text-xs'>
            <button
              onClick={() => {
                if (modal === modalState.MENU) {
                  setModal(modalState.DEFAULT)
                } else {
                  setModal(modalState.MENU)
                }
              }}
              className='w-10 h-10 md:hidden'
            >
              <Image
                src='/menu.png'
                width={40}
                height={40}
                alt='hamburger menu'
              />
            </button>

            {modal === modalState.MENU && <Menu />}

            <div className='hidden md:flex items-center gap-3 lg:hidden'>
              <Link
                href='/posting-study'
                className='bg-slate-900 text-xs text-slate-200 rounded p-3 ml-4'
              >
                스터디 만들기 🚀
              </Link>
              <Link
                href='/posting-lounge'
                className=' bg-stone-800 text-xs text-stone-200 rounded p-3'
              >
                게시글 작성 📑
              </Link>
            </div>
            {/* line */}
            <div className='w-[2px] bg-slate-300 h-[30px] mr-4 ml-7 lg:hidden'></div>
            {session && session.user ? (
              <>
                <button
                  className='w-8 h-8 rounded-full overflow-hidden hover:opacity-75'
                  onClick={() => {
                    if (modal === modalState.PROFILE) {
                      setModal(modalState.DEFAULT)
                    } else {
                      setModal(modalState.PROFILE)
                    }
                  }}
                >
                  <Image
                    src={session.user.image!}
                    width={40}
                    height={40}
                    alt='user pic'
                    referrerPolicy='no-referrer'
                  />
                </button>

                {/* profile menu modal */}
                {modal === modalState.PROFILE && (
                  <div className='relative'>
                    <div className='absolute -right-1 top-8 border shadow-lg bg-[#fbfbfb] w-60 py-4 px-2 rounded-xl'>
                      <div className='flex gap-2 items-center'>
                        <Image
                          className='w-9 h-9 rounded-full'
                          src={session.user.image!}
                          width={40}
                          height={40}
                          alt='user pic'
                          referrerPolicy='no-referrer'
                        />
                        <div className='overflow-clip'>
                          <p className='truncate font-bold'>
                            {session.user.name}
                          </p>
                          <p className='text-xs text-stone-600'>
                            {sliceEmail(session.user.email!)}
                          </p>
                        </div>
                      </div>

                      <div className='flex flex-col mt-4 gap-1 text-sm'>
                        <Link
                          href={`/user/@${sliceEmail(session.user.email!)}`}
                          className='text-center p-2 border rounded-lg hover:border-stone-400'
                        >
                          👋 내 프로필
                        </Link>
                        <Link
                          href='/setting'
                          className='text-center p-2 border rounded-lg hover:border-stone-400'
                        >
                          ⚙️ 설정
                        </Link>
                        <button
                          onClick={() => signOut()}
                          className='text-center p-2 bg-red-300 rounded-lg mt-2'
                        >
                          로그아웃
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <button
                onClick={() => signIn('google')}
                className=' hover:bg-stone-200 transition rounded py-2 px-3'
              >
                로그인
              </button>
            )}
          </div>
        </div>
      </header>

      {/* fixed 높이 값 설정 */}
      <div className='h-[53px]'></div>
    </>
  )
}
