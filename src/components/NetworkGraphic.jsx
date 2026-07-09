import { motion } from 'framer-motion'

const nodes = [
  { cx: 120, cy: 60, r: 4 },
  { cx: 40, cy: 120, r: 3 },
  { cx: 200, cy: 100, r: 3.5 },
  { cx: 80, cy: 180, r: 4 },
  { cx: 160, cy: 160, r: 3 },
  { cx: 220, cy: 50, r: 2.5 },
  { cx: 30, cy: 60, r: 2.5 },
  { cx: 180, cy: 220, r: 3 },
]

const lines = [
  { x1: 120, y1: 60, x2: 40, y2: 120 },
  { x1: 120, y1: 60, x2: 200, y2: 100 },
  { x1: 120, y1: 60, x2: 80, y2: 180 },
  { x1: 40, y1: 120, x2: 30, y2: 60 },
  { x1: 200, y1: 100, x2: 220, y2: 50 },
  { x1: 200, y1: 100, x2: 160, y2: 160 },
  { x1: 80, y1: 180, x2: 160, y2: 160 },
  { x1: 80, y1: 180, x2: 180, y2: 220 },
  { x1: 160, y1: 160, x2: 180, y2: 220 },
]

export default function NetworkGraphic({ darkMode }) {
  return (
    <motion.div
      className="fixed right-[-60px] md:right-0 top-1/4 w-[260px] md:w-[300px] pointer-events-none z-[1]"
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg
        viewBox="0 0 260 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        style={{ opacity: darkMode ? 0.08 : 0.06 }}
      >
        {/* Lines */}
        {lines.map((l, i) => (
          <motion.line
            key={`l${i}`}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="#C9A84C"
            strokeWidth={1}
            strokeDasharray="4 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: i * 0.15, ease: 'easeInOut' }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <motion.circle
            key={`n${i}`}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill="#C9A84C"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: 'backOut' }}
          />
        ))}

        {/* Central pulsing node */}
        <motion.circle
          cx={120}
          cy={60}
          r={6}
          fill="#C9A84C"
          animate={{ r: [6, 9, 6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </motion.div>
  )
}
