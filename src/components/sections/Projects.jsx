import { RevealOnScroll } from "../RevealOnScroll";
import { assets } from "../../assets/assets.js";


export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">FOREVER</h3>
                            <img src={assets.forever} alt="project-image" />
                            <p className="text-gray-400 mb-4">
                                A full-stack e-commerce web application. Features include user authentication, product catalog, shopping cart, order management, and secure payment integration. Implemented responsive UI/UX for seamless browsing across devices and optimized backend APIs for efficient data handling.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Express", "Node", "MongoDB", "JWT"].map((tech, key) => (
                                    <span key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">{tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/AnirudhPurohit2001/E-Commerce" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">Source Code</a>
                                <a href="https://e-commerce-lilac-nine.vercel.app/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">EVO-GYM</h3>
                            <img src={assets.evogym} alt="project-image" />
                            <p className="text-gray-400 mb-4">
                                A responsive gym website using React and TypeScript, ensuring a seamless user experience across all
                                devices and Implemented smooth animations and interactive UI with Framer Motion, enhancing user engagement and visual
                                appeal.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "TypeScript", "Framer-Motion", "TailwindCSS"].map((tech, key) => (
                                    <span key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">{tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/AnirudhPurohit2001/EVOGYM" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">Source Code</a>
                                <a href="https://evogym-rho.vercel.app/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2"> WORLDATLAS</h3>
                            <img src={assets.worldatlas} alt="project-image" />
                            <p className="text-gray-400 mb-4">
                                Built a dynamic country information web app using React.
                                Integrated a search bar to find countries by name and implemented filters to view countries by continent. Added sorting functionality to arrange countries in ascending or descending order based on their names. Utilized REST APIs for real-time data,
                                and designed a responsive, user-friendly interface for seamless browsing across devices.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "JavaScript", "Axios"].map((tech, key) => (
                                    <span key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">{tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/AnirudhPurohit2001/WorldAtlas" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">Source Code</a>
                                <a href="https://world-atlas-puce.vercel.app/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2"> WEATHER APP</h3>
                            <img src={assets.weatherapp} alt="project-image" />
                            <p className="text-gray-400 mb-4">
                                Developed a dynamic weather application using React that integrates real-time weather data and a 7-day forecast. The app features an
                                intuitive search functionality with auto-fill suggestions, allowing users to easily find and check the weather for any city.The project showcases proficiency in React, API integration, and handling dynamic data updates.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "JavaScript", "Axios"].map((tech, key) => (
                                    <span key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">{tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/AnirudhPurohit2001/weather-app" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">Source Code</a>
                                <a href="https://weather-app-nu-sand-50.vercel.app/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                            </div>
                        </div>

                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
}