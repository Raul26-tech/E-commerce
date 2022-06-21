/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import api from "../../services/api";

import { Content } from "./styles";

export default function Items() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("products").then(({ data }) => {
      console.log(data);
      setProducts(data);
    });
  }, []);

  return (
    <>
      <Content>
        {products.map(
          ({ id, category, description, image, price, title }) => (
            <div className="cardItems" key={id}>
              <h3>{title}</h3>
              <img src={image} alt="Imagem do produto" />
              <span>{category}</span>
              <article>{description}</article>
              <span className="price">{price}</span>
            </div>
          )
        )}
      </Content>
    </>
  );
}
