import Item from '../item'
import '../../styles.css';

const ListItems = () => {
    return (
        <div className='list-items'>
            <Item
            title='Banana'
            src='https://image.freepik.com/fotos-gratis/bananas-no-fundo-branco_1187-1671.jpg'
            price={10}
            />
            <Item
            title='Apple'
            src='https://image.freepik.com/fotos-gratis/macas-frescas-frescas-maduras-suculentas-perfeitas-inteiras-na-mesa-branca_179666-271.jpg'
            price={20}
            />
            <Item
            title='Orange'
            src='https://image.freepik.com/fotos-gratis/laranja_51264-103.jpg'
            price={30}
            />
        </div>
    );
}

export default ListItems;