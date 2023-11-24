import { blankForms } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { FaMap } from 'react-icons/fa'

const FormCard = () => {
  return (
    <div className='w-full flex flex-col gap-10'>
        {
            blankForms.map(form => (
                <Link href={`/forms/${form.id}`} key={form.id} className='bg-white border-b-2 shadow-lg rounded-lg p-8 cursor-pointer'>
                    <div className="flex items-center space-x-4">
                        <div>
                            <FaMap />
                        </div>
                        <div>
                            <p>{form.formName}</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p>{form.period}</p>
                    </div>
                </Link>
            ))
        }
    </div>
  )
}

export default FormCard