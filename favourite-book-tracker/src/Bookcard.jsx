function Bookcard(props){

    let clicked = false;
    let classname = "book";

    const handleFavourite = () => {
        if(clicked){
            clicked = false;
            classname = "book";
        }
        else{
            clicked = true;
            classname = "favbook";
        }
        console.log("Name of the clicked book is: " + props.name);
        console.log("Value of clicked: " + clicked);
        console.log("value of classname: " + classname);
    };

    

    // if(clicked){
    //     classname = "favbook";
    // }
    // else{
    //     classname = "book";
    // }

    return(<div className={classname}>
        <p>Name: {props.name}</p>
        <p>Author: {props.author}</p>
        <button onClick={handleFavourite}> Add to favourite </button>
    </div>);
}

export default Bookcard;