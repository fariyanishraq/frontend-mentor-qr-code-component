import Img from './assets/image-qr-code.png';
import { motion } from 'framer-motion';
import { container, item } from './motion.js';

export default function App() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="card"
      >
        <motion.div variants={container} animate="visible" initial="hidden">
          <motion.div variants={item} className="image-comp">
            <img src={Img} className="img" alt="img" />
          </motion.div>
          <motion.div
            variants={container}
            animate="visible"
            initial="hidden"
            className="card-text-comp"
          >
            <p className="card-title">
              Improve your front-end <br /> skills by building projects
            </p>
            <p className="card-description">
              Scan the QR code to visit Frontend <br /> Mentor and take your
              coding skills to <br /> the next level.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
