import { useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './styles/globalStyles';
import Home from './pages/Home';
import InvoiceDetails from './pages/InvoiceDetails';
import Drawer from './components/Drawer';
import InvoiceFormContainer from './components/InvoiceForm/InvoiceFormContainer';
import { Theme } from './styles/theme';
import { AppContext } from './context/AppContext';

function App() {
  const location = useLocation();
  const {isDrawerOpen} = useContext(AppContext);
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle isDrawerOpen={isDrawerOpen} />       
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/:invoiceId" element={<InvoiceDetails />} />
          </Routes>
        </AnimatePresence>
        <Drawer isOpen={isDrawerOpen}>
          <InvoiceFormContainer />
        </Drawer>
      </ThemeProvider>
    </div>
  );
}
export default App;
