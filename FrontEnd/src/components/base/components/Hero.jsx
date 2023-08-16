import React from 'react';

import Cards from './Cards';

function Hero() {
    return (
        <>
            <section className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <img src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg" className="lg:max-w-sm shadow-2xl mask mask-star-2"></img>
                    <div className='p-1'>
                        <h1 className="text-5xl font-bold">React Base Template</h1>
                        <div className='p-1'>
                            <p className="py-6">
                                The base template is a comprehensive web development starting point that combines 
                                React.js, TailwindCSS, Vite.js, JavaScript, and SWC. React.js is a widely-used JavaScript 
                                library for building interactive user interfaces. TailwindCSS is a highly customizable CSS 
                                framework that enables developers to quickly style applications with pre-defined classes. 
                                Vite.js serves as the build tool, offering fast and optimized development and production builds. 
                                JavaScript is the primary programming language, providing wide compatibility and flexibility. 
                                SWC, or Super-fast Web Compiler, is a high-performance JavaScript and TypeScript compiler. 
                                SWC enhances performance and reduces bundle size, resulting in faster loading times and improved 
                                overall efficiency. Together, this base template equips developers with powerful tools and 
                                technologies for creating responsive and performant web applications efficiently.
                            </p>
                        </div>
                        <div className='p-1'><a className="btn btn-primary" href="https://github.com/growth-delta/" target="_blank">GitHub<i className="fa-brands fa-github"></i></a></div>
                        <div className='p-1'><a className="btn btn-primary" href="https://github.com/growth-delta/FrontEnd/" target="_blank">More Info</a></div>
                    </div>
                    
                </div>
            </section>

            <Cards />

            <div className='text-center p-5'>
                <kbd className="kbd">Press</kbd>+<kbd className="kbd">ANY</kbd>+<kbd className="kbd">Key</kbd>
            </div>

        </>
    )
};

export default Hero;
