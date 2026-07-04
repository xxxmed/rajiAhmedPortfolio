# Ahmed Raji - Portfolio

A modern, multilingual portfolio website showcasing my work as a **Data & Software Engineering student** at INSEA, specializing in **Backend Development**, **ERP Integration (Odoo/SAP)**, **Data Pipelines**, and **CI/CD Automation**.

---

## 🎯 About Me

I'm a final-year engineering student passionate about:
- **Backend Development** (Java/Spring Boot, Node.js, Python)
- **Software Testing** (Unit, Integration, REST API validation)
- **ERP Integration** (Odoo & SAP)
- **Data Pipelines & ETL** (PostgreSQL, MongoDB, DBT)
- **DevOps & Automation** (Docker, GitHub Actions, CI/CD)

Currently seeking a **4-6 months final internship (PFE)** in software development, ERP, or data engineering.

---

## 🚀 Features

✨ **Multilingual Support** - French, English, and Arabic (with RTL support)
⚡ **Full Stack** - Next.js 15.5.6, React 19, TypeScript, Tailwind CSS
📱 **Responsive Design** - Mobile-first, works seamlessly across all devices
🔐 **Contact Form** - Integrated with Resend for email delivery
📧 **Email Notifications** - Locale-aware subject lines and HTML templates
🎨 **Beautiful UI** - Modern animations, gradients, and card-based layout
📊 **Two-Column Skills** - Organized skill categories in an elegant layout
🔄 **i18n Ready** - Full internationalization with next-intl

---

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 15.5.6
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3.3.0
- **Icons**: React Icons (hi, fa, si packs)
- **Animations**: CSS animations + Tailwind

### Backend & APIs
- **Email Service**: Resend 6.5.2
- **Internationalization**: next-intl 4.4.0
- **Type Safety**: TypeScript 5.0.0

### DevOps & Build
- **Package Manager**: npm
- **Build Output**: Standalone for Vercel
- **Environment**: Node.js 18+

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm

### Clone & Install
```bash
git clone https://github.com/xxxmed/rajiAhmedPortfolio.git
cd Portfolio
npm install
```

### Environment Variables
Create a `.env.local` file in the project root:
```env
RESEND_API_KEY=your_resend_api_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev
CONTACT_TO=your-email@example.com
```

### Local Development
```bash
npm run dev
```

Visit **http://localhost:3000** and navigate to `/en`, `/fr`, or `/ar` for different languages.

---

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Add environment variables in **Settings → Environment Variables**
4. Deploy automatically on every push

### Manual Build
```bash
npm run build
npm start
```

---

## 📄 Project Structure

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout
│   │   ├── [locale]/                  # Locale routing
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx               # Home page
│   │   │   ├── about/page.tsx         # About page
│   │   │   ├── projects/page.tsx      # Projects showcase
│   │   │   ├── skills/page.tsx        # Skills (2-column)
│   │   │   ├── contact/page.tsx       # Contact form
│   │   │   └── api/
│   │   │       └── contact/route.ts   # Email API endpoint
│   │   └── globals.css
│   ├── i18n/
│   │   ├── routing.ts                 # Locale config
│   │   ├── request.ts
│   │   └── navigation.ts              # Link wrapper
│   └── proxy.ts
├── components/
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── SkillCard.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── SectionTitle.tsx
├── lib/
│   ├── data.ts                        # Static content
│   └── utils.ts
├── messages/
│   ├── en.json                        # English translations
│   ├── fr.json                        # French translations
│   └── ar.json                        # Arabic translations
├── public/
│   ├── images/
│   │   └── profile.webp
│   └── cv/
│       ├── AhmedRajiCV_en.pdf
│       ├── AhmedRajiCV_fr.pdf
│       └── AhmedRajiCV_ar.pdf
├── middleware.ts                      # i18n routing
└── package.json
```

---

## 🎨 Pages Overview

### 🏠 Home
- Hero section with professional intro
- Call-to-action buttons (Projects, Download CV)
- Profile image with status badge

### 👤 About
- Personal bio
- Contact information with social links
- Professional experience timeline
- Educational background
- Technology stack details

### 💼 Projects
- 5+ featured projects with descriptions
- Tech stacks for each project
- Links to live demos and source code
- Filter by category

### 🎯 Skills
- Organized by category (Backend, Frontend, Database, DevOps, ERP, Testing, Data Science, etc.)
- Two-column responsive layout
- Visual skill cards with icons
- Mastery level indicators

### 📧 Contact
- Professional contact form
- Field-level validation with error messages
- Email integration via Resend
- Localized success/error feedback
- Direct contact info (email, phone, social links)

---

## 🌐 Internationalization

The portfolio supports **3 languages**:
- 🇫🇷 **Français** (French)
- 🇬🇧 **English**
- 🇸🇦 **العربية** (Arabic with RTL support)

Translations are stored in `/messages/*.json` and automatically loaded based on URL locale:
- `/en` → English
- `/fr` → Français
- `/ar` → العربية

---

## 📧 Contact Form & Email

The contact form integrates with **Resend** for reliable email delivery:

1. Fill out name, email, and message
2. Form validates fields (required, email format)
3. Submit to `/api/contact`
4. Email sent with locale-aware subject line
5. HTML template with professional styling
6. User receives success notification

**Error Handling**:
- Client-side validation with localized error messages
- Server-side validation before sending
- Graceful fallback if email service is unavailable

---

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start dev server (localhost:3000)

# Production
npm run build            # Build for production
npm start                # Start production server

# Linting & Type Check
npm run lint             # Run ESLint
npx tsc --noEmit        # Type check
```

---

## 🎨 Customization

### Change Profile Image
1. Replace `/public/images/profile.webp` with your image
2. Update image URL query param in `Hero.tsx` and `about/page.tsx` (e.g., `?v=2`)

### Update Personal Info
Edit `/lib/data.ts`:
```typescript
export const personalInfo = {
  name: "Your Name",
  email: "your.email@example.com",
  phone: "+1 (555) 000-0000",
  location: "Your City",
  // ... more fields
}
```

### Add Projects
Add new entries to `skillCategories` in `/lib/data.ts` and corresponding translations in `/messages/*.json`.

### Modify Styles
All styles use Tailwind CSS classes. Edit component files or `src/app/globals.css` for global changes.

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 🤝 Contributing

This is a personal portfolio. For suggestions or improvements, feel free to open an issue or reach out via the contact form.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📞 Contact

- **Email**: araji@insea.ac.ma
- **LinkedIn**: [Ahmed Raji](https://linkedin.com/in/ahmed-raji)
- **GitHub**: [xxxmed](https://github.com/xxxmed)
- **Website**: [Portfolio](https://rajiahmed-portfolio.vercel.app)

---

## 🙏 Acknowledgments

- **Next.js** for the amazing framework
- **Vercel** for hosting and deployment
- **Tailwind CSS** for beautiful styling
- **Resend** for email delivery
- **next-intl** for internationalization support

---

**Last Updated**: December 2025  
**Version**: 1.0.0
