import ListPurchase from '../list-purchase';
import '../../styles.css';

const Purchase = (props) => {
    return (
        <div className='purchase'>
            <ListPurchase items={props.items}/>
            <table className='table-purchase'>
                <tbody>
                    <tr>
                        <td>Purchase:</td>
                        <td className='td-value'>{props.price.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping:</td>
                        <td className='td-value'>{props.shipping.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Descount:</td>
                        <td className='td-value'>{props.descount.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td className='td-value'>{props.total.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Purchase;