import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Import icons for the menu

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="shadow sticky z-50 top-0 bg-white">
            <nav className="border-gray-200 px-4 lg:px-6 py-3">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center text-2xl font-bold text-orange-700">
                     <span className='text-gray-600'> &lt;sadique</span>Codes /&gt;
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-8">
                        <NavItem to="/" label="Home" />
                        <NavItem to="/about" label="About" />
                        <NavItem to="/github" label="GitHub" />
                        <NavItem to='/projects' label='Projects' />
                        <NavItem to="/contact" label="Contact Us" />
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Link to="https://reactrouter.com/" className="bg-orange-700 text-white px-4 py-2 rounded-lg hover:bg-orange-800 transition">Begin Your Journey</Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-800">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="lg:hidden flex flex-col space-y-4 mt-4">
                        <NavItem to="/" label="Home" />
                        <NavItem to="/about" label="About" />
                        <NavItem to="/contact" label="Contact Us" />
                        <NavItem to="/github" label="GitHub" />
                        <Link to="#" className="bg-orange-700 text-white px-4 py-2 rounded-lg text-center">Begin Your Journey</Link>
                    </div>
                )}
            </nav>
        </header>
    );
};

const NavItem = ({ to, label }) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            `block py-2 px-4 text-lg font-medium duration-200 ${
                isActive ? 'text-orange-700 border-b-2 border-orange-700' : 'text-gray-700'
            } hover:text-orange-700`
        }
    >
        {label}
    </NavLink>
);

export default Header;






// import { Link, NavLink } from 'react-router-dom'

// const Header = () => {
//     return (
//         <header className="shadow sticky z-50 top-0">
//             <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
//                 <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//                     <Link to="/" className="flex items-center">
//                         {/* <img
//                             src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
//                             className="mr-3 h-12"
//                             alt="Logo"
//                         /> */}
//                         <h1 className="mr-3 h-12" alt="Logo">PagePilot</h1>
//                     </Link>
//                     <div className="flex items-center lg:order-2">
//                         <Link
//                             to="#"
//                             className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//                         >
//                             Log in
//                         </Link>
//                         <Link
//                             to="#"
//                             className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//                         >
//                             Get started
//                         </Link>
//                     </div>
//                     <div
//                         className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//                         id="mobile-menu-2"
//                     >
//                         <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//                             <li>
//                                 <NavLink
//                                     to="/"
//                                     className={({ isActive }) =>
//                                         `block py-2 pr-4 pl-3 duration-200 border-b 
//                                         ${isActive ? 'text-orange-700' : 'text-gray-700'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Home
//                                 </NavLink>
//                             </li>

//                             <li>
//                                 <NavLink
//                                     to="/about"
//                                     className={({ isActive }) =>
//                                         `block py-2 pr-4 pl-3 duration-200 border-b 
//                                         ${isActive ? 'text-orange-700' : 'text-gray-700'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     About
//                                 </NavLink>
//                             </li>

//                             <li>
//                                 <NavLink
//                                     to="/contact"
//                                     className={({ isActive }) =>
//                                         `block py-2 pr-4 pl-3 duration-200 border-b 
//                                         ${isActive ? 'text-orange-700' : 'text-gray-700'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Contact-us
//                                 </NavLink>
//                             </li>

//                             <li>
//                                 <NavLink
//                                     to="/github"
//                                     className={({ isActive }) =>
//                                         `block py-2 pr-4 pl-3 duration-200 border-b 
//                                         ${isActive ? 'text-orange-700' : 'text-gray-700'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     GitHub
//                                 </NavLink>
//                             </li>



//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     )
// }

// export default Header