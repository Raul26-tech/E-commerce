import { useState } from 'react';
import { Menu, Navbar } from './style';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HiOutlineUserAdd from 'react-icons/hi';
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
                <MenuOpenIcon onClick={handleOpen} />
                <ShoppingCartIcon />
            </Navbar>
            {isOpenMenu && (
                <Menu>
                    <ul>
                        <li>
                            <Link to="/products" className="link">
                                Categorias
                            </Link>
                        </li>
                        <li>
                            <Link to="/signUp" className="link">
                                Cadastre-se
                            </Link>
                        </li>
                        <li>
                            <Link to="/sign" className="link">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </Menu>
            )}
        </>
    );
}
