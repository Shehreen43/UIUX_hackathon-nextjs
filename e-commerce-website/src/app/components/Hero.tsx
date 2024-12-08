import Image from 'next/image';
import React from 'react';

export const Shop_Hero = () => {
  return (
    <>
    <section className="overflow-hidden">
      <div className="max-w-screen-2xl mx-auto relative flex justify-center items-center w-full text-white text-center md:text-left">
        {/* Text Section */}
        <div className="border-2 border-black absolute top-[25%] md:left-[10%] md:max-w-[90%]">
          <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] py-2">
            SUMMER 2020
          </h5>
          <h1 className="font-montserrat text-[40px] py-2 lg:text-[58px] font-bold leading-[50px] lg:leading-[80px] tracking-[0.2px] lg:tracking-[0.2em]">
            NEW COLLECTION
          </h1>
          <h4 className="font-montserrat w-full md:max-w-[376px] text-[20px] font-normal leading-[30px] tracking-[0.2px] py-2">
            We know how large objects will act, but things on a small scale.
          </h4>

          <div>
            <button className="p-[15px_40px] gap-[10px] rounded-[5px] bg-secondary2 mt-10">
              <h3 className="font-montserrat text-[24px] font-bold leading-[32px] tracking-[0.1px] text-center">
                SHOP NOW
              </h3>
            </button>
          </div>
        </div>
         {/* Images */}
        <Image src="/shop-hero.png" alt="Fashion" width={1440} height={716} className="hidden w-full h-auto md:inline-flex" />
        <Image src="/ed1.jpg" alt="Fashion" width={412} height={753} className="w-full overflow-hidden h-auto md:hidden" />

        {/* Images */}
      </div>

      {/* Editors Section */}
      <div className="max-w-screen-2xl mx-auto relative flex flex-row  w-full bg-[#fafafa] text-center md:text-left">

          <div className='text-center mt-[5%] order-2 border-black'>
          <h3 className="font-montserrat text-[24px] font-bold leading-[32px] tracking-[0.1px]">
          EDITOR’S PICK
           </h3>
          <p className="font-montserrat text-[14px] font-normal leading-[20px] tracking-[0.2px]">
          Problems trying to resolve the conflict between 
           </p>
          </div>

          {/* editors imgs */}
          <div className='gride grid-cols-1 md:grid-cols-2 lg:gride-cols-4 mt-[10%] order-2 border-black'>
            <div>
                <div className='top-[5%] left-[2%] py-[12px] gap-[17px]'>
                <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center py-2 px-4">
                MEN
                 </h5>
                </div>
                <Image src="/Editor1.png" alt="Editor" width={510} height={500} className="hidden overflow-hidden h-auto md:flex" />
               <Image src="/ed1.png" alt="Editor" width={320} height={500} className="w-full overflow-hidden h-auto md:hidden" />
           
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
    </section>
    </>
  );
};

export default Shop_Hero;
