import Item from '../item'
import '../../styles.css';
import React from 'react';

class ListItems extends React.Component {

    render(){
        return (
            <div className='list-items'>
                <Item
                    title='Banana'
                    src='https://image.freepik.com/fotos-gratis/bananas-no-fundo-branco_1187-1671.jpg'
                    price={10}
                    purchaseFunction={this.props.purchaseFunction}
                />
                <Item
                    title='Apple'
                    src='https://image.freepik.com/fotos-gratis/macas-frescas-frescas-maduras-suculentas-perfeitas-inteiras-na-mesa-branca_179666-271.jpg'
                    price={20}
                    purchaseFunction={this.props.purchaseFunction}
                />
                <Item
                    title='Orange'
                    src='https://image.freepik.com/fotos-gratis/laranja_51264-103.jpg'
                    price={30}
                    purchaseFunction={this.props.purchaseFunction}
                />
            </div>
        );
    }
}

export default ListItems;