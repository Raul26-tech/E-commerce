import 'animate.css';
import { ReactNode } from 'react';
import { Button } from './style';

interface IButtonProps {
    children: ReactNode;
    addClassName?: string;
    onClick?: () => void;
}

export function ButtomSubmit({ children }: IButtonProps) {
    return (
        <>
            <Button className="animate__animated animate__pulse">
                {children}
            </Button>
        </>
    );
}
