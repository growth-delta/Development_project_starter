import React from 'react';

import docsLogo from '/docs.png';
import daisyLogo from '/daisy.png';
import tailwindLogo from '/tailwind.png';
import reactLogo from '/react.svg';
import viteLogo from '/vite.svg';

function Nav() {
    return (
        <>
            <h3 className="text-center text-2xl font-bold">Documentation</h3>
            <div className="navbar justify-center">
                <div className="join">
                    <button className="btn join-item">
                        <a href="https://github.com/growth-delta/FrontEnd" target="_blank">
                            <img src={docsLogo} className="" alt="Growth Delta logo" />
                        </a>
                    </button>
                    <button className="btn join-item">
                        <a href="https://vitejs.dev" target="_blank">
                            JS
                            <img src={viteLogo} className="" alt="Vite logo" />
                        </a>
                    </button>
                    <button className="btn join-item">
                        <a href="https://react.dev" target="_blank">
                            JS
                            <img src={reactLogo} className="" alt="React logo" />
                        </a>
                    </button>
                    <button className="btn join-item">
                        <a href="https://tailwindcss.com" target="_blank">
                            CSS
                            <img src={tailwindLogo} className="" alt="TailwindCSS logo" />
                        </a>
                    </button>
                    <button className="btn join-item">
                        <a href="https://daisyui.com" target="_blank">
                            CSS
                            <img src={daisyLogo} className="" alt="DaisyUi logo" />
                        </a>
                    </button>
                </div>
            </div>
        </>
    )
};

export default Nav;