import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-card">
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-foreground">
            <span>Enthalpy<span className="text-primary">R</span></span>
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Building useful apps for everyday life.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Apps</h4>
          <Link to="/cashbook" className="block text-sm text-muted-foreground hover:text-primary">
            CashBook
          </Link>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Legal</h4>
          <Link to="/cashbook/privacy" className="block text-sm text-muted-foreground hover:text-primary">
            Privacy Policy
          </Link>
          <Link to="/cashbook/terms" className="mt-1 block text-sm text-muted-foreground hover:text-primary">
            Terms of Service
          </Link>
          <Link to="/cashbook/data-deletion" className="mt-1 block text-sm text-muted-foreground hover:text-primary">
            Data Deletion
          </Link>
        </div>
      </div>
      <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} EnthalpyR. All rights reserved.</p>
        <p className="mt-1">
          Contact:{" "}
          <a href="mailto:enthalpyr@gmail.com" className="text-primary hover:underline">
            enthalpyr@gmail.com
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
