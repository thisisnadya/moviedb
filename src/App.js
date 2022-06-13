import styled from 'styled-components'
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import HomeNav from "./components/HomeNav";
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav>
          <HomeNav />
          <Search />
        </Nav>
        <Pages />
        <Footer/> 
      </div>
    </BrowserRouter>
  );
}

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 1rem;
  }
`

export default App;
