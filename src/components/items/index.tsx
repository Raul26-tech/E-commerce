import { useEffect, useState } from 'react';
import ButtonBuy from '../buttonBuy';
import Modal from 'react-modal';

import api from '../../services/api';

import { Container, Content } from './styles';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

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
    const [productSelect, setProductSelect] = useState<ICardProps>();
    const [amount, setAmount] = useState(0);

    function handleCount() {
        setAmount(amount + 1);
    }

    function handleDecreaseCount() {
        setAmount(amount - 1);
    }

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
                            <ButtonBuy
                                className="btn-add-cart"
                                onClick={() =>
                                    setProductSelect({
                                        id,
                                        category,
                                        image,
                                        price,
                                        title,
                                    })
                                }
                            >
                                Adicionar
                                <AddShoppingCartIcon className="iconCart" />
                            </ButtonBuy>
                        </div>
                    </div>
                ))}
            </Content>
            <Modal
                isOpen={!!productSelect}
                overlayClassName="overlay-modal"
                className="modal-content"
            >
                <Container>
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setProductSelect(undefined)}
                    >
                        <CloseIcon />
                    </button>
                    <div className="content-products">
                        <h3 className="text">{productSelect?.title}</h3>
                        <section className="section-product">
                            <img
                                className="image-product"
                                src={productSelect?.image}
                                alt="Imagem do produto"
                            />
                            <div className="adding-product">
                                <span>{productSelect?.price}</span>
                                <div className="add-quantity">
                                    <button
                                        className="button-adding"
                                        type="submit"
                                        onClick={handleCount}
                                    >
                                        <AddIcon />
                                    </button>
                                    <span className="amount">{amount}</span>
                                    <button
                                        className="button-decrease"
                                        type="submit"
                                        onClick={handleDecreaseCount}
                                    >
                                        <HorizontalRuleIcon />
                                    </button>
                                </div>
                                <ButtonBuy>Comprar</ButtonBuy>
                            </div>
                        </section>
                    </div>
                </Container>
            </Modal>
        </>
    );
}
