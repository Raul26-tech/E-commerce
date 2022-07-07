import { ReactNode, useState } from 'react';
import { BuyButton, Container } from '../buttonBuy/styles';
import Modal from 'react-modal';

import CloseIcon from '@mui/icons-material/Close';

Modal.setAppElement('#root');

interface IContentProps {
    onClick?: () => void;
    children: ReactNode;
    className?: string;
}

export default function ButtonBuy({ children, className }: IContentProps) {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleOpenModalProduct = () => {
        setIsOpenModal(true);
    };

    const handleCloseModalProduct = () => {
        setIsOpenModal(false);
    };

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
                // onRequestClose={handleCloseModalProduct}
                overlayClassName="overlay-modal"
                className="modal-content"
            >
                <Container>
                    Olá
                    <button
                        type="button"
                        onClick={handleCloseModalProduct}
                        className="btn-close"
                    >
                        <CloseIcon />
                    </button>
                </Container>
            </Modal>
        </>
    );
}
