import Navbar from './components/Navbar';
import AllPlans from './components/AllPlans';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/signIn' element={<SignIn/>}></Route>
        <Route path='/' element={<AllPlans/>}></Route>
      </Routes>
    </BrowserRouter>
    // <AllPlans/>
  )
}

export default App
