import Header from "../../components/header";
import { useCarBuy } from "../../hooks/useCarBuy";

export function CarPage() {
    const {qtdProduct,dataProduct} = useCarBuy();
    return (
        <>
            <Header />
            <h1>{dataProduct?.products?.price}</h1>
        </>
    )
}