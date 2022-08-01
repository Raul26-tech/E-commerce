import { CarBuyProvider } from './hooks/useCarBuy';
import { Routes } from './routes';
import { GlobalStyle } from './styles/globals';

function App() {
    return (
        <CarBuyProvider>
            <Routes />
            <GlobalStyle />
        </CarBuyProvider>
    );
}

export default App;
