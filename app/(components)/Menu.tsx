import Link from 'next/link'

export default function Menu() {
  const linkStyle = 'py-1 px-4 text-[13px] rounded-lg text-stone-600 transition'

  return (
    <div className='w-60 border shadow-lg bg-[#fbfbfb] absolute top-[60px] rounded-xl  right-[12px] p-2'>
      <div className='flex flex-col gap-1'>
        <Link href='/' className={linkStyle}>
          🔥 전체
        </Link>
        <Link href='/programming' className={linkStyle}>
          🧑🏻‍💻 프로그래밍
        </Link>
        <Link href='/job' className={linkStyle}>
          👊 취업
        </Link>
        <Link href='/exam' className={linkStyle}>
          ✍🏻 시험
        </Link>
        <Link href='/hobby' className={linkStyle}>
          🏄🏻‍♂️ 취미 / 교양
        </Link>
        <Link href='/language' className={linkStyle}>
          🏅 어학
        </Link>
        <Link href='/book' className={linkStyle}>
          📚 독서
        </Link>
        <Link href='/etc' className={linkStyle}>
          🌈 기타
        </Link>
      </div>
      <div className='h-[2px] bg-stone-200 my-2'></div>
      <div className='flex flex-col gap-1'>
        <Link href='/lounge' className={linkStyle}>
          🔥 전체
        </Link>
        <Link href='/lounge/daily' className={linkStyle}>
          🙌 일상
        </Link>
        <Link href='/lounge/worry' className={linkStyle}>
          💦 고민
        </Link>
        <Link href='/lounge/promotion' className={linkStyle}>
          🙋🏻‍♀️ 스터디 홍보
        </Link>
      </div>
    </div>
  )
}
