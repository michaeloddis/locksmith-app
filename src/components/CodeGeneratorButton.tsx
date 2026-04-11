/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useRef } from 'react';
import { CircleLoader } from './CircleLoader';
import { motion } from "motion/react";

interface ICodeGeneratorButton {
  children?: React.ReactNode,
  onGenerateCode: () => void; 
}

export function CodeGeneratorButton ({
  children,
  onGenerateCode
}: ICodeGeneratorButton) {
  const [showSpinner, setShowSpinner] = useState(false);
  const intervalId: any = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalId.current);
  }, []);

  const onClickHandler = () => {
    setShowSpinner(true);
    onGenerateCode();

    // Perceived the display of the spinner since there is not really anything to track for completion.
    intervalId.current = setInterval(() => setShowSpinner(false), 1000);
  }
  
  return (
    <div>
      <motion.button
        className='code-generator-button'
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1.0 }}
        onClick={onClickHandler}>
        {children}
        {showSpinner ? <CircleLoader /> : null}
      </motion.button>
    </div>
  )
}