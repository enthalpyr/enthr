import { Link } from "react-router-dom";
import { ArrowRight, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/Layout";
import { useTheme } from "@/components/ThemeProvider";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import cashbookLogoLight from "@/assets/cashbook-logo-light.png";
import cashbookLogoDark from "@/assets/cashbook-logo-dark.png";
import enthalpyrLogo from "@/assets/enthalpyr-logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0, 0, 0.2, 1] as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const Index = () => {
  const { theme } = useTheme();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setSending(true);
    // Open mailto as fallback since no backend
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.open(`mailto:enthalpyr@gmail.com?subject=${subject}&body=${body}`, "_self");
    setTimeout(() => {
      setSending(false);
      setFormData({ name: "", email: "", message: "" });
      toast({ title: "Email client opened!", description: "Send the pre-filled email to reach me." });
    }, 1000);
  };

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
            <span>Enthalpy<span className="text-primary">R</span></span>
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

      {/* About & Contact */}
      <motion.section
        className="border-t bg-card/50 px-4 py-16 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2">
            {/* About */}
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center md:items-start md:text-left">
              <img src={enthalpyrLogo} alt="EnthalpyR Logo" className="mb-4 h-16 w-16" loading="lazy" width={512} height={512} />
              <h2 className="mb-3 text-2xl font-bold text-foreground">About</h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm <strong className="text-foreground">EnthalpyR</strong>, an independent developer focused on building
                practical, privacy-first mobile applications. Every app I build aims to solve a real problem
                without ads or unnecessary data collection.
              </p>
              <a
                href="mailto:enthalpyr@gmail.com"
                className="mt-4 text-sm font-medium text-primary hover:underline"
              >
                enthalpyr@gmail.com
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeUp} custom={1}>
              <h2 className="mb-3 text-center text-2xl font-bold text-foreground md:text-left">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  maxLength={100}
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  maxLength={255}
                />
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  maxLength={1000}
                  className="min-h-[100px]"
                />
                <Button type="submit" disabled={sending} className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  {sending ? "Opening…" : "Send Message"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Index;
