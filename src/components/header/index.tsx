import { useState } from 'react';
import { Navbar } from './style';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import '../../styles/globals';
import { Link } from 'react-router-dom';

export default function Header() {
    // Abrindo Menu lateral
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    // const handleOpen = () => {
    //     setIsOpenMenu((prevState) => !prevState);
    // };

    return (
        <>
            <Navbar>
                <div>
                    <MenuOpenIcon
                        className="menu"
                        fontSize="large"
                        // onClick={handleOpen}
                    />
                    <ShoppingCartIcon className="cart" />
                </div>
            </Navbar>
        </>
    );
}
