import { motion } from 'framer-motion';
import { RiArrowDownSLine } from 'react-icons/ri';

function Arrow({
  isOpen,
  className = '-left-1',
}: {
  isOpen: boolean;
  className?: string;
}) {
  return (
    <motion.span
      className={`absolute  ${className}`}
      initial={{ rotate: -90 }}
      animate={{ rotate: isOpen ? -90 : 0 }}
    >
      <RiArrowDownSLine />
    </motion.span>
  );
}

export default Arrow;
