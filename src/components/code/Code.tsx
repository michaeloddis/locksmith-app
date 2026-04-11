import React from 'react';

interface ICode {
  children?: React.ReactNode
}

export function Code ({
    children
}: ICode) {
  return (
    <div className='code'>
      {children}
    </div>
  )
}