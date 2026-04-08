import { Link } from "react-router-dom";
import {
  Banknote, CreditCard, CloudOff, Share2, ShieldCheck, Ban,
  ArrowRight, ChevronLeft, ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { useTheme } from "@/components/ThemeProvider";
import { useState } from "react";

import cashbookLogoLight from "@/assets/cashbook-logo-light.png";
import cashbookLogoDark from "@/assets/cashbook-logo-dark.png";
import ss1 from "@/assets/cashbook-ss-1.png";
import ss2 from "@/assets/cashbook-ss-2.png";
import ss3 from "@/assets/cashbook-ss-3.png";
import ss4 from "@/assets/cashbook-ss-4.png";
import ss5 from "@/assets/cashbook-ss-5.png";
import ss6 from "@/assets/cashbook-ss-6.png";

const lightScreenshots = [ss1, ss2, ss3];
const darkScreenshots = [ss4, ss5, ss6];

const features = [
  { icon: Banknote, title: "All Denominations", desc: "₹500 notes down to ₹1 coins — every Indian denomination covered." },
  { icon: CreditCard, title: "Credit / Debit & Cash / Online", desc: "Toggle transaction type and payment mode with a single tap." },
  { icon: ShieldCheck, title: "Google Drive Sync", desc: "Your data syncs to your personal Google Drive — private and secure." },
  { icon: CloudOff, title: "Works Offline", desc: "Use as Guest without internet. Connect your account later to sync." },
  { icon: Share2, title: "Share as Text or PDF", desc: "Generate and share transaction summaries instantly." },
  { icon: Ban, title: "Ad-Free Forever", desc: "No ads, no tracking, no interruptions — just a clean tool." },
];

const steps = [
  { num: "1", title: "Enter Customer", desc: "Add a customer name for the transaction." },
  { num: "2", title: "Count Cash", desc: "Tap denomination counts — totals update in real-time." },
  { num: "3", title: "Save Transaction", desc: "Choose Credit/Debit, Cash/Online, and hit Save." },
  { num: "4", title: "Auto Sync", desc: "Data syncs to Google Drive automatically when online." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0, 0, 0.2, 1] as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const CashBook = () => {
  const { theme } = useTheme();
  const [currentSS, setCurrentSS] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDir: number) => {
    setDirection(newDir);
    setCurrentSS((c) => {
      if (newDir === -1) return c === 0 ? screenshots.length - 1 : c - 1;
      return c === screenshots.length - 1 ? 0 : c + 1;
    });
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-16 sm:py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/8 via-background to-accent/20" />
        <motion.div
          className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:flex-row md:gap-12"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.img
            variants={fadeUp}
            src={theme === "dark" ? cashbookLogoDark : cashbookLogoLight}
            alt="CashBook Logo"
            className="h-32 w-32 rounded-3xl shadow-lg sm:h-40 sm:w-40"
          />
          <div className="text-center md:text-left">
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              CashBook
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-3 max-w-xl text-lg text-muted-foreground"
            >
              The Indian ad-free cash calculator & cashbook management app with Google Drive sync.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start"
            >
              <a
                href="https://drive.google.com/file/d/1a6OIXsLEMiHQiQfoEWZGvDi_nbBv_Eeq/view?usp=drivesdk"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow transition-transform hover:scale-105"
              >
                Download APK <ArrowRight className="h-4 w-4" />
              </a>
              <span className="inline-flex items-center rounded-xl border px-4 py-3 text-xs text-muted-foreground">
                Built with Kotlin · Firebase · Google Drive API
              </span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <motion.section
        className="px-4 py-16 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2
            variants={fadeUp}
            className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl"
          >
            Features
          </motion.h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                custom={i}
                className="rounded-xl border bg-card p-5 transition-shadow hover:shadow-md"
              >
                <div className="mb-3 inline-flex rounded-lg bg-accent p-2.5 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Screenshots */}
      <motion.section
        className="bg-card/50 px-4 py-16 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="mx-auto max-w-4xl">
          <motion.h2
            variants={fadeUp}
            className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl"
          >
            Screenshots
          </motion.h2>
          <motion.div variants={fadeUp} custom={1} className="relative flex items-center justify-center">
            <button
              onClick={() => paginate(-1)}
              className="absolute left-0 z-10 rounded-full border bg-card p-2 text-muted-foreground shadow hover:text-foreground sm:-left-6"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex justify-center overflow-hidden" style={{ minHeight: 420 }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={currentSS}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  src={screenshots[currentSS]}
                  alt={`CashBook screenshot ${currentSS + 1}`}
                  className="h-[420px] rounded-2xl border shadow-lg object-contain sm:h-[500px]"
                />
              </AnimatePresence>
            </div>
            <button
              onClick={() => paginate(1)}
              className="absolute right-0 z-10 rounded-full border bg-card p-2 text-muted-foreground shadow hover:text-foreground sm:-right-6"
              aria-label="Next screenshot"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
          <div className="mt-4 flex justify-center gap-2">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > currentSS ? 1 : -1); setCurrentSS(i); }}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === currentSS ? "bg-primary" : "bg-border"
                }`}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* How it works */}
      <motion.section
        className="px-4 py-16 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="mx-auto max-w-4xl">
          <motion.h2
            variants={fadeUp}
            className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl"
          >
            How It Works
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div key={s.num} variants={fadeUp} custom={i} className="text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {s.num}
                </div>
                <h3 className="font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="border-t bg-card/50 px-4 py-16 text-center sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <motion.h2 variants={fadeUp} className="text-2xl font-bold text-foreground">
          Ready to simplify your cash counting?
        </motion.h2>
        <motion.p variants={fadeUp} custom={1} className="mt-2 text-muted-foreground">
          Download CashBook for free — no ads, no hassle.
        </motion.p>
        <motion.a
          variants={fadeUp}
          custom={2}
          href="https://drive.google.com/file/d/1a6OIXsLEMiHQiQfoEWZGvDi_nbBv_Eeq/view?usp=drivesdk"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow transition-transform hover:scale-105"
        >
          Download APK <ArrowRight className="h-4 w-4" />
        </motion.a>
      </motion.section>

      {/* Legal Links */}
      <motion.section
        className="border-t px-4 py-8 sm:px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <Link to="/cashbook/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/cashbook/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          <Link to="/cashbook/data-deletion" className="hover:text-primary transition-colors">Data Deletion</Link>
        </div>
      </motion.section>
    </Layout>
  );
};

export default CashBook;
