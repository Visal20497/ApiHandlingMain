import Product3 from "./component/Prod3";
import Product from "./component/Product";
import Product2 from "./component/Product2";
import Authentication from "./context/Authentication";
import ProductContext from "./context/ProductContext";

function App() {
  return (
    <Authentication>
      <ProductContext>
         <Product />
            <hr/>
         <Product2/>
         <hr/>
         <Product3/>
      </ProductContext>
       
      
    </Authentication>
  );
}

export default App;
