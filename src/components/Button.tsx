import React, { ReactNode } from 'react'

export default function Button({title, onClick}: {title: ReactNode, onClick: () => void}) {
  return (
    <button className=''>
        {title}
    </button>
  )
}
