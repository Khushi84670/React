import Product from "./Product.jsx";
import Price from "./Price.jsx";

function ProductTab (){
    let styles = {
        display:"flex",
        flexWrap:"wrap",
        justifyContent: "center",
        alignItems : "center",
    };
    
    return ( 
    <div style ={styles}>
        <Product title ="Longtech MX Master" idx={0} />
        <Product title ="Apple pencil" idx={1}/>
        <Product title ="Zebronics Zeb-transform"idx={2} />
        <Product title ="Petronics Toad 23"idx={3} />         
        </div>
    )
};
export default ProductTab;