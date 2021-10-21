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
        this.handleChange = this.handleChange.bind(this);
        this.purchaseFunction = this.purchaseFunction.bind(this);
    }

    handleChange(event) {
        this.setState({ value: parseInt(event.target.value) });
    }

    purchaseFunction(){
        if(this.state.value != ''){
            let priceKG = this.state.value * this.state.price;
            this.props.purchaseFunction(this.state.value, priceKG);
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
                <p>Price: {parseFloat(this.props.price)} per kg</p>
                <input value={this.state.value} onChange={this.handleChange} placeholder="kg"/>
                <button onClick={this.purchaseFunction}>Add</button>
            </div>
        );
    }
}

export default Item;