export default function Price ({oldPrice,newPrice}){
    let oldStyles ={
        textDecoration :"line-through",
    };
    let newStyles ={
        fontWeight: "bold",
    };
    let styles ={
        backgroundColor:"#e0c367",
        height:"50px",
        borderBottomLeftRadius:"12px",
        borderBottomRightRadius:"12px",
        

    };
    return(
        <div style={styles}>
            <span> style={oldStyles}</span>
            &nbsp;&nbsp;&nbsp;
            <span> style= {newStyles}</span>
        </div>
    );
}