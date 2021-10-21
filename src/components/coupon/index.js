import React from 'react';
import '../../styles.css';

class Coupon extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value: '',
            readOnly: false
        }
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    couponFunction = () => {
        if(this.state.value !== ''){
            this.props.couponFunction(this.state.value);

            this.setState({
                readOnly: true
            });
        }
    }

    render(){
        return (
            <div className='coupon'>
                <input value={this.state.value} onChange={this.handleChange} placeholder="Coupon Code" readOnly={this.state.readOnly}/>
                <button onClick={this.couponFunction}>Apply</button>
            </div>
        );
    }
}

export default Coupon;