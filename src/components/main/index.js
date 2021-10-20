import ListItems from '../list-items';
import Cupon from '../cupon';
import Purchase from '../purchase';

const Main = () => {
    return (
        <main className='main'>
            <ListItems />
            <Cupon />
            <Purchase />
        </main>
    );
}

export default Main;