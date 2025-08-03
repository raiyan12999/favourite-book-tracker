function Bookcard(props){

    const handleFavourite = () => console.log("Handle Favourtie is clicked");

    return(<div className="book">
        <p>Name: {props.name}</p>
        <p>Author: {props.author}</p>
        <button onClick={handleFavourite}> Add to favourite </button>
    </div>);
}

export default Bookcard;