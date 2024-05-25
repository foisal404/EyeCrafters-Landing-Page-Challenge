// image import
import Bannerii from "../../../assets/Bannerii.png";
const Aboutus = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row w-full ">
        <div className="md:w-1/2 p-10 bg-[#FED29C] flex justify-center items-center">
          <div className="max-w-lg">
            <h2 className="text-xl md:text-xl xl:text-4xl  font-bold primary-Color py-3">
              Experience clear vision with <br /> OptiChroma Vision Frames
            </h2>
            <p className="text-sm md:text-sm lg:text-xl secondary-Color font-normal md:py-2 xl:py-3 py-1 text-wrap">
              At OptiChroma, we believe that everyone deserves clear vision and
              stylish eyewear. That's why we've designed a collection of frames
              that prioritize both form and function.
            </p>
            <p className="text-sm md:text-sm lg:text-xl secondary-Color font-normal md:py-2 xl:py-3 py-1 text-wrap">
              Our team of experts is dedicated to helping you find the perfect
              pair of glasses.
            </p>
            <button className="aria-text-button mt-3 md:mt-5 xl:mt-10">
              About Us
            </button>
          </div>
        </div>
        <div className="md:w-1/2 h-full">
          <div className="w-full h-full">
            <img src={Bannerii} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
