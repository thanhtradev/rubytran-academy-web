import Image from 'next/image';

const Hero = () => {
  return (
    <div className='hero'>
      <img className="w-[598px] h-[411px]" src="https://via.placeholder.com/598x411" />
      <div className='flex-1 padding-x items-center justify-center h-[139px] text-center flex-col pt-20'>
        <p className='hero__top-title'>HỌC VIỆN THẨM MỸ RUBY TRAN</p>
        <h1 className='hero__title'>
          RUBY TRAN ACADEMY
        </h1>
        <p className='hero__subtitle'>CHẤP CÁNH TƯƠNG LAI VƯƠN XA</p>
      </div>
      <img className="w-[352px] h-[527px]" src="https://via.placeholder.com/352x527" />
    </div>
  )
}

export default Hero