import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import HomeNav from "./components/HomeNav";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="mynav d-flex">
          <HomeNav />
          <Search />
        </div>
        <Category />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
