import { Link } from "react-router-dom";
import {
  BookOpen, Users, Bell, FileText, ShieldCheck, Ban, ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { useTheme } from "@/components/ThemeProvider";

import khataokLogoLight from "@/assets/khataok-logo-light.png";
import khataokLogoDark from "@/assets/khataok-logo-dark.png";

const features = [
  { icon: BookOpen, title: "Smart Khata Management", desc: "Maintain digital ledgers for every customer with credit and debit entries." },
  { icon: Users, title: "Customer Profiles", desc: "Organize customers with names, phone numbers, and running balances." },
  { icon: Bell, title: "Payment Reminders", desc: "Send polite reminders to customers about pending dues via SMS or WhatsApp." },
  { icon: FileText, title: "Statements as PDF", desc: "Generate clean account statements and share them with one tap." },
  { icon: ShieldCheck, title: "Secure & Private", desc: "Your khata data stays on your device, with optional encrypted backup." },
  { icon: Ban, title: "Ad-Free Experience", desc: "No ads, no trackers — just a focused tool for managing your accounts." },
];

const steps = [
  { num: "1", title: "Add Customer", desc: "Save customer name and contact details." },
  { num: "2", title: "Record Entry", desc: "Add credit (you gave) or debit (you received) entries." },
  { num: "3", title: "Track Balance", desc: "See running balance per customer instantly." },
  { num: "4", title: "Share & Remind", desc: "Send statements or reminders directly from the app." },
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

const KhataOK = () => {
  const { theme } = useTheme();

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
            src={theme === "dark" ? khataokLogoDark : khataokLogoLight}
            alt="Khata OK Logo"
            className="h-32 w-32 rounded-3xl shadow-lg sm:h-40 sm:w-40"
          />
          <div className="text-center md:text-left">
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              Khata OK
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-3 max-w-xl text-lg text-muted-foreground"
            >
              The smart account management app for tracking customer credit & debit khata details.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start"
            >
              <span className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow">
                Coming Soon
              </span>
              <span className="inline-flex items-center rounded-xl border px-4 py-3 text-xs text-muted-foreground">
                Built with Kotlin · Offline-first
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

      {/* How it works */}
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
        className="border-t px-4 py-16 text-center sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <motion.h2 variants={fadeUp} className="text-2xl font-bold text-foreground">
          Khata OK is launching soon!
        </motion.h2>
        <motion.p variants={fadeUp} custom={1} className="mt-2 text-muted-foreground">
          A simpler way to manage your customer accounts. Stay tuned for the release.
        </motion.p>
        <motion.a
          variants={fadeUp}
          custom={2}
          href="mailto:enthalpyr@gmail.com?subject=Notify me about Khata OK"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow transition-transform hover:scale-105"
        >
          Notify Me <ArrowRight className="h-4 w-4" />
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
          <Link to="/khataok/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/khataok/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          <Link to="/khataok/data-deletion" className="hover:text-primary transition-colors">Data Deletion</Link>
        </div>
      </motion.section>
    </Layout>
  );
};

export default KhataOK;
