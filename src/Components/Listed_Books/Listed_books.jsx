import { useEffect, useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, Outlet } from 'react-router-dom';
import { getReadBooks } from '../Utils/local';
const Listed_books = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [showData,setShowData]=useState([])
    useEffect(()=>{
        const displayData=getReadBooks()
        setShowData(displayData);
    },[])
    const handleFilter=(filter)=>{
        if(filter== 'rating'){
            const sortByRating=showData.sort((a,b)=> b.rating-a.rating)
            setShowData(sortByRating)
            console.log(showData);
        }else if(filter==='page-number'){
            const sortByPageNumber=showData.sort((a,b)=> b.totalPages-a.totalPages)
            setShowData(sortByPageNumber)
            console.log(showData);
        }else if(filter==='publisher'){
            const sortByPublisher=showData.sort((a,b)=> b.yearOfPublishing-a.yearOfPublishing)
            setShowData(sortByPublisher)
            console.log(showData);
        }
    }

    return (
        <div className="container mx-auto px-6 md:px-0 mt-20">
            <div className="text-center">
                <h2 className="ws font-bold text-3xl">Books</h2>
            </div>
            <div className='text-center my-20  w-full '>
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn m-1 bg-green-500 px-10 "><h2 className='text-white ws font-semibold text-xl'>Sort By</h2><RiArrowDropDownLine className='size-8 text-white'/>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={()=>handleFilter('rating')}><a>Rating</a></li>
                        <li onClick={()=>handleFilter('page-number')}><a>Number of pages</a></li>
                        <li onClick={()=>handleFilter('publisher')}><a>Publisher year</a></li>
                    </ul>
                </div>
            </div>

            <div>
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap   ">
                    <Link to='' onClick={() => setTabIndex(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg `}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Read Books</span>
                    </Link>
                    <Link to='wishlist_books' onClick={() => setTabIndex(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg `}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Wishlist Books</span>
                    </Link>

                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Listed_books;