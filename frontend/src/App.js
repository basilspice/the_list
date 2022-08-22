import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyLists from "./screens/MyLists/MyLists";
import { BrowserRouter, Route } from "react-router-dom";
const App= () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path='/' component={LandingPage} exact/>
        <Route path='/mylists' component={MyLists} />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
