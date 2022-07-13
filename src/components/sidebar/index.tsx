import { ReactNode } from 'react';
import { Conteiner } from './styles';

interface IContentProps {
    children?: ReactNode;
}

export default function Sidebar({ children }: IContentProps) {
    return (
        <>
            <Conteiner>{children}</Conteiner>
        </>
    );
}
