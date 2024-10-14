import "./product.css"
import Price from "./Price.jsx";
let styles = {backgrondColor:"yellow"};
function Product ({title,idx}){
    let oldPrices = ["12,999","11,999","1,439","499"];
    let newPrices = ["6,999","5,999","999","399"];
    let descricption = [["8,000 DPI","5 programmable buttons"],
    ["Intutive Surface","Designed for ipad pro"],
    ["Designed for ipad pro","Intutive Surface"],
    ["Wireless","optical"]
];

    return(
        <div className = "product" style={styles}> 

           <h4>{title}</h4>
         
           <p>{descricption[idx][0]}</p>
           <p>{descricption[idx][1]}</p>
           <p>{descricption[idx][2]}</p>
           <p>{descricption[idx][3]}</p>
           <p> {oldPrices[idx]} {newPrices[idx]}</p>
        </div>
        
    )
}
export default Product;