import { ReactNode } from 'react';
import { BuyButton } from '../buttonBuy/styles';

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
    return (
        <>
            <BuyButton className={`${className}`} onClick={onClick}>
                {children}
            </BuyButton>
        </>
    );
}
