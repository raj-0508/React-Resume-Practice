import ui from '../assets/ui.svg';
import product from '../assets/product.svg';
import branding from '../assets/branding.svg';
import arrow from '../assets/arrow.svg';

function ServiceSection() {
  return (
    <section>
      <div className='absolute w-1/2 h-[670px] bg-[#181818] mt-[-48px] -z-10'></div>  
      <div className="mt-12">
        <div className="flex flex-wrap justify-center gap-8">
          <div className="px-[45px] py-[30px] bg-[#1e1e1e]">
            <img src={ui} alt=" UI" className='w-[50px]' />
            <div className="mt-4 flex flex-col gap-5">
              <h1 className='font-semibold text-xl'>UI Design</h1>
              <p className='text-[#cecece] font-semibold'>
                Lorem ipsum dolor sit <br />
                amet consectetur <br />
                adipisicing elit.
              </p>
              <a className="text-[#f83241] no-underline text-[.9rem] mt-3.5 flex gap-2 items-center" href="#">
                KNOW MORE <img src={arrow} alt="arrow  image"/>
              </a>
            </div>
          </div>

          <div className="px-[45px] py-[30px] bg-[#f83241]">
            <img src={product} alt=" UI" className='w-[50px]' />
            <div className="mt-4 flex flex-col gap-5">
              <h1 className='font-semibold text-xl'>UI Design</h1>
              <p className='text-[#cecece] font-semibold'>
                Lorem ipsum dolor sit <br />
                amet consectetur <br />
                adipisicing elit.
              </p>
              <a className="text-[#ffffff] no-underline text-[.9rem] mt-3.5 flex gap-2 items-center" href="#">
                KNOW MORE <img src={arrow} alt="arrow image"/>
              </a>
            </div>
          </div>

          <div className="px-[45px] py-[30px] bg-[#1e1e1e]">
            <img src={branding} alt=" UI" className='w-[50px]' />
            <div className="mt-4 flex flex-col gap-5">
              <h1 className='font-semibold text-xl'>UI Design</h1>
              <p className='text-[#cecece] font-semibold'>
                Lorem ipsum dolor sit <br />
                amet consectetur <br />
                adipisicing elit.
              </p>
              <a className="text-[#f83241] no-underline text-[.9rem] mt-3.5 flex gap-2 items-center" href="#">
                KNOW MORE <img src={arrow} alt="arrow image"/>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-[60px] flex flex-wrap justify-center items-center px-8 gap-12">
          <div className="item-center">
            <h1 className='text-[#f83241] font-bold text-[7rem]'>12</h1>
            <h2 className='font-semibold text-2xl'>Years Experience</h2>
          </div>
          <div className="flex flex-col flex-wrap gap-5">
            <div className="flex flex-wrap justify-center gap-5">
              <div className="bg-[#1e1e1e] w-[200px] text-center p-5 flex flex-col justify-center items-center">
                <h3 className='text-[#f83241] font-bold text-3xl'>60+</h3>
                <p className='text-[#cecece] font-semibold'>Clients</p>
              </div>

              <div className="bg-[#1e1e1e] w-[200px] text-center p-5 flex flex-col justify-center items-center">
                <h3 className='text-[#f83241] font-bold text-3xl'>08</h3>
                <p className='text-[#cecece] font-semibold'>Years Experience</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
              <div className="bg-[#1e1e1e] w-[200px] text-center p-5 flex flex-col justify-center items-center">
                <h3 className='text-[#f83241] font-bold text-3xl'>122+</h3>
                <p className='text-[#cecece] font-semibold'>Projects</p>
              </div>

              <div className="bg-[#1e1e1e] w-[200px] text-center p-5 flex flex-col justify-center items-center">
                <h3 className='text-[#f83241] font-bold text-3xl'>10</h3>
                <p className='text-[#cecece] font-semibold'>Achievments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
