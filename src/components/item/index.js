import React from 'react';
import '../../styles.css';

class Item extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            src: this.props.src,
            title: this.props.title,
            price: this.props.price,
            value: ''
        }
    }

    handleChange = (event) => {
        this.setState({value: parseInt(event.target.value) });
    }

    addItem = () => {
        if(this.state.value !== ''){
            const priceKG = this.state.value * this.state.price;
            this.props.addItem(this.state.title, this.state.value, priceKG);
            this.setState({
                value: ''
            });
        }
    }

    render(){
        return (
            <div className='items'>
                <img src={this.state.src} alt=''></img>
                <h2>{this.state.title}</h2>
                <p>Price: {this.props.price.toFixed(2)} per kg</p>
                <input value={this.state.value} type="number" onChange={this.handleChange} placeholder="kg"/>
                <button onClick={this.addItem}>Add</button>
            </div>
        );
    }
}

export default Item;