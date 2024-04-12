import React from 'react'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import { Home,About, Profile,SignIn,SignUp } from './pages';
import {Header }from './components';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute/>} >
         <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
