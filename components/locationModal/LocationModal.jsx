import { closeGeopoint } from '@/redux/features/geopointModal';
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const LocationModal = () => {

    const locationModalState = useSelector((state) => state.geopointModal.isOpen);

    const dispatch = useDispatch();

    const handleCloseLocationModal = () => {
        dispatch(closeGeopoint());
    }

  return (
    <section className='absolute padding top-0 bottom-0 z-10 modal-gradient flex items-center justify-center w-full'>
        <div className='bg-white padding w-full'>
            <div className='flex justify-end'>
                <FaTimes onClick={handleCloseLocationModal} className='text-xl cursor-pointer' />
            </div>
            <div className='flex space-x-4 items-center'>
                <input onClick={handleCloseLocationModal} type="checkbox" name="location" id="location" />
                <p className='text-sm text-slate-gray'>Turn on Location</p>
            </div>
        </div>
    </section>
  )
}

export default LocationModal