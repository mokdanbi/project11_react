import Wrapper from './component/Wrapper';
import Header from './component/Header';
import Main from './component/Main';
import { Routes, Route } from 'react-router-dom';
import './css/App.scss'

function App() {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
