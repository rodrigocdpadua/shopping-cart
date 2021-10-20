import '../../styles.css';

const Item = (props) => {
    return (
        <div className='items'>
            <img src={props.src}></img>
            <h2>{props.title}</h2>
            <p>Price: {parseFloat(props.price)} per kg</p>
            <input placeholder="kg"/>
            <button>Add</button>
        </div>
    );
}

export default Item;