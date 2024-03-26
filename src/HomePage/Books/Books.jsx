import { useLoaderData } from "react-router-dom";
import Book from "./Book/Book";


const Books = () => {
    const books=useLoaderData();
    return (
        <div className="my-40">
            <div className="text-center pb-20">
                <h2 className="pf font-bold text-4xl">Books</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 md:px-0">
                {
                    books.map((book)=> <Book key={book.id} book={book}></Book>)
                }
            </div>
            {/* <Book></Book> */}
        </div>
    );
};

export default Books;