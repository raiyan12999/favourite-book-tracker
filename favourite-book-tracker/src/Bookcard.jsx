function Bookcard(props){
    return(<div className="book">
        <p>Name: {props.name}</p>
        <p>Author: {props.author}</p>
    </div>);
}

export default Bookcard;