import React from "react";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";

const ListProject = [
    {
        name: "SnapShare App",
        description: "SnapShare is a social networking project that I did during my second year of college.",
        technologies: "ReactJs, TailwindCss, Firebase.",
        time: " 2 Months.",
        image: "https://firebasestorage.googleapis.com/v0/b/snap-share-78f51.appspot.com/o/post%2F%C4%90o%C3%A0n%20H%E1%BA%A3i%20Duy%2Fb9bb83a6-48c1-4a81-b661-f03aa4babd66%2Fpr1.pngb9bb83a6-48c1-4a81-b661-f03aa4babd66?alt=media&token=a9d41157-7bfc-48e1-af97-9cd288cfc534",
        live: "https://snapshare.site/",
        source: "https://github.com/Doanhaiduy/snap-share-app",
    },
    {
        name: "Sinp Shop",
        description: "Sinp shop is an e-commerce project I did for my final thesis in web application development.",
        technologies: "ASP.Net MVC, SQL Server, TailwindCss, Firebase.",
        time: " 1 Week.",
        image: "https://firebasestorage.googleapis.com/v0/b/snap-share-78f51.appspot.com/o/post%2FJohn%20Weak%20N%C4%83m%2F4169da53-82ce-4c20-975f-9e6ec9d8e6ee%2Fpr2.png4169da53-82ce-4c20-975f-9e6ec9d8e6ee?alt=media&token=ff3fe59b-b0f2-4725-8c86-e26e038ea414",
        live: "https://project-63130260.site/",
        source: "https://github.com/Doanhaiduy/ASP.Net-MVC-project-63130260",
    },
    {
        name: "Portfolio",
        description:
            "Portfolio is a project I built using ReactJs to collect information about myself, including background information, skills, projects,...",
        technologies: "ReactJs, TailwindCss.",
        time: " 1 Day.",
        image: "https://firebasestorage.googleapis.com/v0/b/snap-share-78f51.appspot.com/o/post%2FJohn%20Weak%20N%C4%83m%2F021fb89f-5f52-4832-a023-d0be6cede6bf%2Fpr7.png021fb89f-5f52-4832-a023-d0be6cede6bf?alt=media&token=12c842ee-4ee3-44b0-b888-b57ce40faa99",
        live: "https://www.doanhaiduy.website/",
        source: "https://github.com/Doanhaiduy/Portfolio",
    },
    {
        name: "League Of Legends App",
        description:
            "League Of Legends App is a project about information about generals in the game, which I implemented in a presentation on web programming.",
        technologies: "ReactJs, TailwindCss, API (Riot Game).",
        time: " 2 Days.",
        image: "https://firebasestorage.googleapis.com/v0/b/snap-share-78f51.appspot.com/o/post%2FJohn%20Weak%20N%C4%83m%2F4169da53-82ce-4c20-975f-9e6ec9d8e6ee%2Fpr3.png4169da53-82ce-4c20-975f-9e6ec9d8e6ee?alt=media&token=1ae47a82-367c-44e3-bd46-00132e4918fa",
        live: "https://league-of-legends-ntu.vercel.app/",
        source: "https://github.com/Doanhaiduy/league-of-legends-app",
    },
    {
        name: "Movie App",
        description: "Movie App is the first project I made after. learning ReactJs and TailwindCss.",
        technologies: "ReactJs, TailwindCss, API (TMDB).",
        time: " 1 Week.",
        image: "https://firebasestorage.googleapis.com/v0/b/snap-share-78f51.appspot.com/o/post%2FJohn%20Weak%20N%C4%83m%2F4169da53-82ce-4c20-975f-9e6ec9d8e6ee%2Fpr5.png4169da53-82ce-4c20-975f-9e6ec9d8e6ee?alt=media&token=c2ace9eb-71c0-4d5b-94be-9194eba387d4",
        live: "https://the-movie-ntu.vercel.app/",
        source: "https://github.com/Doanhaiduy/movie-app",
    },
    {
        name: "Anker Shop",
        description:
            "Anker Shop is a project I did to make a demo presentation in the system analysis and design class.",
        technologies: "ASP.Net MVC, TailwindCss, SQL Server.",
        time: " 1 Week.",
        image: "https://firebasestorage.googleapis.com/v0/b/snap-share-78f51.appspot.com/o/post%2FJohn%20Weak%20N%C4%83m%2F4169da53-82ce-4c20-975f-9e6ec9d8e6ee%2Fpr4.png4169da53-82ce-4c20-975f-9e6ec9d8e6ee?alt=media&token=0e66aba0-8192-4699-ac36-5c47e29e4322",
        live: "http://doanhaiduy-001-site1.itempurl.com/",
        source: "https://github.com/Doanhaiduy/AnkerShop",
    },
    {
        name: "Form Validation",
        description: "Form Validation is a small project I did after learning about Javascript.",
        technologies: "HTML, CSS, Javascript.",
        time: " 3 Days.",
        image: "https://firebasestorage.googleapis.com/v0/b/snap-share-78f51.appspot.com/o/post%2FJohn%20Weak%20N%C4%83m%2F4169da53-82ce-4c20-975f-9e6ec9d8e6ee%2Fpr6.png4169da53-82ce-4c20-975f-9e6ec9d8e6ee?alt=media&token=d00d1898-efe6-481f-832c-da4f88aa9a73",
        live: "https://doanhaiduy.github.io/Form-validation/",
        source: "https://github.com/Doanhaiduy/Form-validation",
    },
];
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
                    {ListProject.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className=" dark:bg-gray-100 bg-white dark:text-gray-600 font-semibold shadow-xl p-4 rounded-[12px] relative group cursor-pointer"
                        >
                            <img
                                className="w-full h-[300px] object-cover rounded-[12px]"
                                src={item.image}
                                alt={item.name}
                            />
                            <h3 className="text-[24px] pt-4">{item.name}</h3>
                            <div className="absolute group-hover:opacity-100 opacity-0 invisible  group-hover:visible top-0 transition-all p-4 text-[20px] bg-black/75 w-full h-full left-0 rounded-[12px] text-left text-white ">
                                <h3 className="text-center text-[24px] font-semibold mb-4">{item.name}</h3>
                                <div className="flex flex-col justify-between h-[80%] ">
                                    <div className="">
                                        <p>
                                            <strong>Description: </strong>
                                            {item.description}
                                        </p>
                                        <p>
                                            <strong>Technologies Used:</strong> {item.technologies}
                                        </p>
                                        <p>
                                            <strong>Execution time:</strong> {item.time}
                                        </p>
                                    </div>
                                    <div className="flex gap-3 items-center justify-center mt-4">
                                        <a
                                            href={item.live}
                                            rel="noreferrer"
                                            target="_Blank"
                                            className="text-center font-semibold px-2 py-1 w-[96px] bg-orange-600 rounded-[8px] hover:opacity-90"
                                        >
                                            View Live
                                        </a>
                                        <a
                                            href={item.source}
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
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
