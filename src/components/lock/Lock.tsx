import React from 'react';

interface ILock {
  children?: React.ReactNode
}

export function Lock({
  children
}: ILock) {
  return (
    <div className='lock'>
      {children}
    </div>
  )
}