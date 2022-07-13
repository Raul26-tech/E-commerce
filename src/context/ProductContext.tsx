import { createContext, ReactNode } from 'react';

// interface IProductProps {
//     id?: string;
//     category?: string;
//     description?: string;
//     image?: string;
//     price?: string;
//     title?: string;
// }

interface IProductProviderProps {
    children?: ReactNode;
}

export const ProductContext = createContext({});

export const ProductContextProvider = ({ children }: IProductProviderProps) => {
    return (
        <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
    );
};
