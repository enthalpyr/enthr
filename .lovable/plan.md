
# EnthalpyR Developer Showcase + CashBook App Page

## Overview
A modern, minimal developer portfolio website with dark/light mode toggle, showcasing apps built by EnthalpyR. The first featured app is **CashBook** — with a dedicated app page and all essential legal pages for Google Play Store publishing.

## Pages & Structure

### 1. Home Page — Developer Showcase
- **Hero section**: "EnthalpyR" brand name, tagline like "Building useful apps for everyday life", subtle gradient background
- **Apps grid**: Cards showing each app (currently just CashBook) with logo, short description, and "Learn More" button
- **About section**: Brief developer intro with contact email (enthalpyr@gmail.com)
- **Footer**: Links to legal pages, social/contact, copyright

### 2. CashBook App Page (`/cashbook`)
- **Hero banner**: App logo (switches with theme), app name, one-line tagline, Play Store badge (placeholder link)
- **Feature highlights**: Icon cards for key features:
  - Cash counting with all denominations (₹500 to ₹1)
  - Credit/Debit toggle with Cash/Online modes
  - Google Drive sync (private, no third-party servers)
  - Offline guest mode
  - Share as text or PDF
  - Ad-free experience
- **Screenshots carousel**: Using the uploaded app screenshots (light & dark mode)
- **How it works**: Step-by-step (Enter customer → Count cash → Save → Syncs to Drive)
- **Download CTA**: Play Store badge button (placeholder)
- **Footer links**: Privacy Policy, Terms, Data Deletion

### 3. Privacy Policy Page (`/cashbook/privacy`)
- Tailored for CashBook — covers data collection, Google Drive sync, Firebase auth, offline usage, no ads/tracking
- Includes contact email for privacy concerns

### 4. Terms of Service Page (`/cashbook/terms`)
- Usage terms specific to CashBook — acceptable use, disclaimers, liability limits

### 5. Data Deletion / Contact Page (`/cashbook/data-deletion`)
- Instructions for users to request data deletion
- Contact email for support requests

## Design Details
- **Theme toggle**: Light/dark mode using CashBook's exact color palette (brand orange `#D35400` / `#FF9933`, dark bg `#070B15`, light bg `#F2F5F9`)
- **App logos**: Light mode logo on light theme, dark mode logo on dark theme
- **Mobile-first responsive layout**
- **Smooth scroll animations** for section transitions
- **Legal pages** styled cleanly within the same layout — accessible from CashBook's page footer without cluttering the main showcase

## Navigation
- Top navbar: Home | Apps (dropdown or anchor) | About | Theme toggle
- CashBook page has its own sub-navigation for sections
- Legal pages share a minimal layout with back-to-app link
