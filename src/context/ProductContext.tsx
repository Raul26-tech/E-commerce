import { createContext, ReactNode, useEffect, useState } from 'react';
import api from '../services/api';

interface IProductProviderProps {
    children?: ReactNode;
}

interface IProductProps {
    id?: string;
    category?: string;
    description?: string;
    image?: string;
    price?: string;
    title?: string;
}

export const ProductContext = createContext<IProductProps>({} as IProductProps);

export const ProductContextProvider = ({ children }: IProductProviderProps) => {
    // const [product, setProduct] = useState();

    // useEffect(() => {
    //     api.get('produtos').then(({ data }) => {
    //         setProduct(data);
    //     });
    // }, []);

    return (
        <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
    );
};
