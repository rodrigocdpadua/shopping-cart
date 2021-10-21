import React from 'react';
import ListItems from '../list-items';
import Coupon from '../coupon';
import Purchase from '../purchase';
import '../../styles.css';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            price: 0,
            kg: 0,
            shipping: 0,
            code: '',
            descount: 0,
            total: 0
        }
        this.purchase = this.purchase.bind(this);
        this.shipping = this.shipping.bind(this);
        this.coupon = this.coupon.bind(this);
        this.descountCoupon = this.descountCoupon.bind(this);
        this.total = this.total.bind(this);
    };

    purchase(kg, price){
        this.setState(state => ({
            price: state.price + price,
            kg: state.kg + kg
        }));

        setTimeout(() => {
            this.shipping();
        }, 1);

        setTimeout(() => {
            this.descountCoupon();
        }, 1);

        setTimeout(() => {
            this.total();
        }, 1);
    }

    shipping(){
        if(this.state.price >= 400){
            this.setState({
                shipping: 0
            });
        } else if(this.state.kg <= 10){
            this.setState({
                shipping: 30
            });
        } else {
            let currentShipping = (Math.trunc((this.state.kg - 10)/5)*7) + 30;
            this.setState({
                shipping: currentShipping
            });
        }
    }

    coupon(code){
        if(code === 'A' || code === 'FOO' || code === 'C'){
            this.setState({
                code: code
            });

            setTimeout(() => {
                this.descountCoupon();
            }, 1);
    
            setTimeout(() => {
                this.total();
            }, 1);

        } else {
            alert('Invalid Coupon');
        }
    }

    descountCoupon(){
        let descount = 0;
        let withoutCoupon = this.state.price;

        if(this.state.code === 'A'){
            descount = (withoutCoupon*30)/100;
        } else if(this.state.code === 'FOO'){
            descount = 100;
        } else if(this.state.code === 'C'){
            if(this.state.total >= 300.50){
                descount = this.state.shipping;
            }
        }
        this.setState({
            descount: descount
        });
    }

    total(){
        let total = this.state.price + this.state.shipping - this.state.descount;

        this.setState({
            total: total
        });
    }

    render(){
        return (
            <main className='main'>
                <ListItems purchaseFunction={this.purchase}/>
                <Coupon couponFunction={this.coupon}/>
                <Purchase 
                price={this.state.price}
                shipping={this.state.shipping}
                descount={this.state.descount}
                total={this.state.total}
                />
            </main>
        );
    }
}

export default Main;