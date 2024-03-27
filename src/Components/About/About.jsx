const About = () => {
    return (
        <div className="container mx-auto mt-20 px-5 lg:px-0">
            <section className="p-6 md:w-1/2 md:mx-auto  bg-gray-200 lg:py-16 ws rounded-lg">
                <form novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50">
                    <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
                    <div>
                        <label for="name" className="block mb-3 ml-1">Name</label>
                        <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25  dark:bg-gray-100" />
                    </div>
                    <div>
                        <label for="email" className="block mb-3 ml-1">Email</label>
                        <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25  dark:bg-gray-100" />
                    </div>
                    <div>
                        <label for="message" className="block mb-3 ml-1">Message</label>
                        <textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25  dark:bg-gray-100"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="bg-slate-400 w-full px-4 py-2 transition font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 hover:dark:ring-violet-600 dark:text-gray-50">Send</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default About;