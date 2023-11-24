import { FormsContainer } from '@/sections'
import React from 'react'

const Forms = () => {
  return (
    <main className='relative bg-blue-200'>
        <section className='padding'>

            <h1 className='font-palanquin font-bold text-lg'>Select A Form To record data</h1>

            <FormsContainer />
        </section>
    </main>
  )
}

export default Forms