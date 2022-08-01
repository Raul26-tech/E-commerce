import { ReactNode } from 'react';
import { BuyButton } from '../buttonBuy/styles';

interface IContentProps {
    onClick?: () => void;
    children: ReactNode;
    addClassName?: string;
}

export default function ButtonBuy({
    children,
    addClassName,
    onClick,
}: IContentProps) {
    return (
        <>
            <BuyButton className={`${addClassName}`} onClick={onClick}>
                {children}
            </BuyButton>
        </>
    );
}
