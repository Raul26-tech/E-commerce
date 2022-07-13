import { ReactNode, useState } from 'react';
import { BuyButton, Container } from '../buttonBuy/styles';
import Modal from 'react-modal';

import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

Modal.setAppElement('#root');

interface IContentProps {
    onClick?: () => void;
    children: ReactNode;
    className?: string;
}

export default function ButtonBuy({
    children,
    className,
    onClick,
}: IContentProps) {
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
            <BuyButton className={`${className}`} onClick={onClick}>
                {children}
            </BuyButton>
        </>
    );
}
