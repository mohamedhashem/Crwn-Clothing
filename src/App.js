import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header.component";
import AuthPage from "./pages/auth/auth.component";
import SignIn from "./components/auth/sign-in/signin.component";
import { auth } from "./components/firebase/firebase"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/shop" element={<ShopPage />} />

          <Route path="/auth" element={<AuthPage />} >
            <Route path="signin" element={<SignIn />} />
          </Route>

          <Route path="/men" element={<div><h1>Hello This is MEN</h1></div>} />
          <Route path="/women" element={<div><h1>Hello This is WOMEN</h1></div>} />
          <Route path="/hats" element={<div><h1>Hello This is HATS</h1></div>} />
          <Route path="/jackets" element={<div><h1>Hello This is JACKETS</h1></div>} />
          <Route path="/sneakers" element={<div><h1>Hello This is SNEAKERS</h1></div>} />
        </Routes>
      </div>
    );
  }
}
export default App;
