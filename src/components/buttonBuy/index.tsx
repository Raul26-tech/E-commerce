import { ReactNode, useState } from 'react';
import { BuyButton } from '../buttonBuy/styles';

interface IContentProps {
    onclick?: () => void;
    children: ReactNode;
    className?: string;
}

export default function ButtonBuy({ children, className }: IContentProps) {
    const [isOpenBuyMOdal, setIsOpenBuyMOdal] = useState(false);

    return (
        <>
            <BuyButton className={`${className}`}>{children}</BuyButton>
        </>
    );
}
