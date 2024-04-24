import { FC, PropsWithChildren } from "react";
import { OrderlyConfigProvider } from "@orderly.network/hooks";


import Home from './pages/website/home'
import About from './pages/website/about'
import Swap from './pages/account/swap'
import OrderlyApi from './pages/website/orderlyApi'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';


const brokerId = "orderly";





 const App: FC<PropsWithChildren> = () => {
  return (
    <OrderlyConfigProvider brokerId={brokerId} networkId="testnet">
       <BrowserRouter>
     <Routes>
       <Route path="/"  element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/swap" element={<Swap/>}/>
       <Route path="/orderlyapi" element={<OrderlyApi/>}/>
     </Routes>
     
    </BrowserRouter>

    </OrderlyConfigProvider>
  );
};

export default App
