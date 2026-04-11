import React from 'react';

interface ILockItem {
	children?: React.ReactNode
}

export function LockItem({
	children
}: ILockItem) {
	return (
		<div className='lock-item'>
			{children}
		</div>
	)
}