import { motion } from "framer-motion";

const FadeIn = (WrappedComponent) => {
  return (props) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}
    >
      <WrappedComponent {...props} />
    </motion.div>
  );
};

export default FadeIn;