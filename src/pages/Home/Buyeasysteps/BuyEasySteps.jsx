// import icons
import SearchIcon from "../../../assets/icons/SearchIcon.png";
import SelectIcon from "../../../assets/icons/SelectIcon.png";
import PayIcon from "../../../assets/icons/payIcon.png";
import RecIcon from "../../../assets/icons/Irecivedicon.png";
import VectorIcon from "../../../assets/icons/Vector.png";

const BuyEasySteps = () => {
  return (
    <section className="max-w-7xl  mx-auto">
      <div className="w-full h-full flex flex-col md:flex-row items-center  justify-around md:relative md:top-[-70px] lg:top-[-70px] z-20 gap-3 md:gap-0 py-10 md:py-0">
        <div>
          <img src={SearchIcon} alt="" className="mx-auto" />
          <div>
            <h2 className="icon-heading">Search you sunglass</h2>
            <p className="icon-text">Shop Stylish Eyewear Now</p>
          </div>
        </div>
        <div>
          <img src={VectorIcon} alt="" className="vactor-icon" />
        </div>
        <div>
          <img src={SelectIcon} alt="" className="mx-auto" />
          <div>
            <h2 className="icon-heading">Select Sunglass</h2>
            <p className="icon-text">Shade Your Style</p>
          </div>
        </div>
        <div>
          <img src={VectorIcon} alt="" className="vactor-icon" />
        </div>

        <div>
          <img src={PayIcon} alt="" className="mx-auto" />
          <div>
            <h2 className="icon-heading">Make Payment</h2>
            <p className="icon-text">Securely Checkout Now</p>
          </div>
        </div>

        <div>
          <img src={VectorIcon} alt="" className="vactor-icon" />
        </div>
        <div>
          <img src={RecIcon} alt="" className="mx-auto" />
          <div>
            <h2 className="icon-heading">Received Product</h2>
            <p className="icon-text">See the World Clearly</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyEasySteps;
