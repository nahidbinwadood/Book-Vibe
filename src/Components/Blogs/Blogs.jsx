
const Blogs = () => {
    return (
        <div className="container mx-auto px-6 md:px-0 ">
            <div>
                <section className="py-10 ws bg-white sm:py-16 lg:py-14">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Latest from blog</h2>
                            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Here are some of our blogs of our people .You can know more about us after reading those blogs.</p>
                        </div>

                        <div className="grid max-w-md grid-cols-1 gap-8 md:gap-4 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
                            <div>
                                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                                    <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg" alt="" />
                                </a>
                                <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9"> Technology </span>
                                <p className="mt-6 text-xl font-semibold">
                                    <a href="#" title="" className="text-black">Book Bliss Awaits: Unveiling the Treasures of an Innovative Book Website</a>
                                </p>
                                <p className="mt-4 text-gray-600">Book Bliss Awaits invites you to uncover the wonders of an innovative book website, where literary treasures await your discovery. Dive into a world of limitless reading possibilities, with curated recommendations, interactive features, and a vibrant community of fellow book enthusiasts. Experience the joy of exploring new genres, connecting with authors, and immersing yourself in captivating stories – your literary adventure begins here.Try to explore different books.</p>
                                <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                                <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Oliver Omnibus. June 12, 2021 </span>
                            </div>

                            <div>
                                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                                    <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-2.jpg" alt="" />
                                </a>
                                <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> Marketing </span>
                                <p className="mt-6 text-xl font-semibold">
                                    <a href="#" title="" className="text-black">Page-Turning Perfection: Why You Need to Bookmark This Book Website Today </a>
                                </p>
                                <p className="mt-4 text-gray-600">Page-Turning Perfectionis your ultimate guide to a revolutionary book website that promises to transform your reading experience. From its seamless interface to its vast selection of titles and personalized recommendations, this website is a must-bookmark for any avid reader seeking literary bliss. Do not miss out on the opportunity to discover your next favorite book – bookmark this website today and embark on an unforgettable reading journey!</p>
                                <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                                <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Liam Literary . June 12, 2023 </span>
                            </div>

                            <div>
                                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                                    <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-3.jpg" alt="" />
                                </a>
                                <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> Marketing </span>
                                <p className="mt-6 text-xl font-semibold">
                                    <a href="#" title="" className="text-black">From Fantasy to Memoirs: How a Versatile Book Website Satisfies Every Reading Craving</a>
                                </p>
                                <p className="mt-4 text-gray-600">From Fantasy to Memoirs--showcases the versatility of a premier book website that caters to all reading preferences. Dive into enchanting realms of fantasy or delve into the raw honesty of memoirs with ease, thanks to curated collections and personalized recommendations. Discover a platform where every reading craving is satisfied, offering an immersive and diverse literary experience for all.You can enjoy reading books from website and can explore many things.</p>
                                <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                                <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Sofia Storyteller
                                    . January 12, 2024 </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Blogs;