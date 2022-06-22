import { useEffect, useState } from "react";
import api from "../../services/api";
import { ButtomSubmit } from "../button";
import { Button } from "../button/style";

import { Content } from "./styles";

//ESTRUTURA DO CARD
interface ICardProps {
  id: string;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
}

export default function Items() {
  const [products, setProducts] = useState<ICardProps[]>([]);

  useEffect(() => {
    api.get<ICardProps[]>("products").then(({ data }) => {
      // console.log(data);
      setProducts(data);
    });
  }, []);

  return (
    <>
      <Content>
        {products.map(({ id, category, description, image, price, title }) => (
          <div className="cardItems" key={id}>
            <h3>{title}</h3>
            <img src={image} alt="Imagem do produto" />
            <span>{category}</span>
            {/* <article>{description}</article> */}
            <span className="price">{price}</span>
            <div className="btn">
              
              
            </div>
          </div>
        ))}
      </Content>
    </>
  );
}
