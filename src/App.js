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
import Footer from './component/Footer';
import './css/App.scss'


function App() {
  const NAVTITLE = [
    { id: 0, title: "브랜드", link: "/brand" },
    { id: 1, title: "메뉴", link: "/menu" },
    { id: 2, title: "매장안내", link: "/store" },
    { id: 3, title: "창업문의", link: "/franchise" },
    { id: 4, title: "공지사항", link: "/notice" },
    { id: 5, title: "커뮤니티", link: "/community" },
    { id: 6, title: "밀앤쿡", link: "/mealncook" }
  ]

  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/brand" element={<Brand content={NAVTITLE} />} />
        <Route path="/menu" element={<Menu content={NAVTITLE} />} />
        <Route path="/store" element={<Store content={NAVTITLE} />} />
        <Route path="/franchise" element={<Franchise content={NAVTITLE} />} />
        <Route path="/notice" element={<Notice content={NAVTITLE} />} />
        <Route path="/community" element={<Community content={NAVTITLE} />} />
        <Route path="/mealncook" element={<Mealncook content={NAVTITLE} />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;
