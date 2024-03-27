import toast from "react-hot-toast";

//For read Books:

export const getReadBooks = () => {
    let readBooks = [];
    const storedBooks = localStorage.getItem('read-books');
    if (storedBooks) {
        readBooks = JSON.parse(storedBooks);
    }
    return readBooks
}
export const saveBooks = (book) => {
    let readBooks = getReadBooks()
    let wishedBooks=getWishedBooks()
    const isExist = readBooks.find(b => b.bookId == book.bookId)
    if (isExist) {
        return toast.error("Already Added !")
    } else {
        readBooks.push(book)
        localStorage.setItem('read-books', JSON.stringify(readBooks))
        toast.success("Book added Successfully")
        const filterWishedBooks=wishedBooks.filter((b)=> book.bookId !== b.bookId)
        wishedBooks=filterWishedBooks;
    }
    
}

//For wished Books:

const getWishedBooks = () => {
    let wishedBooks = [];
    const storedWishedBooks = localStorage.getItem('wished-books');
    if (storedWishedBooks) {
        wishedBooks = JSON.parse(storedWishedBooks);
    }
    return wishedBooks
}

const saveWishedBooks = (book) => {
    let readBooks=getReadBooks()
    let WishlistBooks = getWishedBooks();
    const isExistWishedBooks = WishlistBooks.find(b => b.bookId == book.bookId)
    const isExistInReadBooks= readBooks.find(b => b.bookId == book.bookId)
    if (isExistWishedBooks) {
        toast.error("Already added in Wishlist!")
    } else {
        if (!isExistInReadBooks) {
            WishlistBooks.push(book)
            localStorage.setItem('wished-books', JSON.stringify(WishlistBooks))
            toast.success("Added wishlist Successfully !")
        }else{
            toast.error("Already read this book")
        }
    }

}

//Sorted Array:
const getSortedArray = () => {
    let sortedArray = [];
    const storedArray = localStorage.getItem('sorted-books');
    if (storedArray) {
        sortedArray = JSON.parse(storedArray);
    }
    return sortedArray
}

const saveSortedArray = (book) => {
    let books = getSortedArray()
    books.push(book)
    localStorage.setItem('sorted-books', JSON.stringify(books))
}
       
    
export { getWishedBooks, saveWishedBooks,saveSortedArray,getSortedArray }