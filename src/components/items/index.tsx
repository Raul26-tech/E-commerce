import { useEffect, useState } from 'react';
import ButtonBuy from '../buttonBuy';
import Modal from 'react-modal';

import api from '../../services/api';

import { Container, Content } from './styles';

import { HiMinusSm, HiPlus, HiShoppingCart, HiX } from 'react-icons/hi';
import { useCarBuy } from '../../hooks/useCarBuy';

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
    const [openModal, setOpenModal] = useState(false);
    const [amount, setAmount] = useState(0);
    const {handleAddProduct} = useCarBuy();


    function handleCount() {
        setAmount(amount + 1);
    }

    function handleDecreaseCount() {
        setAmount(amount === 0 ? 0 :  amount - 1);
    }

    function convertAmount(price: string | undefined, multiplier: boolean) {
        const amountMultiplier = multiplier ? Number(price) * amount : Number(price);
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(amountMultiplier)
    }
    

    useEffect(() => {
        api.get<ICardProps[]>('products').then(({ data }) => {
            setProducts(data);
        });
    }, []);

    return (
        <>
            <Content>
                {products.map(({ id, category, image, price,title }) => (
                    <div className="cardItems" key={id}>
                        <h3>{title}</h3>
                        <img src={image} alt="Imagem do produto" />
                        <span>{category}</span>
                        <span className="price">{convertAmount(price,false)}</span>
                        <div className="btn">
                            {/* <ButtonBuy>Comprar</ButtonBuy> */}
                            <ButtonBuy
                                className="btn-add-cart"
                                onClick={() =>{
                                addClassName="btn-add-cart"
                                onClick={() =>
                                    setProductSelect({
                                        id,
                                        category,
                                        image,
                                        price,
                                        title,
                                    }); setOpenModal(!openModal)}
                                }
                            >
                                Adicionar
                                <HiShoppingCart
                                    className="iconCart"
                                    size={24}
                                />
                            </ButtonBuy>
                        </div>
                    </div>
                ))}
            </Content>
            <Modal
                isOpen={openModal}
                overlayClassName="overlay-modal"
                className="modal-content"
            >
                <Container>
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setProductSelect(undefined)}
                    >
                        <HiX size={24} />
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
                                <span>{convertAmount(productSelect?.price,true)}</span>
                                <div className="add-quantity">
                                    <button
                                        className="button-adding"
                                        type="submit"
                                        onClick={handleCount}
                                    >
                                        <HiPlus size={22} />
                                    </button>
                                    <span className="amount">{amount}</span>
                                    <button
                                        className="button-decrease"
                                        type="submit"
                                        onClick={handleDecreaseCount}
                                    >
                                        <HiMinusSm size={22} />
                                    </button>
                                </div>
                                <ButtonBuy
                                  onClick={() =>
                                  {handleAddProduct({qtdProduct:amount,products:productSelect});
                                  setOpenModal(false)}}>Adicionar</ButtonBuy>
                            </div>
                        </section>
                    </div>
                </Container>
            </Modal>
        </>
    );
}
