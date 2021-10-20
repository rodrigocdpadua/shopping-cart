import '../../styles.css';

const Purchase = () => {
    return (
        <div className='purchase'>
            <table>
                <tr>
                    <td>Purchase:</td>
                    <td className='td-value'>0,00</td>
                </tr>
                <tr>
                    <td>Shipping:</td>
                    <td className='td-value'>0,00</td>
                </tr>
                <tr>
                    <td>Descount:</td>
                    <td className='td-value'>0,00</td>
                </tr>
                <tr className='tr-total'>
                    <td>Total:</td>
                    <td className='td-value'>0,00</td>
                </tr>
            </table>
        </div>
    );
}

export default Purchase;