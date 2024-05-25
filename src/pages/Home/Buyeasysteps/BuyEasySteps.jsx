// import icons
import SearchIcon from "../../../assets/icons/SearchIcon.png";
import SelectIcon from "../../../assets/icons/SelectIcon.png";
import PayIcon from "../../../assets/icons/payIcon.png";
import RecIcon from "../../../assets/icons/Irecivedicon.png";
import VectorIcon from "../../../assets/icons/Vector.png";

const BuyEasySteps = () => {
  return (
    <section className="max-w-7xl max-h-[538px] mx-auto">
      <div className="w-full h-full flex flex-col md:flex-row items-center  justify-around md:relative md:top-[-70px] lg:top-[-70px] z-20 gap-3 md:gap-0 sm:py-10 md:py-0">
        <div>
          <img src={SearchIcon} alt="" className="mx-auto" />
          <div>
            <h2 className="text-center text-xl primary-Color mt-10 mb-3 font-bold">
              Search you sunglass
            </h2>
            <p className="text-center text-base secondary-Color font-normal">
              Shop Stylish Eyewear Now
            </p>
          </div>
        </div>
        <div>
          <img src={VectorIcon} alt="" className="vactor-icon" />
        </div>
        <div>
          <img src={SelectIcon} alt="" className="mx-auto" />
          <div>
            <h2 className="text-center text-xl primary-Color mt-10 mb-3 font-bold">
              Search you sunglass
            </h2>
            <p className="text-center text-base secondary-Color font-normal">
              Shop Stylish Eyewear Now
            </p>
          </div>
        </div>
        <div>
          <img src={VectorIcon} alt="" className="vactor-icon" />
        </div>

        <div>
          <img src={PayIcon} alt="" className="mx-auto" />
          <div>
            <h2 className="text-center text-xl primary-Color mt-10 mb-3 font-bold">
              Search you sunglass
            </h2>
            <p className="text-center text-base secondary-Color font-normal">
              Shop Stylish Eyewear Now
            </p>
          </div>
        </div>

        <div>
          <img src={VectorIcon} alt="" className="vactor-icon" />
        </div>
        <div>
          <img src={RecIcon} alt="" className="mx-auto" />
          <div>
            <h2 className="text-center text-xl primary-Color mt-10 mb-3 font-bold">
              Search you sunglass
            </h2>
            <p className="text-center text-base secondary-Color font-normal">
              Shop Stylish Eyewear Now
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyEasySteps;
