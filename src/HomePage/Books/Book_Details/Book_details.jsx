import { useLoaderData, useParams } from "react-router-dom";
import PropTypes from 'prop-types';

const Book_details = () => {
    const allBooks = useLoaderData();
    const { bookId } = useParams()
    const currentBook = allBooks.find((book) => book.bookId == bookId)
    console.log(currentBook);
    const { image, tags,author, category, rating,totalPages,publisher,yearOfPublishing,review } = currentBook
    return (
        <div className="container mx-auto px-4 md:px-0 mt-12 mb-10">
            <div className="grid grid-cols-1 gap-8 md:gap-24 md:grid-cols-2">
                <div className="bg-[#1313130F] px-5 py-8 rounded-xl">
                    <img className="object-cover items-center mx-auto h-full rounded-md lg:h-[650px] lg:w-[400px]" src={image} alt="" />
                </div>
                <div className="space-y-6">
                    <h1 className="pf font-bold text-3xl md:text-5xl text-black">
                        {currentBook.bookName}
                    </h1>

                    <h4 className="text-[#131313CF] ws text-xl">By : {author}</h4>
                    <hr />
                    <h4 className="text-[#131313CF] ws text-xl">{category}</h4>
                    <hr />

                    <h2 className="text-[#131313CF] ws"> <span className="text-black ws font-bold">Review: </span>
                    {review}
                    </h2>

                    <div className="flex gap-8">
                        <span className="text-black ws font-bold">Tag</span>
                        <h3 className="text-[#23BE0A] text-lg ws font-semibold">#{tags[0]} </h3>
                        <h3 className="text-[#23BE0A] text-lg ws font-semibold">#{tags[1]} </h3>
                    </div>
                    <hr />
                    <div className="flex gap-16 ">
                        <div className="ws text-[#131313CF] space-y-5">
                            <h2>Number Of Pages:</h2>
                            <h2>Publisher:</h2>
                            <h2>Year of Publishing:</h2>
                            <h2>Rating:</h2>
                        </div>
                        <div className="ws font-semibold text-black space-y-5">
                            <h2> {totalPages}</h2>
                            <h2> {publisher}</h2>
                            <h2> {yearOfPublishing}</h2>
                            <h2> {rating}</h2>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <a className="px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:scale-105 cursor-pointer transition text-black ws font-semibold lg:text-lg bg-transparent border border-gray-400">Read </a>
                        <a className="px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:scale-105 cursor-pointer transition text-white ws font-semibold lg:text-lg bg-[#50B1C9] ">Wishlist </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Book_details; 
Book_details.propTypes = {
    currentBook: PropTypes.object.isRequired,
}