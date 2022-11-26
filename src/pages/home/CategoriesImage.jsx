import React from 'react'

function CategoriesImage({img, name}) {
  return (
        <div className='px-2 py-3 hover:shadow-lg hover:scale-110 '>
            <img src={img} alt="Category image" className='h-[131px] w-[131px] rounded-2xl' />
            <p className='text-center text-black font-medium m-1'>{name}</p>
        </div>
  )
}

export default CategoriesImage
