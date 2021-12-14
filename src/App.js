import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainHome from './Pages/Home/MainHome/MainHome';
import Programs from './Pages/Programs/Programs';
import GetINTouch from './Pages/GetInTouch/GetInTouch';
import FAQS from './Pages/FAQS/FAQS';
import HowWeHelp from './Pages/HowWeHelp/HowWeHelp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/home" element={<MainHome />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/getInTouch" element={<GetINTouch />} />
        <Route path="/howWeHelp" element={<HowWeHelp />} />
        <Route path="/faqs" element={<FAQS />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
