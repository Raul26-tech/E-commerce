import { useState } from "react";
import { Container } from "./style";
import { FaBars } from "react-icons/fa";
import '../../styles/globals'

export default function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Container>
        <FaBars onClick={showSidebar}/>
        
      </Container>
    </>
  );
}
