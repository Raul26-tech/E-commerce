import { ReactNode } from 'react';
import { BuyButton } from '../buttonBuy/styles';

interface IContentProps {
    onclick?: () => void;
    children: ReactNode;
    className?: string;
}

export default function ButtonBuy({ children, className }: IContentProps) {
    return (
        <>
            <BuyButton className={`${className}`}>{children}</BuyButton>
        </>
    );
}
