import { useLoaderData } from "react-router-dom";

const Book_details = () => {
    const bookDetails = useLoaderData();
    console.log(bookDetails);
    // const { image, tags, bookName, author, category, rating } = bookDetails
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <img src={bookDetails[0].image} alt="" />
                </div>
                <div>
                    <h1 className="pf font-bold text-5xl text-black">
                        {bookDetails[0].bookName}
                    </h1>

                    <h4 className="text-[#131313CF] ws text-xl">By : {bookDetails[0].author}</h4>

                    <h2 className="text-[#131313CF] ws"> <span className="text-black ws font-bold">Review: </span>
                        Sit amet consectetur. Interdum porta pulvinar non sit aliquam. Aenean pulvinar blandit vel non enim elementum penatibus pellentesque ac. Nec accumsan euismod nulla adipiscing lectus. Morbi elementum a auctor erat diam tellus. Fermentum faucibus nulla enim ornare.
                        Id neque neque pretium enim platea urna non dictum. Faucibus dignissim ridiculus nibh tristique massa non.
                    </h2>

                    <div className="flex gap-8">
                        <span className="text-black ws font-bold">Tag</span>
                        <h3 className="text-[#23BE0A] text-lg ws font-semibold">#{bookDetails[0].tags[0]} </h3>
                        <h3 className="text-[#23BE0A] text-lg ws font-semibold">#{bookDetails[0].tags[1]} </h3>

                        <hr />
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Book_details; 