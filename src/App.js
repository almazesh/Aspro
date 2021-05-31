import {Route , Switch ,Redirect } from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar'
import Katalog from './Pages/Catalog/index';
import singleCatalog from './Pages/Catalog/SingleCatalog';
import singleProd from './Pages/Catalog/SingleCatalog/SingleProduct';
import Contact from './Pages/Contacts';
import Main from './Pages/Main/Main';
import singleProject from './Pages/Main/singleProject';
import Partner from './Pages/Partner';
import Project from './Pages/Project';
import Solution from './Pages/Solves';
import singleSolve from './Pages/Solves/singleSolve';
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
                <Route path="/singleCatalog" component={singleCatalog}/> 
                <Route path="/singleProject" component={singleProject}/>
                <Route path="/single-solve" component={singleSolve}/>
                <Route path="/single-product" component={singleProd}/>
                <Redirect to="/"/>
            </Switch>
          <Footer/>
      </>

  )
}

export default App;
