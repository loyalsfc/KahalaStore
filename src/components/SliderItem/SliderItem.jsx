import React from 'react'

function SliderItem({img}) {
    return (
        <div className='h-[384px] border w-full center-y justify-center overflow-hidden'>
            <img src={img} alt='' />
        </div>
    )
}

export default SliderItem
