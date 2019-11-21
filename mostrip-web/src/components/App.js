import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./Login";
import Join from "./Join";
import Nav from "./Nav";
import Header from "./Header";
import Main from "./Main";
import Mypage from "./Mypage";
<<<<<<< HEAD
=======
import Footer from "./Footer";
>>>>>>> f1fc1f3ac9ff932758dc443e5eae3b63b6ddbf63
import Write from "./Write";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const auth = { isLoggedIn, isAdmin, setIsLoggedIn, setIsAdmin };

  return (
    <BrowserRouter>
      <Nav {...auth} />
      <Header />
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/write" component={Write} />
      <Route path="/join" component={Join} />
      <Route path="/mypage" component={Mypage} />
    </BrowserRouter>
  );
}

export default App;
