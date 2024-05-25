// import icon
import Disicon from "../../../../assets/icons/Discount.png";
import Saleicon from "../../../../assets/icons/Sale.png";
import Slidericon from "../../../../assets/icons/Slider.png";

const Productcard = ({ image, discount, data }) => {
  return (
    <div className="max-w-[417px] max-h-[630px] ">
      <div className="bg-[#F7F7F7] p-9">
        <div className="flex justify-between flex-row-reverse">
          <button>
            <img src={Saleicon} alt="" />
          </button>
          {discount && <img src={Disicon} alt="" />}
        </div>
        <div className="max-w-[343px] mx-auto">
          <img src={image} alt="" className="w-full" />
        </div>
        <div>
          <img src={Slidericon} alt="" className="mx-auto py-10" />
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-3xl font-normal pt-7 pb-2">{data?.name}</h2>
          {data?.offer && (
            <p className="font-bold text-xl">
              ${data?.offer}{" "}
              {data?.price && (
                <span className="opacity-[30%] font-normal">
                  {" "}
                  ${data?.price}
                </span>
              )}
            </p>
          )}
          <button className="pt-5 font-normal text-xl dark-Color border-b-2  border-b-[#5A5A5A]">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
