import {Route , Switch  } from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar'
import Main from './Pages/Main/Main';
function App() {
 
  return (
      <>
          <Navbar/>
          <Switch>
              <Route path="/" component={Main}/>
          </Switch>
          <Footer/>
      </>

  )
}

export default App;
