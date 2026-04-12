import { useEffect, useState } from 'react';
import { animate } from "motion/react";

interface ICodeItem {
  value: number;
  divider?: boolean;
}

export function CodeItem({
    value = 0,
    divider = false
}: ICodeItem) {
  const [lockValue, setLockValue] = useState(value);

  /** Animates the lock value from 0 to the specified value */
  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1,
      onUpdate(value: number) {
        setLockValue(Number(value.toFixed()));
      }
    });

    return () => controls.stop();
  }, [value]);

  return (
    <div className='code-item'>
      {lockValue}
      {divider ? <hr className='code-item__divider' /> : null}
    </div>
  );
}