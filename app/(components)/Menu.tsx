import Link from 'next/link'

export default function Menu() {
  const linkStyle = 'py-1 px-4 text-[13px] rounded-lg text-stone-600 transition'

  return (
    <div className='w-60 border shadow-lg bg-[#fbfbfb] absolute top-[60px] rounded-xl  right-[12px] p-2'>
      <div className='flex flex-col gap-1'>
        <Link href='/' className={linkStyle}>
          π₯ μ μ²΄
        </Link>
        <Link href='/programming' className={linkStyle}>
          π§π»βπ» νλ‘κ·Έλλ°
        </Link>
        <Link href='/job' className={linkStyle}>
          π μ·¨μ
        </Link>
        <Link href='/exam' className={linkStyle}>
          βπ» μν
        </Link>
        <Link href='/hobby' className={linkStyle}>
          ππ»ββοΈ μ·¨λ―Έ / κ΅μ
        </Link>
        <Link href='/language' className={linkStyle}>
          π μ΄ν
        </Link>
        <Link href='/book' className={linkStyle}>
          π λμ
        </Link>
        <Link href='/etc' className={linkStyle}>
          π κΈ°ν
        </Link>
      </div>
      <div className='h-[2px] bg-stone-200 my-2'></div>
      <div className='flex flex-col gap-1'>
        <Link href='/lounge' className={linkStyle}>
          π₯ μ μ²΄
        </Link>
        <Link href='/lounge/daily' className={linkStyle}>
          π μΌμ
        </Link>
        <Link href='/lounge/worry' className={linkStyle}>
          π¦ κ³ λ―Ό
        </Link>
        <Link href='/lounge/promotion' className={linkStyle}>
          ππ»ββοΈ μ€ν°λ νλ³΄
        </Link>
      </div>
    </div>
  )
}
