function Bookcard(props){

    const handleFavourite = () => console.log("Name of the clicked book is: " + props.name);

    return(<div className="book">
        <p>Name: {props.name}</p>
        <p>Author: {props.author}</p>
        <button onClick={handleFavourite}> Add to favourite </button>
    </div>);
}

export default Bookcard;