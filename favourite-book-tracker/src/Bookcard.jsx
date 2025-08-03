function Bookcard(props){
    return(<div className="book">
        <p>Name: {props.name}</p>
        <p>Author: {props.author}</p>
        <button> Add to favourite </button>
    </div>);
}

export default Bookcard;