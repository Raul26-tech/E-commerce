import { useEffect, useState } from "react";
import { Navbar } from "./style";
import { FaBars } from "react-icons/fa";
import { BsCartPlusFill } from "react-icons/bs";
import api from "../../services/api";
import "../../styles/globals";

export default function Header() {
  // Abrindo Menu lateral
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("products").then(({ data }) => {
      // console.log(data)
      setProducts(data);
    });
  }, []);

  return (
    <>
      <Navbar>
        <FaBars onClick={showSidebar} />
        <BsCartPlusFill className="cart"/>
        {/* <Sidebar></Sidebar> */}
      </Navbar>
    </>
  );
}
