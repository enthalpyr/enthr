import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { useTheme } from "@/components/ThemeProvider";
import cashbookLogoLight from "@/assets/cashbook-logo-light.png";
import cashbookLogoDark from "@/assets/cashbook-logo-dark.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const Index = () => {
  const { theme } = useTheme();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-accent/30" />
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.h1
            variants={fadeUp}
            custom={0}
            className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Enthalpy<span className="text-primary">R</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-4 text-lg text-muted-foreground sm:text-xl"
          >
            Building useful apps for everyday life
          </motion.p>
        </motion.div>
      </section>

      {/* Apps Grid */}
      <motion.section
        className="px-4 pb-20 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2
            variants={fadeUp}
            className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl"
          >
            My Apps
          </motion.h2>
          <div className="mx-auto grid max-w-md gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            <motion.div variants={fadeUp} custom={1}>
              <Link
                to="/cashbook"
                className="group block rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/30"
              >
                <div className="mb-4 flex items-center gap-4">
                  <img
                    src={theme === "dark" ? cashbookLogoDark : cashbookLogoLight}
                    alt="CashBook Logo"
                    className="h-16 w-16 rounded-xl"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-foreground">CashBook</h3>
                    <span className="text-xs text-muted-foreground">Android App</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Indian ad-free cash calculator & cashbook management app with Google Drive sync. Count cash, manage transactions, share as PDF.
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={2}
              className="flex items-center justify-center rounded-xl border border-dashed bg-card/50 p-6 text-center"
            >
              <p className="text-sm text-muted-foreground">More apps coming soon…</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About */}
      <motion.section
        className="border-t bg-card/50 px-4 py-16 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 variants={fadeUp} className="mb-4 text-2xl font-bold text-foreground">About</motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed">
            I'm <strong className="text-foreground">EnthalpyR</strong>, an independent developer focused on building
            practical, privacy-first mobile applications. Every app I build aims to solve a real problem
            without ads or unnecessary data collection.
          </motion.p>
          <motion.a
            variants={fadeUp}
            custom={2}
            href="mailto:enthalpyr@gmail.com"
            className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
          >
            enthalpyr@gmail.com
          </motion.a>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Index;
