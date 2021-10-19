import Item from '../item'

const ListItems = () => {
    return (
        <div>
            <ul>
                <Item
                title='Banana'
                src='https://image.freepik.com/fotos-gratis/bananas-no-fundo-branco_1187-1671.jpg'
                price={10.00}
                />
                <Item
                title='Maçã'
                src='https://image.freepik.com/fotos-gratis/macas-frescas-frescas-maduras-suculentas-perfeitas-inteiras-na-mesa-branca_179666-271.jpg'
                price={20.00}
                />
                <Item
                title='Laranja'
                src='https://image.freepik.com/fotos-gratis/laranja_51264-103.jpg'
                price={30.00}
                />
            </ul>
        </div>
    );
}

export default ListItems;