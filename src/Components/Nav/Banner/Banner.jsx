import { Link } from 'react-router-dom';
import bannerImg from './pngwing 1.png'
const Banner = () => {
    return (
        <div className='mx-6 md:px-0'>
            <div className="container rounded-2xl mx-auto mt-10 lg:mt-20 lg:h-[70vh] bg-[#1313131A]">
            <div className='grid grid-cols-1 md:grid-cols-12 px-6 py-8 gap-6 md:gap-0 lg:px-36 lg:py-36'>
                <div className='lg:col-span-7 flex flex-col justify-center items-center gap-5 lg:gap-12'>
                    <h2 className='pf text-2xl lg:text-6xl font-bold text-black'>
                    Books to freshen up <br /> your bookshelf
                    </h2>
                    <Link to='listed_books' className="px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:scale-105 cursor-pointer transition text-white ws font-semibold lg:text-lg ws  bg-[#23BE0A] ">View The List </Link>
                </div>
                <div className='lg:col-span-5 lg:ml-24'>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default Banner;