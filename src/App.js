import {Route , Switch ,Redirect } from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar'
import Katalog from './Pages/Catalog/index';
import Contact from './Pages/Contacts';
import Main from './Pages/Main/Main';
import Partner from './Pages/Partner';
import Project from './Pages/Project';
import Solution from './Pages/Solves';
function App() {
 
  return (
      <>
          <Navbar/>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/catalog" component={Katalog} />
                <Route path="/solution" component={Solution}/>
                <Route path="/project" component={Project}/>
                <Route path="/partner" component={Partner}/>
                <Route path="/contact" component={Contact}/>
                <Redirect to="/"/>
            </Switch>
          <Footer/>
      </>

  )
}

export default App;
