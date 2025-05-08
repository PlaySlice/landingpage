import { motion } from 'framer-motion';

// Simple seeded random for consistent but unique star positions
function seededRandom(seed: number) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const NUM_STARS = 18;

const AnimatedStarsBackground = ({ className = '', burst = false }: { className?: string, burst?: boolean }) => (
  <div className={`absolute inset-0 pointer-events-none z-10 ${className}`}>
    {Array.from({ length: NUM_STARS }).map((_, i) => {
      // Use seeded random for top/left and animation
      const rand1 = seededRandom(i + 1);
      const rand2 = seededRandom(i + 100);
      const rand3 = seededRandom(i + 200);
      const size = i % 3 === 0 ? 38 : i % 3 === 1 ? 28 : 18;
      const top = 5 + rand1 * 85; // 5% to 90%
      const left = 5 + rand2 * 90; // 5% to 95%
      const opacity = 0.10 + (rand3 * 0.15);
      const blur = 0.5 + rand2 * 1.2;
      const yMove = 10 + rand1 * 30;
      const xMove = 8 + rand2 * 18;
      const duration = 7 + rand3 * 7;
      return (
        <motion.svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            opacity,
            filter: `blur(${blur}px)`,
            zIndex: 0
          }}
          initial={{ y: 0, x: 0, scale: 1, opacity }}
          animate={burst ? { y: [0, yMove, 0], x: [0, xMove, 0], scale: [1, 1.7, 1], opacity: [opacity, 1, opacity] } : { y: [0, yMove, 0], x: [0, xMove, 0], scale: 1, opacity }}
          transition={burst ? { duration: 0.7, times: [0, 0.3, 1], repeat: 0, ease: 'easeInOut' } : { duration, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M12 2.5L13.7553 8.2447L19.5 10L13.7553 11.7553L12 17.5L10.2447 11.7553L4.5 10L10.2447 8.2447L12 2.5Z"
            fill="#fff"
            fillOpacity="0.8"
          />
        </motion.svg>
      );
    })}
  </div>
);

export default AnimatedStarsBackground; 