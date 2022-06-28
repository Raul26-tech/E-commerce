import { useEffect, useState } from 'react';
import api from '../../services/api';
import ButtonBuy from '../buttonBuy';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { Content } from './styles';

//ESTRUTURA DO CARD
interface ICardProps {
    id: string;
    category: string;
    description: string;
    image: string;
    price: string;
    title: string;
}

export default function Items() {
    const [products, setProducts] = useState<ICardProps[]>([]);

    useEffect(() => {
        api.get<ICardProps[]>('products').then(({ data }) => {
            // console.log(data);
            setProducts(data);
        });
    }, []);

    // const handleRequest = useCallback((items: ICardProps[]) => {
    //     return items.map((item: ICardProps) => ({
    //         ...item,
    //         price: Number(item.price).toLocaleString('pt-br', {
    //             style: 'currency',
    //             currency: 'BRL',
    //         }),
    //     }));
    // }, []);

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
                            <ButtonBuy onclick={() => {}}>Comprar</ButtonBuy>
                            <ButtonBuy
                                className="btn-add-cart"
                                onclick={() => {}}
                            >
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
