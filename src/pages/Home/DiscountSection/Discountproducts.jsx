// import images
import Pici from "../../../assets/people/pipi.png";
import Picii from "../../../assets/people/pipii.png";
import Piciii from "../../../assets/people/pipiii.png";
import Piciv from "../../../assets/people/pipiv.png";

const Discountproducts = () => {
  return (
    <section>
      <div className="flex flex-col items-center md:flex-row gap-9 w-full px-5 md:px-30 lg:px-40 xl:px-50 2xl:px-60 pb-36 pt-16">
        <div className="flex flex-col gap-9">
          {/* 1st area  --------------------------------*/}
          <div className="max-w-[643px] max-h-[633px] relative">
            {/* image div  */}
            <div className="w-full h-full">
              <img src={Pici} alt="" className="w-full" />
            </div>
            {/* info div  */}
            <div className="aria-text-section">
              <div className="pb-2 md:pb-3 xl:pb-8 primary-Color">
                <h2 className="text-xl lg:text-lg xl:text-2xl font-bold">
                  Bravo Sunglasses
                </h2>
                <p className="text-sm md:text-lg lg:text-xs xl:text-xl font-normal">
                  Up to 80% off on selected item
                </p>
              </div>
              <button className="aria-text-button">Buy Now</button>
            </div>
          </div>
          {/* 2nd area  -----------------------------------------*/}
          <div className="max-w-[643px] max-h-[509px] relative">
            {/* image div  */}
            <div className="w-full h-full">
              <img src={Piciii} alt="" className="w-full" />
            </div>
            {/* info div  */}
            <div className="aria-text-section">
              <div className="pb-2 md:pb-3 xl:pb-8 primary-Color">
                <h2 className="text-xl lg:text-lg xl:text-2xl font-bold">
                  John Jacobs
                </h2>
                <p className="text-sm md:text-lg lg:text-xs xl:text-xl font-normal">
                  Up to 40% off on selected item
                </p>
              </div>
              <button className="aria-text-button">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9">
          {/* 3rd area  -----------------------------------------*/}
          <div className="max-w-[643px]  max-h-[509px] relative">
            {/* image div  */}
            <div className="w-full h-full">
              <img src={Picii} alt="" className="w-full" />
            </div>
            {/* info div  */}
            <div className="aria-text-section">
              <div className="pb-2 md:pb-3 xl:pb-8 primary-Color">
                <h2 className="text-xl lg:text-lg xl:text-2xl font-bold">
                  Tommy Hilfiger
                </h2>
                <p className="text-sm md:text-lg lg:text-xs xl:text-xl font-normal">
                  Up to 30% off on selected item
                </p>
              </div>
              <button className="aria-text-button">Buy Now</button>
            </div>
          </div>
          {/* 4th area  --------------------------------*/}
          <div className="max-w-[643px] max-h-[633px] relative">
            {/* image div  */}
            <div className="w-full h-full">
              <img src={Piciv} alt="" className="w-full" />
            </div>
            {/* info div  */}
            <div className="aria-text-section">
              <div className="pb-2 md:pb-3 xl:pb-8 primary-Color">
                <h2 className="text-xl lg:text-lg xl:text-2xl font-bold">
                  Vincent Chase
                </h2>
                <p className="text-sm md:text-lg lg:text-xs xl:text-xl font-normal">
                  Up to 10% off on selected item
                </p>
              </div>
              <button className="aria-text-button">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discountproducts;
