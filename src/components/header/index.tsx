import { useState } from 'react';
import { Menu, Navbar } from './style';

import {
    HiMenu,
    HiOutlineLogout,
    HiOutlineTable,
    HiShoppingCart,
    HiStop,
    HiUserAdd,
} from 'react-icons/hi';
import '../../styles/globals';
import { Link } from 'react-router-dom';

export default function Header() {
    // Abrindo Menu lateral
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleOpen = () => {
        setIsOpenMenu((prevState) => !prevState);
    };

    return (
        <>
            <Navbar>
                <HiMenu onClick={handleOpen} size={26} />
                <Link to="/carPage">
                    <HiShoppingCart size={26} />
                </Link>
            </Navbar>
            {isOpenMenu && (
                <Menu>
                    <ul>
                        <li>
                            <Link to="/products" className="link">
                                Categorias
                                <div className="icon">
                                    <HiOutlineTable size={22} />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/signUp" className="link">
                                Cadastre-se
                                <div className="icon">
                                    <HiUserAdd size={22} />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/sign" className="link">
                                Logout
                                <div className="icon">
                                    <HiOutlineLogout size={22} />
                                </div>
                            </Link>
                        </li>
                    </ul>
                </Menu>
            )}
        </>
    );
}
