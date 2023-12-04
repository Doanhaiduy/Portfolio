import React from "react";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
function Projects() {
    return (
        <div
            className="flex xl:px-[15%] md:px-[8%] px-[20px] items-center justify-center gap-[20px] gap-y-[40px] py-[80px] dark:bg-black bg-white transition-colors dark:text-white "
            id="projects"
        >
            <div className="-rotate-90 lg:mr-[80px] md:block hidden">
                <h3 className=" text-[34px] font-semibold">Projects</h3>
                <div className="w-[80px] h-1 bg-orange-500"></div>
            </div>
            <div className="">
                <div>
                    <h2 className="text-6xl font-semibold text-orange-600 uppercase">A few projects</h2>
                    <p className="text-gray-400 my-4 text-[22px] dark:text-white">
                        Here are some of the projects I've done. I hope it will meet your requirements.
                    </p>
                </div>
                <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5">
                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.7 }}
                        className=" dark:bg-gray-100 bg-white dark:text-gray-600 font-semibold shadow-xl p-4 rounded-[12px] relative group cursor-pointer"
                    >
                        <img
                            className="w-full h-[300px] object-cover rounded-[12px]"
                            src="https://firebasestorage.googleapis.com/v0/b/snap-share-78f51.appspot.com/o/post%2F%C4%90o%C3%A0n%20H%E1%BA%A3i%20Duy%2Fb9bb83a6-48c1-4a81-b661-f03aa4babd66%2Fpr1.pngb9bb83a6-48c1-4a81-b661-f03aa4babd66?alt=media&token=a9d41157-7bfc-48e1-af97-9cd288cfc534"
                            alt=""
                        />
                        <h3 className="text-[24px] pt-4">SnapShare App</h3>
                        <div className="absolute group-hover:opacity-100 opacity-0 invisible  group-hover:visible top-0 transition-all p-4 text-[20px] bg-black/75 w-full h-full left-0 rounded-[12px] text-left text-white ">
                            <h3 className="text-center text-[24px] font-semibold mb-4">SnapShare App</h3>
                            <div className="flex flex-col justify-between h-[80%] ">
                                <div className="">
                                    <p>
                                        <strong>Description:</strong> SnapShare is a social networking project that I
                                        did during my second year of college.
                                    </p>
                                    <p>
                                        <strong>Technologies Used:</strong> ReactJs, TailwindCss, Firebase.
                                    </p>
                                    <p>
                                        <strong>Execution time:</strong> 2 Months.
                                    </p>
                                </div>
                                <div className="flex gap-3 items-center justify-center mt-4">
                                    <a
                                        href="https://snapshare.site/"
                                        rel="noreferrer"
                                        target="_Blank"
                                        className="text-center font-semibold px-2 py-1 w-[96px] bg-orange-600 rounded-[8px] hover:opacity-90"
                                    >
                                        View Live
                                    </a>
                                    <a
                                        href="https://github.com/Doanhaiduy/snap-share-app"
                                        rel="noreferrer"
                                        target="_Blank"
                                        className="text-center font-semibold px-2 py-1 w-[96px] bg-orange-600 rounded-[8px] hover:opacity-90"
                                    >
                                        View Source
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.7 }}
                        className=" dark:bg-gray-100 bg-white dark:text-gray-600 font-semibold shadow-xl p-4 rounded-[12px] relative group cursor-pointer"
                    >
                        <img
                            className="w-full h-[300px] object-cover rounded-[12px]"
                            src="https://firebasestorage.googleapis.com/v0/b/snap-share-78f51.appspot.com/o/post%2FJohn%20Weak%20N%C4%83m%2F4169da53-82ce-4c20-975f-9e6ec9d8e6ee%2Fpr2.png4169da53-82ce-4c20-975f-9e6ec9d8e6ee?alt=media&token=ff3fe59b-b0f2-4725-8c86-e26e038ea414"
                            alt=""
                        />
                        <h3 className="text-[24px] pt-4">Sinp Shop</h3>
                        <div className="absolute group-hover:opacity-100 opacity-0 invisible  group-hover:visible top-0 transition-all p-4 text-[20px] bg-black/75 w-full h-full left-0 rounded-[12px] text-left text-white ">
                            <h3 className="text-center text-[24px] font-semibold mb-4">Sinp Shop</h3>
                            <div className="flex flex-col justify-between h-[80%] ">
                                <div className="">
                                    <p>
                                        <strong>Description:</strong> Sinp shop is an e-commerce project I did for my
                                        final thesis in web application development.
                                    </p>
                                    <p>
                                        <strong>Technologies Used:</strong> ASP.Net MVC, SQL Server, TailwindCss,
                                        Firebase.
                                    </p>
                                    <p>
                                        <strong>Execution time:</strong> 1 Week.
                                    </p>
                                </div>
                                <div className="flex gap-3 items-center justify-center mt-4">
                                    <a
                                        href="https://project-63130260.site/"
                                        rel="noreferrer"
                                        target="_Blank"
                                        className="text-center font-semibold px-2 py-1 w-[96px] bg-orange-600 rounded-[8px] hover:opacity-90"
                                    >
                                        View Live
                                    </a>
                                    <a
                                        href="https://github.com/Doanhaiduy/ASP.Net-MVC-project-63130260"
                                        rel="noreferrer"
                                        target="_Blank"
                                        className="text-center font-semibold px-2 py-1 w-[96px] bg-orange-600 rounded-[8px] hover:opacity-90"
                                    >
                                        View Source
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.7 }}
                        className=" dark:bg-gray-100 bg-white dark:text-gray-600 font-semibold shadow-xl p-4 rounded-[12px] relative group cursor-pointer"
                    >
                        <img
                            className="w-full h-[300px] object-cover rounded-[12px]"
                            src="https://firebasestorage.googleapis.com/v0/b/snap-share-78f51.appspot.com/o/post%2FJohn%20Weak%20N%C4%83m%2F4169da53-82ce-4c20-975f-9e6ec9d8e6ee%2Fpr3.png4169da53-82ce-4c20-975f-9e6ec9d8e6ee?alt=media&token=1ae47a82-367c-44e3-bd46-00132e4918fa"
                            alt=""
                        />
                        <h3 className="text-[24px] pt-4">League Of Legends App</h3>
                        <div className="absolute group-hover:opacity-100 opacity-0 invisible  group-hover:visible top-0 transition-all p-4 text-[20px] bg-black/75 w-full h-full left-0 rounded-[12px] text-left text-white ">
                            <h3 className="text-center text-[24px] font-semibold mb-4">League Of Legends App</h3>
                            <div className="flex flex-col justify-between h-[80%] ">
                                <div className="">
                                    <p>
                                        <strong>Description:</strong> League Of Legends App is a project about
                                        information about generals in the game, which I implemented in a presentation on
                                        web programming.
                                    </p>
                                    <p>
                                        <strong>Technologies Used:</strong> ReactJs, TailwindCss, API (Riot Game).
                                    </p>
                                    <p>
                                        <strong>Execution time:</strong> 2 Days.
                                    </p>
                                </div>
                                <div className="flex gap-3 items-center justify-center mt-4">
                                    <a
                                        href="https://league-of-legends-ntu.vercel.app/"
                                        rel="noreferrer"
                                        target="_Blank"
                                        className="text-center font-semibold px-2 py-1 w-[96px] bg-orange-600 rounded-[8px] hover:opacity-90"
                                    >
                                        View Live
                                    </a>
                                    <a
                                        href="https://github.com/Doanhaiduy/league-of-legends-app"
                                        rel="noreferrer"
                                        target="_Blank"
                                        className="text-center font-semibold px-2 py-1 w-[96px] bg-orange-600 rounded-[8px] hover:opacity-90"
                                    >
                                        View Source
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.7 }}
                        className=" dark:bg-gray-100 bg-white dark:text-gray-600 font-semibold shadow-xl p-4 rounded-[12px] relative group cursor-pointer"
                    >
                        <img
                            className="w-full h-[300px] object-cover rounded-[12px]"
                            src="https://firebasestorage.googleapis.com/v0/b/snap-share-78f51.appspot.com/o/post%2FJohn%20Weak%20N%C4%83m%2F4169da53-82ce-4c20-975f-9e6ec9d8e6ee%2Fpr5.png4169da53-82ce-4c20-975f-9e6ec9d8e6ee?alt=media&token=c2ace9eb-71c0-4d5b-94be-9194eba387d4"
                            alt=""
                        />
                        <h3 className="text-[24px] pt-4">Movie App</h3>
                        <div className="absolute group-hover:opacity-100 opacity-0 invisible  group-hover:visible top-0 transition-all p-4 text-[20px] bg-black/75 w-full h-full left-0 rounded-[12px] text-left text-white ">
                            <h3 className="text-center text-[24px] font-semibold mb-4">Movie App</h3>
                            <div className="flex flex-col justify-between h-[80%] ">
                                <div className="">
                                    <p>
                                        <strong>Description:</strong> Movie App is the first project I made after.
                                        learning ReactJs and TailwindCss.
                                    </p>
                                    <p>
                                        <strong>Technologies Used:</strong> ReactJs, TailwindCss, API (TMDB).
                                    </p>
                                    <p>
                                        <strong>Execution time:</strong> 1 Week.
                                    </p>
                                </div>
                                <div className="flex gap-3 items-center justify-center mt-4">
                                    <a
                                        href="https://the-movie-ntu.vercel.app/"
                                        rel="noreferrer"
                                        target="_Blank"
                                        className="text-center font-semibold px-2 py-1 w-[96px] bg-orange-600 rounded-[8px] hover:opacity-90"
                                    >
                                        View Live
                                    </a>
                                    <a
                                        href="https://github.com/Doanhaiduy/movie-app"
                                        rel="noreferrer"
                                        target="_Blank"
                                        className="text-center font-semibold px-2 py-1 w-[96px] bg-orange-600 rounded-[8px] hover:opacity-90"
                                    >
                                        View Source
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.7 }}
                        className=" dark:bg-gray-100 bg-white dark:text-gray-600 font-semibold shadow-xl p-4 rounded-[12px] relative group cursor-pointer"
                    >
                        <img
                            className="w-full h-[300px] object-cover rounded-[12px]"
                            src="https://firebasestorage.googleapis.com/v0/b/snap-share-78f51.appspot.com/o/post%2FJohn%20Weak%20N%C4%83m%2F4169da53-82ce-4c20-975f-9e6ec9d8e6ee%2Fpr4.png4169da53-82ce-4c20-975f-9e6ec9d8e6ee?alt=media&token=0e66aba0-8192-4699-ac36-5c47e29e4322"
                            alt=""
                        />
                        <h3 className="text-[24px] pt-4">Anker Shop</h3>
                        <div className="absolute group-hover:opacity-100 opacity-0 invisible  group-hover:visible top-0 transition-all p-4 text-[20px] bg-black/75 w-full h-full left-0 rounded-[12px] text-left text-white ">
                            <h3 className="text-center text-[24px] font-semibold mb-4">Anker Shop</h3>
                            <div className="flex flex-col justify-between h-[80%] ">
                                <div className="">
                                    <p>
                                        <strong>Description:</strong> Anker Shop is a project I did to make a demo
                                        presentation in the system analysis and design class.
                                    </p>
                                    <p>
                                        <strong>Technologies Used:</strong> ASP.Net MVC, TailwindCss, SQL Server.
                                    </p>
                                    <p>
                                        <strong>Execution time:</strong> 1 Week.
                                    </p>
                                </div>
                                <div className="flex gap-3 items-center justify-center mt-4">
                                    <a
                                        href="http://doanhaiduy-001-site1.itempurl.com/"
                                        rel="noreferrer"
                                        target="_Blank"
                                        className="text-center font-semibold px-2 py-1 w-[96px] bg-orange-600 rounded-[8px] hover:opacity-90"
                                    >
                                        View Live
                                    </a>
                                    <a
                                        href="https://github.com/Doanhaiduy/AnkerShop"
                                        rel="noreferrer"
                                        target="_Blank"
                                        className="text-center font-semibold px-2 py-1 w-[96px] bg-orange-600 rounded-[8px] hover:opacity-90"
                                    >
                                        View Source
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.7 }}
                        className=" dark:bg-gray-100 bg-white dark:text-gray-600 font-semibold shadow-xl p-4 rounded-[12px] relative group cursor-pointer"
                    >
                        <img
                            className="w-full h-[300px] object-cover rounded-[12px]"
                            src="https://firebasestorage.googleapis.com/v0/b/snap-share-78f51.appspot.com/o/post%2FJohn%20Weak%20N%C4%83m%2F4169da53-82ce-4c20-975f-9e6ec9d8e6ee%2Fpr6.png4169da53-82ce-4c20-975f-9e6ec9d8e6ee?alt=media&token=d00d1898-efe6-481f-832c-da4f88aa9a73"
                            alt=""
                        />
                        <h3 className="text-[24px] pt-4">Form Validation</h3>
                        <div className="absolute group-hover:opacity-100 opacity-0 invisible  group-hover:visible top-0 transition-all p-4 text-[20px] bg-black/75 w-full h-full left-0 rounded-[12px] text-left text-white ">
                            <h3 className="text-center text-[24px] font-semibold mb-4">Anker Shop</h3>
                            <div className="flex flex-col justify-between h-[80%] ">
                                <div className="">
                                    <p>
                                        <strong>Description:</strong> Form Validation is a small project I did after
                                        learning about Javascript.
                                    </p>
                                    <p>
                                        <strong>Technologies Used:</strong> HTML, CSS, Javascript.
                                    </p>
                                    <p>
                                        <strong>Execution time:</strong> 3 Days.
                                    </p>
                                </div>
                                <div className="flex gap-3 items-center justify-center mt-4">
                                    <a
                                        href="https://doanhaiduy.github.io/Form-validation/"
                                        rel="noreferrer"
                                        target="_Blank"
                                        className="text-center font-semibold px-2 py-1 w-[96px] bg-orange-600 rounded-[8px] hover:opacity-90"
                                    >
                                        View Live
                                    </a>
                                    <a
                                        href="https://github.com/Doanhaiduy/Form-validation"
                                        rel="noreferrer"
                                        target="_Blank"
                                        className="text-center font-semibold px-2 py-1 w-[96px] bg-orange-600 rounded-[8px] hover:opacity-90"
                                    >
                                        View Source
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
