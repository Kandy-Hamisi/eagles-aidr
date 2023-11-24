"use client";

import { navLinks } from "../../constants";
import { FaBars } from "react-icons/fa";
import Button from "../button/Button";
import { useSelector, useDispatch } from "react-redux";
import { openMenu } from "@/redux/features/menuModal";


const Navbar = () => {

    const menuModalState = useSelector((state) => state.menuModal.isOpen);
    const dispatch = useDispatch();

    console.log(menuModalState);

    const handleOpenMenu = () => {
        dispatch(openMenu());
    }

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/" className="lg:text-3xl text-3xl font-bold font-palanquin ">
                Aidr
            </a>

            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {
                    navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}
                                className='font-montserrat leading-normal text-lg text-slate-gray'>{item.label}</a>
                        </li>
                    ))
                }
            </ul>
            <div className='hidden max-lg:block'>
                {/* <img
                    src={hamburger}
                    alt='hamburger'
                    width={25}
                    height={25}
                /> */}

                <div className="hidden lg:block">
                    <Button
                        label="Contribute Data"
                        backgroundColor="bg-blue-500"
                        textColor="white"
                    />
                </div>

                <FaBars onClick={handleOpenMenu} className="text-xl cursor-pointer md:text-2xl hidden max-lg:block" />
            </div>
        </nav>
    </header>
  )
}

export default Navbar