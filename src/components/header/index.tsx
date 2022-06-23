import { useState } from 'react';
import { Navbar } from './style';
import { FaBars } from 'react-icons/fa';
import { BsCartPlusFill } from 'react-icons/bs';
import '../../styles/globals';
import ProductCard from '../productCard';

export default function Header() {
    // Abrindo Menu lateral
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <Navbar>
                <div>
                    <FaBars onClick={showSidebar} />
                    <BsCartPlusFill className="cart" />
                    {/* <Sidebar></Sidebar> */}
                </div>
            </Navbar>
            <ProductCard />
        </>
    );
}
