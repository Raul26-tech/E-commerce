import { ReactNode, useState } from 'react';
import { BuyButton, Container } from '../buttonBuy/styles';
import Modal from 'react-modal';

import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { ButtomSubmit } from '../button';

Modal.setAppElement('#root');

interface IContentProps {
    onClick?: () => void;
    children: ReactNode;
    className?: string;
}

export default function ButtonBuy({ children, className }: IContentProps) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [amount, setAmount] = useState(0);

    const handleOpenModalProduct = () => {
        setIsOpenModal(true);
    };

    const handleCloseModalProduct = () => {
        setIsOpenModal(false);
    };

    function handleCount() {
        setAmount(amount + 1);
    }

    function handleDecreaseCount() {
        setAmount(amount - 1);
    }

    return (
        <>
            <BuyButton
                className={`${className}`}
                onClick={handleOpenModalProduct}
            >
                {children}
            </BuyButton>
            <Modal
                isOpen={isOpenModal}
                overlayClassName="overlay-modal"
                className="modal-content"
            >
                <Container>
                    <button
                        type="button"
                        onClick={handleCloseModalProduct}
                        className="btn-close"
                    >
                        <CloseIcon />
                    </button>
                    <h3>Produto</h3>
                    <div className="count">
                        <button onClick={handleCount}>
                            <AddIcon />
                        </button>
                        <p>{amount}</p>
                        <button onClick={handleDecreaseCount}>
                            <HorizontalRuleIcon />
                        </button>
                    </div>
                </Container>
            </Modal>
        </>
    );
}
