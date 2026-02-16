import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";
import PageTransition from "@/components/PageTransition";

const messages = [
  {
    title: "Your smile",
    text: "Your smile lights up every room you walk into. It's the first thing I fell in love with. 💕",
  },
  {
    title: "Your kindness",
    text: "The way you care for everyone around you inspires me every single day. You have the biggest heart. 🌸",
  },
  {
    title: "Your laugh",
    text: "I could listen to your laugh forever. It's my favorite sound in the whole world. 🎶",
  },
  {
    title: "Us together",
    text: "Every moment with you feels like a beautiful dream I never want to wake up from. 🌙",
  },
  {
    title: "Your strength",
    text: "You're the strongest person I know. You handle everything with grace and beauty. 🌹",
  },
];

const Messages = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-gradient-warm py-16 px-6">
        <FloatingHearts />

        <div className="relative z-10 max-w-xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-display font-bold text-center text-gradient-rose mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why I Love You
          </motion.h2>
          <motion.p
            className="text-center text-muted-foreground font-body italic mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Just a few of the million reasons...
          </motion.p>

          <div className="space-y-6">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                className="bg-card rounded-2xl p-6 shadow-md border border-border"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
              >
                <h3 className="font-display text-xl font-semibold text-primary mb-2">
                  {msg.title}
                </h3>
                <p className="font-body text-foreground/80 leading-relaxed">
                  {msg.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.button
              onClick={() => navigate("/wish")}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-body text-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              One Last Thing... 💌
            </motion.button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Messages;
