import { Input } from "../../components/input";
import "animate.css";
import image from "../../assets/ecommerce.svg";
import { Button } from "../../components/button/style";
import { Container } from "./style";

export function SignUp() {
  return (
    <>
      <Container>
        <main className="content-main">
          <div className="content-image">
            <img src={image} alt="" />
          </div>
          <div className="content-input">
            <h1 className="animate__animated animate__pulse animate__delay">
              Welcome, happy shopping !!!
            </h1>
            <span>Login your account</span>
            <Input
              type="text"
              placeholder="Nome"
              addClassName="animate__animated animate__pulse animate__delay"
            />
            <Input
              type="text"
              placeholder="E-mail"
              addClassName="animate__animated animate__pulse animate__delay"
            />
            <Input
              type="password"
              placeholder="Senha"
              addClassName="animate__animated animate__pulse animate__delay"
            />
            <Button type="submit">Cadastrar</Button>
          </div>
        </main>
      </Container>
    </>
  );
}
