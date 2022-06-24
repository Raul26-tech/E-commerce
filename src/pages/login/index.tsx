import { useEffect, useState } from 'react';
import { Container } from './style';
import { Input } from '../../components/input';
import image from '../../assets/ecommerce.svg';
import api from '../../services/api';
import 'animate.css';
import { ButtomSubmit } from '../../components/button';
import { Link } from 'react-router-dom';

export function Login() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        api.get('users').then(({ data }) => {
            console.log(data);
            setUser(data);
        });
    }, []);

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
                            placeholder="E-mail"
                            addClassName="animate__animated animate__pulse animate__delay"
                        />
                        <Input
                            type="password"
                            placeholder="Senha"
                            addClassName="animate__animated animate__pulse animate__delay"
                        />
                        <ButtomSubmit>
                            <Link className="linkNavigation" to="/products">
                                Entrar
                            </Link>
                        </ButtomSubmit>
                        <Link className="forgotPassword" to="/signUp">
                            Não possuí conta ou esqueceu a sua senha ?
                            Cadastre-se
                        </Link>
                    </div>
                </main>
            </Container>
        </>
    );
}
