"use client";

import { MenuModal, Navbar } from '@/components'
import { Blogs, HomeHero } from '@/sections'
import Image from 'next/image'
import { useSelector } from 'react-redux'

export default function Home() {
  
  const menuModalState = useSelector((state) => state.menuModal.isOpen);

  console.log("main page loaded: ", menuModalState);

  return (
    <main className='relative'>
      <Navbar />

      <section className='padding'>
        {/* display the relevant eye catching data */}
        <HomeHero />
      </section>

      <section className='padding bg-blue-100 min-h-screen'>
        <Blogs />
      </section>

      {
        menuModalState && <MenuModal />
      }
    </main>
  )
}
