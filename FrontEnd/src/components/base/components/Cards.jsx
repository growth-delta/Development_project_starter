import React from 'react';

import imageNuclear from '../assets/nuclear.png';
import imageShip from '../assets/ship.png';
import imageServer from '../assets/server.png';

function Cards() {
  return (
    <>
        <section className='hero'>
            <div className="hero-content flex-col lg:flex-row">

                <a href="https://react.dev" target="_blank">
                    <div className="card flex-shrink-0 w-full max-w-sm bg-base-100 hover:bg-base-200 hover:shadow-2xl">
                        <figure><img src={imageNuclear} alt="nuclear power station" /></figure>
                        <div className="card-body">
                        <h2 className="card-title">
                            React.js
                            <div className="badge badge-secondary">Framework</div>
                        </h2>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline text-xs">Frontend</div> 
                            <div className="badge badge-outline text-xs">JS</div>
                        </div>
                        </div>
                    </div>
                </a>

                <a href="https://tailwindcss.com" target="_blank">
                    <div className="card flex-shrink-0 w-full max-w-sm bg-base-100 hover:bg-base-200 hover:shadow-2xl">
                        <figure><img src={imageShip} alt="ship label" /></figure>
                        <div className="card-body">
                        <h2 className="card-title">
                            Tailwind
                            <div className="badge badge-secondary">Framework</div>
                        </h2>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline text-xs">Frontend</div>
                            <div className="badge badge-outline text-xs">CSS</div> 
                        </div>
                        </div>
                    </div>
                </a>

                <a href="https://vitejs.dev" target="_blank">
                    <div className="card flex-shrink-0 w-full max-w-sm bg-base-100 hover:bg-base-200 hover:shadow-2xl">
                        <figure><img src={imageServer} alt="server room" /></figure>
                        <div className="card-body">
                        <h2 className="card-title">
                            Vite.js
                            <div className="badge badge-secondary">Infrastructure</div>
                        </h2>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline text-xs">Compile</div>
                            <div className="badge badge-outline text-xs">Build</div> 
                        </div>
                        </div>
                    </div>
                </a>

            </div>
        </section>
    </>
  )
};

export default Cards;