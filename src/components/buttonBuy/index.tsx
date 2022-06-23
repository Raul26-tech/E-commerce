import { BuyButton } from '../buttonBuy/styles';

interface IContentProps {
    onclick?: () => void;
    children: string;
    className?: string;
}

export default function ButtonBuy({ children, className }: IContentProps) {
    return (
        <>
            <BuyButton className={`${className}`}>{children}</BuyButton>
        </>
    );
}
