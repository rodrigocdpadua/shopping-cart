const Item = (props) => {
    return (
        <div className='items'>
            <img src={props.src} width="200px" height="180px"></img>
            <h2>{props.title}</h2>
            <p>Price: {props.price} per kg</p>
            <button>Adicionar</button>
        </div>
    );
}

export default Item;