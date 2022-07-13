import { useState } from 'react';
import { Navbar } from './style';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import '../../styles/globals';

export default function Header() {
    // Abrindo Menu lateral
    const [sidebar, setSidebar] = useState(false);

    // const handleOpenSidebar () => {
    //     setSidebar(prevState => !prevState)
    // }

    return (
        <>
            <Navbar>
                <div>
                    <MenuOpenIcon
                        className="menu"
                        fontSize="large"
                        // onClick={handleOpenSidebar}
                    />
                    <ShoppingCartIcon className="cart" />
                </div>
            </Navbar>
        </>
    );
}
