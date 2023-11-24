"use client";

import { FaAddressBook, FaCog, FaTimes } from "react-icons/fa";
import { Button } from "@/components"
import { useDispatch } from "react-redux";
import { closeMenu } from "@/redux/features/menuModal";
import Link from "next/link";

const MenuModal = () => {

    const dispatch = useDispatch();

    const handleCloseMenu = () => {
        dispatch(closeMenu());
    }

  return (
    <div className="min-h-screen transition-all ease-in-out duration-300 z-20 w-full modal-gradient absolute top-0 bottom-0">
        <div className="flex flex-col gap-10 padding bg-white w-full fixed bottom-0 rounded-tr-lg rounded-tl-lg z-20">
            <div className="flex justify-end">
                <FaTimes onClick={handleCloseMenu} className="text-xl cursor-pointer text-red-400" />
            </div>
            <div className="flex items-center space-x-4">
                <FaCog className="text-xl" />
                <h4 className="text-xl font-bold cursor-pointer hover:text-blue-400">Settings and Privacy</h4>
            </div>
            <div className="flex items-center space-x-4 cursor-pointer">
                <FaAddressBook className="text-xl" />
                <h4 className="text-xl font-bold hover:text-blue-400">Data Contributon Policies</h4>
            </div>
            <Link href="/login">
                <Button
                    label="Contribute Data"
                    backgroundColor="bg-orange-300"
                    textColor="white"
                    fullWidth
                />
            </Link>
        </div>
    </div>
  )
}

export default MenuModal