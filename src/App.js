import {Route , Switch ,Redirect } from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar'
import Blog from './Pages/Blog';
import Bucket from './Pages/Bucket';
import Katalog from './Pages/Catalog/index';
import SingleCatalog from './Pages/Catalog/SingleCatalog';
import singleProd from './Pages/Catalog/SingleCatalog/SingleProduct';
import Company from './Pages/Company';
import Contact from './Pages/Contacts';
import Designer from './Pages/Designer';
import singleDesigner from './Pages/Designer/singleDesigner';
import Download from './Pages/Download';
import Garant from './Pages/Garant';
import Main from './Pages/Main/Main';
import singleProject from './Pages/Main/singleProject';
import Order from './Pages/Order';
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
                <Route path="/catalog" exact  component={Katalog} />
                <Route path="/singleCatalog/:id" component={SingleCatalog} />
                <Route path="/solution" component={Solution}/>
                <Route path="/project" component={Project}/>
                <Route path="/partner" component={Partner}/>
                <Route path='/bucket' component={Bucket}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/singleProject" component={singleProject}/>
                <Route path="/single-solve" component={singleSolve}/>
                <Route path="/single-product" component={singleProd}/>
                <Route path="/designer-partners" component={Designer}/>
                <Route path="/single-designer" component={singleDesigner}/>
                <Route path='/garant' component={Garant}/>
                <Route path='/order-support' component={Order}/>
                <Route path='/company' component={Company}/>
                <Route path='/download' component={Download} />
                <Route path='/blog' component={Blog}/>
                <Redirect to="/"/>
            </Switch>
          <Footer/>
      </>

  )
}

export default App;
