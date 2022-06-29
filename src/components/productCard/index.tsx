import Items from '../items';
import { Loading } from '../loading';
import { Container } from './styles';

interface IProductsProps {
    isLoading?: boolean;
}

export default function ProductCard({ isLoading }: IProductsProps) {
    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <Container>
                <Items />
            </Container>
        </>
    );
}
