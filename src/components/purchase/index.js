import '../../styles.css';

const Purchase = (props) => {
    return (
        <div className='purchase'>
            <table>
                <tbody>
                    <tr>
                        <td>Purchase:</td>
                        <td className='td-value'>{props.price}</td>
                    </tr>
                    <tr>
                        <td>Shipping:</td>
                        <td className='td-value'>{props.shipping}</td>
                    </tr>
                    <tr>
                        <td>Descount:</td>
                        <td className='td-value'>{props.descount}</td>
                    </tr>
                    <tr className='tr-total'>
                        <td>Total:</td>
                        <td className='td-value'>{props.total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Purchase;