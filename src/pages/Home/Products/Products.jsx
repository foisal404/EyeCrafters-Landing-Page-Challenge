import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Productcard from "./productCard/Productcard";

// image import
import glassi from "../../../assets/glass/glassi.png";
import glassii from "../../../assets/glass/glassii.png";
import glassiii from "../../../assets/glass/glassiii.png";
import glassiv from "../../../assets/glass/glassiv.png";
import glassv from "../../../assets/glass/glassv.png";
import glassvi from "../../../assets/glass/glassvi.png";

const Products = () => {
  return (
    <section className="py-36 px-5 md:px-28  2xl:px-60">
      <div>
        <div>
          <h2 className="text-5xl font-bold primary-Color">Our Products</h2>
          <p className="secondary-Color text-base font-normal py-5 text-justify">
            Experience crystal clear vision and elevated style with our <br />{" "}
            premium collection of eyeglasses.
          </p>
        </div>
        <div>
          <Tabs defaultIndex={1}>
            <TabList className="tab-list">
              <Tab className="tab" selectedClassName="tab--selected">
                Latest
              </Tab>
              <Tab className="tab" selectedClassName="tab--selected">
                Special
              </Tab>
              <Tab className="tab" selectedClassName="tab--selected">
                Best sell
              </Tab>
            </TabList>

            <TabPanel className="tab-panel">
              <div className="flex flex-wrap justify-around gap-9">
                <Productcard
                  image={glassi}
                  discount="true"
                  data={{
                    name: "Bravo Sunglasses",
                    price: "150",
                    offer: "100",
                  }}
                />

                <Productcard
                  image={glassii}
                  discount="true"
                  data={{ name: "Vincent Chase", price: "120", offer: "150" }}
                />
                <Productcard
                  image={glassiii}
                  data={{ name: "John Jacobs", offer: "100" }}
                />
                <Productcard
                  image={glassiv}
                  discount="true"
                  data={{ name: "Tommy Hilfiger", price: "150", offer: "130" }}
                />
                <Productcard
                  image={glassv}
                  data={{ name: "Ray Ban", offer: "100" }}
                />
                <Productcard
                  image={glassvi}
                  discount="true"
                  data={{ name: "Occhiali", price: "150", offer: "110" }}
                />
              </div>
            </TabPanel>
            <TabPanel className="tab-panel">
              <div className="flex flex-wrap justify-around gap-9">
                <Productcard
                  image={glassi}
                  discount="true"
                  data={{
                    name: "Bravo Sunglasses",
                    price: "150",
                    offer: "100",
                  }}
                />

                <Productcard
                  image={glassii}
                  discount="true"
                  data={{ name: "Vincent Chase", price: "120", offer: "150" }}
                />
                <Productcard
                  image={glassiii}
                  data={{ name: "John Jacobs", offer: "100" }}
                />
                <Productcard
                  image={glassiv}
                  discount="true"
                  data={{ name: "Tommy Hilfiger", price: "150", offer: "130" }}
                />
                <Productcard
                  image={glassv}
                  data={{ name: "Ray Ban", offer: "100" }}
                />
                <Productcard
                  image={glassvi}
                  discount="true"
                  data={{ name: "Occhiali", price: "150", offer: "110" }}
                />
              </div>
            </TabPanel>
            <TabPanel className="tab-panel">
              <div className="flex flex-wrap justify-around gap-9">
                <Productcard
                  image={glassi}
                  discount="true"
                  data={{
                    name: "Bravo Sunglasses",
                    price: "150",
                    offer: "100",
                  }}
                />

                <Productcard
                  image={glassii}
                  discount="true"
                  data={{ name: "Vincent Chase", price: "120", offer: "150" }}
                />
                <Productcard
                  image={glassiii}
                  data={{ name: "John Jacobs", offer: "100" }}
                />
                <Productcard
                  image={glassiv}
                  discount="true"
                  data={{ name: "Tommy Hilfiger", price: "150", offer: "130" }}
                />
                <Productcard
                  image={glassv}
                  data={{ name: "Ray Ban", offer: "100" }}
                />
                <Productcard
                  image={glassvi}
                  discount="true"
                  data={{ name: "Occhiali", price: "150", offer: "110" }}
                />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Products;
