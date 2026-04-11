import React from 'react';

interface ILockItemActions {
	children?: React.ReactNode
}

export function LockItemActions ({
	children
}: ILockItemActions) {
	return (
		<div className='lock-item-actions'>
			{children}
		</div>
	)
}