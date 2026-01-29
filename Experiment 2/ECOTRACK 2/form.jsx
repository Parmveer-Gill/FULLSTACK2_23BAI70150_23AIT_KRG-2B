function hadleSubmit(event){
    event.preventDefault();
    console.log("Form Submmited");
}
export default function Form(){
    return(
        <form>
            <input placeholder="Type Here!" />
            <button onClick={hadleSubmit}>Submit!</button>
        </form>
    )
}