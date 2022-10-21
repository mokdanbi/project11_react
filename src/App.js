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
import Brand02 from './pages/Brand02';
import Brand03 from './pages/Brand03';
import Menu02 from './pages/Menu02';
import Menu03 from './pages/Menu03';
import Franchise02 from './pages/Franchise02';
import Franchise03 from './pages/Franchise03';
import Community02 from './pages/Community02';
import Store02 from './pages/Store02';
import Notice02 from './pages/Notice02';
import Notice03 from './pages/Notice03';
import Community03 from './pages/Community03';
import Community04 from './pages/Community04';
import Mealncook02 from './pages/Mealncook02';
import Mealncook03 from './pages/Mealncook03';
import Mealncook04 from './pages/Mealncook04';


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
        <Route path="/brand/sub02" element={<Brand02 content={NAVTITLE} />} />
        <Route path="/brand/sub03" element={<Brand03 content={NAVTITLE} />} />

        <Route path="/menu" element={<Menu content={NAVTITLE} />} />
        <Route path="/menu/sub02" element={<Menu02 content={NAVTITLE} />} />
        <Route path="/menu/sub03" element={<Menu03 content={NAVTITLE} />} />

        <Route path="/store" element={<Store content={NAVTITLE} />} />
        <Route path="/store/sub02" element={<Store02 content={NAVTITLE} />} />

        <Route path="/franchise" element={<Franchise content={NAVTITLE} />} />
        <Route path="/franchise/sub02" element={<Franchise02 content={NAVTITLE} />} />
        <Route path="/franchise/sub03" element={<Franchise03 content={NAVTITLE} />} />

        <Route path="/notice" element={<Notice content={NAVTITLE} />} />
        <Route path="/notice/sub02" element={<Notice02 content={NAVTITLE} />} />
        <Route path="/notice/sub03" element={<Notice03 content={NAVTITLE} />} />

        <Route path="/community" element={<Community content={NAVTITLE} />} />
        <Route path="/community/sub02" element={<Community02 content={NAVTITLE} />} />
        <Route path="/community/sub03" element={<Community03 content={NAVTITLE} />} />
        <Route path="/community/sub04" element={<Community04 content={NAVTITLE} />} />


        <Route path="/mealncook" element={<Mealncook content={NAVTITLE} />} />
        <Route path="/mealncook/sub02" element={<Mealncook02 content={NAVTITLE} />} />
        <Route path="/mealncook/sub03" element={<Mealncook03 content={NAVTITLE} />} />
        <Route path="/mealncook/sub04" element={<Mealncook04 content={NAVTITLE} />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;
