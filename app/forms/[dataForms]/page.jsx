"use client";

import { LocationModal } from '@/components';
import { openGeopoint } from '@/redux/features/geopointModal';
import { redirect } from 'next/navigation';
import React, { useState } from 'react'
import { FaSave } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

const DataForms = () => {
    
    const [ isGeopoint, setIsGeoPoint ] = useState(false);
    const [isLocationOn, setIsLocationOn ] = useState(false);

    const locationmodalState = useSelector((state) => state.geopointModal.isOpen);
    const dispatch = useDispatch();


    const handleOpenLocationmodal = () => {
        dispatch(openGeopoint());
        setIsGeoPoint(true);
    }

    const handleSave = () => {
        alert("Data saved locally");
    }

    const handleSubmitData = () => {
        redirect("/forms");
    }


  return (
    <main className='relative bg-blue-200 min-h-screen'>
        <section className='padding max-container'>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-palanquin font-bold'>Fill in the Data Form</h1>
                <FaSave onClick={handleSave} className='text-2xl cursor-pointer' />
            </div>

            <form className='mt-8 flex flex-col gap-10'>
                <div>
                    <label htmlFor="">Enter Recorder Name</label>
                    <input type="text" name="recorder" id="recorder" className='p-2 max-sm:p-2 border-b-2 outline-none border-b-slate-gray w-full bg-transparent' />
                </div>
                <div>
                    <label htmlFor="">Enter Recording location</label>
                    <input type="text" name="recorder" placeholder='Al Shifaa' id="recorder" className='p-2 max-sm:p-2 border-b-2 outline-none border-b-slate-gray w-full bg-transparent' />
                </div>
                <div>
                    <button type="button" onClick={handleOpenLocationmodal} className='bg-blue-500 text-white shadow-lg rounded-md p-2 max-sm:p-2 w-full'>GeoPoint Location</button>
                </div>
                {isGeopoint && <div className='flex ease-in-out duration-300 space-x-4 justify-center flex-col items-center'>
                    <p>Latitude: 40.7128</p>
                    <p>Longitude: -74.0060</p>
                </div>}

                <div>
                    <label htmlFor="">Situation Description</label>
                    <input type="text" name="recorder" placeholder='Resident building bombed' id="recorder" className='p-2 max-sm:p-2 border-b-2 outline-none border-b-slate-gray w-full bg-transparent' />
                </div>
                <div>
                    <label htmlFor="">Enter Number of Casualty</label>
                    <input type="number" name="recorder" placeholder='Enter Count' id="recorder" className='p-2 max-sm:p-2 border-b-2 outline-none border-b-slate-gray w-full bg-transparent' />
                </div>

                <div className="flex items-center space-x-4">
                    <input type="checkbox" name="privacy" id="privacy" />
                    <p className="text-sm">Mark form as finalized</p>
                </div>

                <div className="flex items-center space-x-4">
                    <input type="checkbox" name="privacy" id="privacy" />
                    <p className="text-sm">The data provided follow the Aidr data sharing policies</p>
                </div>

                <div>
                    <button type="submit" onSubmit={handleSubmitData} className='bg-blue-500 text-white shadow-lg rounded-md p-2 max-sm:p-2 w-full'>Submit Data</button>
                </div>
            </form>
        </section>
        {
            locationmodalState && <LocationModal />
        }
    </main>
  )
}

export default DataForms