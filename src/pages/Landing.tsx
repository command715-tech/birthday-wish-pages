import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import FloatingHearts from "@/components/FloatingHearts";
import PageTransition from "@/components/PageTransition";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        </div>

        <FloatingHearts />

        <div className="relative z-10 text-center px-6 max-w-2xl">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
            className="text-6xl mb-6"
          >
            🎂
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-display font-bold text-gradient-rose mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Happy Birthday
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl font-display italic text-muted-foreground mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            To the most amazing person
          </motion.p>

          <motion.p
            className="text-3xl md:text-4xl font-display font-semibold text-primary mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            My Love ♥
          </motion.p>

          <motion.button
            onClick={() => navigate("/messages")}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-body text-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Open Your Gift ✨
          </motion.button>
        </div>
      </div>
    </PageTransition>
  );
};

export default Landing;
