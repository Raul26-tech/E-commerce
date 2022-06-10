import "animate.css";
import { Button } from "./style";

interface IButtonProps {
  children: string;
  addClassName?: string;
  onClick?: () => void;
}

export function ButtomSubmit({children}: IButtonProps) {
  return (
    <>
      <Button className="animate__animated animate__pulse">
        {children}
      </Button>
    </>
  );
}
