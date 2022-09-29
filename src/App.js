import { Routes, Route } from 'react-router-dom';
import Wrapper from './component/Wrapper';
import Header from './component/Header';
import Main from './component/Main';
import Brand from './pages/Brand';
import Menu from './pages/Menu';
import Store from './pages/Store';
import Franchise from './pages/Franchise';
import Notice from './pages/Notice';
import Community from './pages/Community';
import Mealncook from './pages/Mealncook';
import './css/App.scss'

function App() {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/store" element={<Store />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/community" element={<Community />} />
        <Route path="/mealncook" element={<Mealncook />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
