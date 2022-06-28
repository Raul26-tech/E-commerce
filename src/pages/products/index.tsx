import Header from '../../components/header';
import ProductCard from '../../components/productCard';
import { InputSearch } from '../../components/search';

export function Products() {
    return (
        <>
            <Header />
            <InputSearch />
            <ProductCard />
        </>
    );
}
