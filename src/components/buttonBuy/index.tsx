import { ReactNode, useState } from 'react';
import Modal from 'react-modal';
import { BuyButton } from '../buttonBuy/styles';

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
                onRequestClose={handleCloseModalProduct}
            >
                Olá
            </Modal>
        </>
    );
}
