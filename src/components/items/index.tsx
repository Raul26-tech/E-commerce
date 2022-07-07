import { useEffect, useState } from 'react';
import ButtonBuy from '../buttonBuy';

import api from '../../services/api';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { Content } from './styles';

//ESTRUTURA DO CARD
interface ICardProps {
    id?: string;
    category?: string;
    description?: string;
    image?: string;
    price?: string;
    title?: string;
}

export default function Items() {
    const [products, setProducts] = useState<ICardProps[]>([]);

    useEffect(() => {
        api.get<ICardProps[]>('products').then(({ data }) => {
            setProducts(data);
        });
    }, []);

    return (
        <>
            <Content>
                {products.map(({ id, category, image, price, title }) => (
                    <div className="cardItems" key={id}>
                        <h3>{title}</h3>
                        <img src={image} alt="Imagem do produto" />
                        <span>{category}</span>
                        <span className="price">{price}</span>
                        <div className="btn">
                            <ButtonBuy>Comprar</ButtonBuy>
                            <ButtonBuy className="btn-add-cart">
                                Adicionar
                                <AddShoppingCartIcon className="iconCart" />
                            </ButtonBuy>
                        </div>
                    </div>
                ))}
            </Content>
        </>
    );
}
