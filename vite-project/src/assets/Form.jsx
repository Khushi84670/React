function handleFormSubmit() {
    console.log("submitted");
}
export default function Form(){
    return(
        <>
        <input placeholder="write domething"></input>
        <button onClick={{handleFormSubmit}}>Submit </button> 
        </>
    )
};