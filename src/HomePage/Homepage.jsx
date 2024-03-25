import Banner from "../Components/Nav/Banner/Banner";
import Books from "./Books/Books";

const Homepage = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Homepage;