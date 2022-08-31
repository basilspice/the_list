import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyLists from "./screens/MyLists/MyLists";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import CreateList from "./screens/CreateList/CreateList"
import SingleList from "./screens/SingleList/SingleList";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import { BrowserRouter, Route } from "react-router-dom";
import { useState } from "react";
const App = () => {
  const [search, setSearch] = useState("")
  
  return (
    <BrowserRouter>
      <Header setSearch={setSearch}/>
      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/mylists" component={MyLists} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/createlist" component={CreateList} />
        <Route path="/lists/:id" component={SingleList} />
        <Route path="/mylists" component={() => <MyLists search={search} /> } />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
