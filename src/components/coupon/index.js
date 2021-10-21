import React from 'react';
import '../../styles.css';

class Coupon extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value: '',
            couponOn: false,
            readOnly: false
        }
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    applyCoupon = () => {
        if(this.state.value !== ''){
            this.props.couponFunction(this.state.value);

            this.setState({
                readOnly: true,
                couponOn: true
            });
        }
    }

    removeCoupon = () => {
        this.props.couponFunction('');

        this.setState({
            value: '',
            readOnly: false,
            couponOn: false
        });
    }

    render(){
        return (
            <div className='coupon'>
                <input value={this.state.value} onChange={this.handleChange} placeholder="Coupon Code" readOnly={this.state.readOnly}/>
                {this.state.couponOn ?
                <button onClick={this.removeCoupon}>Remove</button> :
                <button onClick={this.applyCoupon}>Apply</button>
                }
            </div>
        );
    }
}

export default Coupon;