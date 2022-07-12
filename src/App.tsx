import { ProductContextProvider } from './context/ProductContext';
import { Routes } from './routes';
import { GlobalStyle } from './styles/globals';

function App() {
    return (
        <>
            <ProductContextProvider>
                <Routes />
            </ProductContextProvider>
            <GlobalStyle />
        </>
    );
}

export default App;
