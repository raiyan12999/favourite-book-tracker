function Bookcard(props){

    let clicked = false;

    const handleFavourite = () => {
        if(clicked){
            clicked = false;
        }
        else{
            clicked = true;
        }
        console.log("Name of the clicked book is: " + props.name);
        console.log("Value of clicked: " + clicked);
    };

    return(<div className="book">
        <p>Name: {props.name}</p>
        <p>Author: {props.author}</p>
        <button onClick={handleFavourite}> Add to favourite </button>
    </div>);
}

export default Bookcard;