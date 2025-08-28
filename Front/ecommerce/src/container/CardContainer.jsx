import React from 'react'

export default function CardContainer(props) {
    return (
        <div className='max-w-[4800px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6'>
            {props.children}
        </div>
    )
}


