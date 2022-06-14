import { Conteiner } from "./styles";

interface IContentProps {
  children?: string;
}

export default function Sidebar({ children }: IContentProps) {
  return (
    <>
      <Conteiner>{children}</Conteiner>
    </>
  );
}
