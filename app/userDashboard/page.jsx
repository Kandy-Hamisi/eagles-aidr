import React from 'react'

const UserDashboard = () => {
  return (
    <main className='relative bg-blue-200 min-h-screen '>
        <section className='padding max-container'>
            <div className='flex items-center justify-between '>
                <h1 className='text-2xl font-palanquin font-bold'>This is your dashboard</h1>
                <img src="/customer1.jpeg" className='h-12 w-12 rounded-full object-cover' alt="" />
            </div>

            <div className='mt-10 flex items-center justify-between'>
                <p>Your Trust score</p>
                <p className='text-sm font-bold'>30/50</p>
            </div>

            <div className='bg-white h-[150px] mt-10 flex items-center justify-center rounded-lg shadow-xl'>
                <h1 className='text-sm font-bold font-montserrat'>Your trust badges will appear here</h1>
            </div>

            <div className='flex items-center justify-center mt-10'>
                <h1 className='text-2xl font-bold font-palanquin'>Data I have contribiuted into Aidr</h1>
            </div>
            <div className='flex flex-col gap-10 mt-10'>
                <div className='bg-white rounded-md p-4 cursor-pointer'>
                    <h1>Casualty data on Gaza conflict</h1>
                </div>
                <div className='bg-white rounded-md p-4 cursor-pointer'>
                    <h1>Residence distraction data</h1>
                </div>
                <div className='bg-white rounded-md p-4 cursor-pointer'>
                    <h1>Premature newborns data at Hamas</h1>
                </div>

                <div>
                    <button className='bg-green-300 p-2 text-sm font-bold font-montserrat text-white w-full rounded-md'>Contribute more</button>
                </div>
            </div>
        </section>
    </main>
  )
}

export default UserDashboard;