import React from 'react';
import ListItems from '../list-items';
import Coupon from '../coupon';
import Purchase from '../purchase';
import '../../styles.css';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            priceTotal: 0,
            kgTotal: 0,
            shipping: 0,
            codeCoupon: '',
            descount: 0,
            purchaseTotal: 0,
            items: {}
        }
    };

    addItem = (item, kg, price) => {
        const updateItems = () => {
            if(this.state.items.hasOwnProperty(item)){
                return(Object.assign(Object.assign({}, this.state.items), {[item]: {kg: this.state.items[item].kg + kg, price: this.state.items[item].price + price}}));
            } else {
                return(Object.assign({[item]: {kg: kg, price: price}}, this.state.items));
            }
        }

        this.setState({
            items: updateItems()
        });

        setTimeout(() => {
            this.setKgPriceTotal();
        }, 1);

        setTimeout(() => {
            this.purchase();
        }, 1);
    }

    removeItem = (item) => {
        const removed = () => {
            let r = Object.assign({}, this.state.items);
            delete r[item];
            return r;
        }

        this.setState ({
            items: removed()
        });

        setTimeout(() => {
            this.setKgPriceTotal();
        }, 1);

        setTimeout(() => {
            this.purchase();
        }, 1);
    }

    setKgPriceTotal = () => {
        const priceTotal = () => {
            return (Object.keys(this.state.items).reduce((count, item) => count + this.state.items[item].price, 0));
        }
        const kgTotal = () => {
            return (Object.keys(this.state.items).reduce((count, item) => count + this.state.items[item].kg, 0));
        }

        this.setState ({
            priceTotal: priceTotal(),
            kgTotal: kgTotal()
        });
    }

    purchase = () => {
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

    shipping = () => {
        if(this.state.priceTotal >= 400){
            this.setState({
                shipping: 0
            });
        } else if(this.state.kgTotal <= 10){
            this.setState({
                shipping: 30
            });
        } else {
            const currentShipping = (Math.trunc((this.state.kgTotal - 10)/5)*7) + 30;
            this.setState({
                shipping: currentShipping
            });
        }
    }

    coupon = (codeCoupon) => {
        this.setState({
            codeCoupon: codeCoupon
        });

        setTimeout(() => {
            this.descountCoupon();
        }, 1);

        setTimeout(() => {
            this.total();
        }, 1);
    }

    descountCoupon = () => {
        const descount = () => {
            if(this.state.codeCoupon === 'A'){
                return (this.state.priceTotal*30)/100;
            } else if(this.state.codeCoupon === 'FOO'){
                return 100;
            } else if(this.state.codeCoupon === 'C'){
                if(this.state.priceTotal >= 300.50){
                    return this.state.shipping;
                } else {
                    return 0;
                }
            } else{
                return 0;
            }
        }

        this.setState({
            descount: descount()
        });
    }

    total = () => {
        const total = () => {
            const t = this.state.priceTotal + this.state.shipping - this.state.descount;
            if(this.state.priceTotal > 0 && t >= 0){
                return t;
            } else {
                return 0;
            }
        }

        this.setState({
            purchaseTotal: total()
        });
    }

    render(){
        return (
            <main className='main'>
                <ListItems addItem={this.addItem}/>
                <Coupon couponFunction={this.coupon}/>
                <Purchase 
                    price={this.state.priceTotal}
                    shipping={this.state.shipping}
                    descount={this.state.descount}
                    total={this.state.purchaseTotal}
                    items={this.state.items}
                    removeItem={this.removeItem}
                />
            </main>
        );
    }
}

export default Main;