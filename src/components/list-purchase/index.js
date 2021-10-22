import React from 'react';
import '../../styles.css';

class ListPurchase extends React.Component {
    render(){
        return(
            <div className='bag'>
                <h3>Bag</h3>
                <div className='list-bag'>
                    <table className='table-bag'>
                        <thead>
                            <tr>
                                <th className='item-column'>Item</th>
                                <th className='kg-column'>Kg</th>
                                <th className='price-column'>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(this.props.items).map( (item, key) => {
                                    return(
                                        <tr key={key}>
                                            <td className='item-column'>{item}</td>
                                            <td className='kg-column'>{this.props.items[item].kg + ' kg'}</td>
                                            <td className='price-column'>{this.props.items[item].price.toFixed(2)}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListPurchase;