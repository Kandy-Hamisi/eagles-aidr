import React from 'react'

const BlogCard = ({ id, title, organization, date, media }) => {
  return (
    <div className='flex flex-col gap-8 cursor-pointer'>
        <div className='relative group'>
            <img src={media} alt={title} className='' />
            <button
                className='group-hover:block ease-in-out duration-300 bg-blue-400 text-white font-bold font-palanquin p-2 rounded-md absolute top-[40%] left-[40%]'
            >
                View more
            </button>
        </div>
        <div>
            <h4>{organization} : {title}</h4>
            <p className='mt-2'>{date}</p>
        </div>
    </div>
  )
}

export default BlogCard