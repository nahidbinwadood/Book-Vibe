import { getReadBooks } from '../Utils/local';
import Pages_to_read from './Pages_to_read';

const ArrayItems = () => {
    
const books=getReadBooks()
    return (
        <div className='container mx-auto mt-20 px-4 lg:px-0'>
            <Pages_to_read books={books}></Pages_to_read>
        </div>
    );
};

export default ArrayItems;