import Aboutus from "../AboutUs/Aboutus";
import BuyEasySteps from "../Buyeasysteps/BuyEasySteps";
import Discountproducts from "../DiscountSection/Discountproducts";
import SlideBanner from "../SlideBanner";

const Home = () => {
  return (
    <>
      <SlideBanner />
      <BuyEasySteps />
      <Discountproducts />
      <Aboutus />
    </>
  );
};

export default Home;
