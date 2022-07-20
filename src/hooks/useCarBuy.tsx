import { createContext, ReactNode, useContext, useState } from "react";

interface CarBuyProps{
    children: ReactNode;
}

interface ICardProps {
    id?: string;
    category?: string;
    description?: string;
    image?: string;
    price?: string;
    title?: string;
} 

interface dataProduct {
    qtdProduct: number,
    products?: ICardProps
}

interface CarBuyData {
    qtdProduct: number;
    handleAddProduct: (dataProduct:dataProduct) => void;
    dataProduct: dataProduct | undefined;
}

export const CarBuyContext = createContext<CarBuyData>({} as CarBuyData);

export function CarBuyProvider({children}:CarBuyProps) {
    const [qtdProduct, SetQtdProduct] = useState(0);
    const [dataProduct, SetDataProduct] = useState<dataProduct | undefined>();

    function handleAddProduct(dataProduct:dataProduct){
        SetQtdProduct(qtdProduct + 1);
        SetDataProduct(dataProduct);
        console.log(dataProduct);
    }

    return (
        <CarBuyContext.Provider
          value={{qtdProduct,handleAddProduct,dataProduct}}
        >
            {children}
        </CarBuyContext.Provider>
    )
}

export function useCarBuy(){
    const context = useContext(CarBuyContext);
    return context;
}