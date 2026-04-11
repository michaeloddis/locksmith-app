import React from 'react';

interface ILockInputContainer {
	children?: React.ReactNode
}

export function LockInputContainer({
	children
}: ILockInputContainer) {
	return (
		<div className='lock-input-container'>
			{children}
		</div>
	)
}