import { Link, useLoaderData } from "react-router-dom";
import { GoPeople } from "react-icons/go";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { useEffect, useState } from "react";
import { getReadBooks, } from "../../../Components/Utils/local";


const ReadBooks = () => {
    const books = useLoaderData()
    const [readBook, setReadBook] = useState([])
    useEffect(() => {
        let storedReadBooks = getReadBooks();
        setReadBook(storedReadBooks);
        console.log(readBook);
    }, [])
    return (
        <div className="mt-20">
            {
                readBook.map((book, idx) => (
                    <div key={idx}>
                        <div className="grid grid-cols-1 gap-10 mb-8 md:grid-cols-12 border border-[#13131326] p-6 rounded-xl">
                            <div className="lg:col-span-3 bg-[#1313131A] px-5 py-8 rounded-xl">
                                <img className="md:h-[200px] md:w-[150px] object-contain mx-auto" src={book.image} alt="" />
                            </div>
                            <div className="lg:col-span-9 space-y-6">
                                <h3 className="pf font-bold text-4xl">{book.bookName}</h3>
                                <h3 className="ws text-[#131313CC]">By: {book.author}</h3>
                                <div className="ws flex flex-col md:flex-row gap-4  md:gap-10">
                                    <div className="flex gap-5 md:gap-10">
                                        <h2 className="font-bold">Tag</h2>
                                        <h2 className="text-[#23BE0A]">#{book.tags[0]}</h2>
                                        <h2 className="text-[#23BE0A]">#{book.tags[1]}</h2>
                                    </div>
                                    <div className="ws flex items-center md:justify-center gap-2">
                                        <CiLocationOn className="size-5" />
                                        <h2>Year of Publishing:{books[0].yearOfPublishing} </h2>
                                    </div>
                                </div>
                                <div className="flex gap-4 md:gap-6">
                                    <div className="flex items-center justify-center gap-2 text-[#13131399]">
                                        <GoPeople />
                                        <h2 className="ws">Publisher :{book.publisher} </h2>
                                    </div>
                                    <div className="flex items-center justify-center gap-2 text-[#13131399]">
                                        <HiOutlineDocumentChartBar />
                                        <h2>Pages {book.totalPages} </h2>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex flex-col md:flex-row items-center gap-4  md:gap-4">
                                    <div className="flex gap-2 md:gap-4">
                                        <Link className="mr-4 w-1/2 md:w-[220px] text-center md:mr-0 px-5 py-2 lg:px-6 lg:py-3 rounded-3xl md:rounded-full hover:scale-105 cursor-pointer transition ws font-semibold lg:text-lg bg-[#328EFF26] text-[#328EFF] ">Category: {book.category} </Link>
                                        <Link className="mr-4 w-1/2 md:w-[220px] md:mr-0 text-center px-6 py-2 lg:px-6 lg:py-3 rounded-3xl md:rounded-full hover:scale-105 cursor-pointer transition text-[#FFAC33] ws font-semibold lg:text-lg bg-[#FFAC334D] ">Rating: {book.rating} </Link>
                                    </div>
                                    <Link to='' className="mr-4 text-center md:w-[220px] md:mr-0 px-6 py-3 lg:px-6 lg:py-3 hover:scale-105 cursor-pointer transition text-white ws font-semibold lg:text-lg bg-[#23BE0A] rounded-full">View Details </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default ReadBooks;