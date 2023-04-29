import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
function Fade({
  children,
  variants,
}: {
  children: ReactNode;
  variants?: Variants;
}) {
  const variant: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    ...variants,
  };

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full "
      variants={variant}
      animate="animate"
      initial="initial"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

export default Fade;
