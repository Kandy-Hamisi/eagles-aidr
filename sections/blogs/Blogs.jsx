import { BlogCard } from '@/components'
import { blogs } from '@/constants'
import React from 'react'

const Blogs = () => {
  return (
    <section className='max-container padding-t'>
        <div className='flex justify-center items-center flex-col space-y-8'>
            <h1 className='text-2xl text-center font-palanquin font-bold'>Read on Verified Information from Aidr</h1>
            <p className='text-slate-gray'>Browse through recent and old blogs</p>
        </div>

        <div className='flex items-center w-full flex-wrap gap-10 mt-10'>
            {
                blogs.map(blog => (
                    <BlogCard key={blog.id} {...blog} />
                ))
            }
        </div>
    </section>
  )
}

export default Blogs