import { Routes as RoutesDOM, BrowserRouter, Route } from 'react-router-dom';
import { Login } from '../pages/login';
import { Products } from '../pages/products';
import { SignUp } from '../pages/signUp';

export function Routes() {
    return (
        <BrowserRouter>
            <RoutesDOM>
                <Route path="/" element={<Products />} />
                <Route path="/sign" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/products" element={<Products />} />
            </RoutesDOM>
        </BrowserRouter>
    );
}
