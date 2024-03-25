import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="container mx-auto pt-4">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {/* <li><a>Home</a></li>
                            <li><a>Listed Books</a></li>
                            <li><a>Pages to Read</a></li> */}
                            <NavLink to='/'><a>Home</a></NavLink>
                            <NavLink to='listed_books'><a>Listed Books</a></NavLink>
                            <NavLink to='pages_to_read'><a>Pages to Read</a></NavLink>
                        </ul>
                    </div>
                    <a className="text-xl lg:text-3xl ws font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-8 menu-horizontal px-1">
                        <NavLink to='/' className={({isActive})=> isActive ? 'rounded-lg border-2 border-[#23BE0A] text-[#23BE0A]' : 'font-bold'}>
                            <button className="px-6 py-3 ws text-xl font-semibold">Home
                            </button>
                        </NavLink>
                        <NavLink to='./listed_books' className={({isActive})=> isActive ? 'rounded-lg border-2 border-[#23BE0A] text-[#23BE0A]' : 'text-[#131313CC]'} >
                            <button className="px-6 py-3 ws text-xl font-semibold ">Listed Books
                            </button>
                        </NavLink>
                        <NavLink to='./pages_to_read' className={({isActive})=> isActive ? 'rounded-lg border-2 border-[#23BE0A] text-[#23BE0A]' : 'text-[#131313CC]'}>
                            <button className="px-6 py-3 ws text-xl font-semibold ">Pages to Read
                            </button>
                        </NavLink>


                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <a className="px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:scale-105 cursor-pointer transition text-white ws font-semibold lg:text-lg bg-[#23BE0A] ">Sign In </a>
                    <a className="px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:scale-105 cursor-pointer transition text-white ws font-semibold lg:text-lg bg-[#59C6D2] ">Sign Up </a>
                    
                
                </div>
            </div>
        </div>
    );
};

export default Nav;