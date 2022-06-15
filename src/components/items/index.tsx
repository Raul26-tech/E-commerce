import { useEffect, useState } from "react";
import api from "../../services/api";
import { Content } from "./styles";


export default function Items () {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("products").then(({ data }) => {
      // console.log(data)
      setProducts(data);
    });
  }, []);

    return(
        <>
            <Content> 
                <h3>Title</h3>
            </Content>
        </>
    )
} 