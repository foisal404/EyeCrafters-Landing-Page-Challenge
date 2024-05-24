import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default Main;
