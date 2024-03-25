import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
const Book = ({ book }) => {
    const { image, tags, bookName, author, category, rating } = book
    
    return (
        <NavLink to='book_details' >
            <div>
                <div className='border border-[#1313131A] rounded-xl p-6 space-y-5 lg:space-y-10 cursor-pointer'>
                    <div className='bg-[#1313131A] px-5 py-8 rounded-xl'>
                        <img className='h-[200px] w-[350px] object-contain mx-auto' src={image} alt="" />
                    </div>
                    <div className='flex gap-5 ml-2'>
                        <h2 className='text-[#23BE0A] text-lg ws font-semibold '>{tags[0]} </h2>
                        <h2 className='text-[#23BE0A] text-lg ws font-semibold '>{tags[1]}</h2>
                    </div>
                    <h2 className='pf text-black font-bold text-2xl'>{bookName} </h2>
                    <h2 className='ws text-[#131313CF]'>By : {author} </h2>
                    <div className="border-t border-dashed border-gray-400 my-4"></div>
                    <div className='ws text-[#131313CF] flex justify-between text-lg'>
                        <h4>{category} </h4>
                        <div className='flex gap-2 items-center'>
                            <h2>{rating} </h2>
                            <FaRegStar />
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default Book;

Book.propTypes = {
    book: PropTypes.object.isRequired,
}