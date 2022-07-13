import { useEffect, useState } from 'react';
import ButtonBuy from '../buttonBuy';
import Modal from 'react-modal';

import api from '../../services/api';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { Content } from './styles';
import { Container } from '../buttonBuy/styles';

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
                    <h3>Produto {productSelect?.title}</h3>
                    <div className="count">
                        <button>
                            <AddIcon />
                        </button>
                        <p>{0}</p>
                        <button>
                            <HorizontalRuleIcon />
                        </button>
                    </div>
                </Container>
            </Modal>
        </>
    );
}
