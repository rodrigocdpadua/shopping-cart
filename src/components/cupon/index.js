import React from 'react';
import '../../styles.css';

class Cupon extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value: '',
            readOnly: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.cuponFunction = this.cuponFunction.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    cuponFunction(){
        if(this.state.value !== ''){
            this.props.cuponFunction(this.state.value);

            this.setState({
                readOnly: true
            });
        }
    }

    render(){
        return (
            <div className='cupon'>
                <input value={this.state.value} onChange={this.handleChange} placeholder="Cupon Code" readOnly={this.state.readOnly}/>
                <button onClick={this.cuponFunction}>Apply</button>
            </div>
        );
    }
}

export default Cupon;