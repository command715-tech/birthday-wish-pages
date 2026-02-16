import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import PageTransition from "@/components/PageTransition";

const Confetti = () => {
  const pieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 2 + Math.random() * 3,
    color: [
      "hsl(345, 60%, 60%)",
      "hsl(340, 80%, 72%)",
      "hsl(38, 70%, 55%)",
      "hsl(350, 60%, 90%)",
      "hsl(20, 40%, 95%)",
    ][Math.floor(Math.random() * 5)],
    size: 6 + Math.random() * 8,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-sm"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size * 0.6,
            backgroundColor: p.color,
          }}
          initial={{ y: -20, rotate: 0, opacity: 1 }}
          animate={{ y: "110vh", rotate: 360 * (Math.random() > 0.5 ? 1 : -1), opacity: 0 }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  );
};

const Wish = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransition>
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-warm overflow-hidden">
        {showConfetti && <Confetti />}
        <FloatingHearts />

        <div className="relative z-10 text-center px-6 max-w-lg">
          <motion.div
            className="text-7xl mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1 }}
          >
            🎉
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-display font-bold text-gradient-rose mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Happy Birthday, My Love!
          </motion.h1>

          <motion.div
            className="bg-card rounded-2xl p-8 shadow-lg border border-border mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="font-body text-lg text-foreground/85 leading-relaxed italic">
              "Today is your day, and I just want you to know how incredibly special you are to me. 
              You make my world brighter, warmer, and more beautiful just by being in it. 
              I'm so grateful for every laugh, every hug, and every moment we share together. 
              Here's to another year of making unforgettable memories. I love you more than words could ever say."
            </p>
          </motion.div>

          <motion.p
            className="text-2xl font-display text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            Forever yours ♥
          </motion.p>

          <motion.div
            className="mt-8 text-4xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            💖
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Wish;
