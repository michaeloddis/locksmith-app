import { motion } from "motion/react"
import type { CSSProperties } from "react"

const containerStyle: CSSProperties = {
  position: "relative",
  width: "1.5rem",
  height: "1.5rem",
  boxSizing: "border-box"
} as const

const circleStyle: CSSProperties = {
  display: "block",
  width: "1.5rem",
  height: "1.5rem",
  border: "0.2rem solid rgba(255, 255, 255, 0.2)",
  borderTop: "0.2rem solid #ffffff",
  borderRight: "0.2rem solid #ffffff",
  borderRadius: "50%",
  position: "absolute",
  boxSizing: "border-box" as const,
  top: 0,
  left: 0
} as const

const spinTransition = {
  loop: Infinity,
  ease: "linear" as const,
  duration: 0.5 as const
} as const;

export function CircleLoader() {
  return (
    <div style={containerStyle}>
      <motion.span
        style={circleStyle}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
}