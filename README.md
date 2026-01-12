# Khilan Sakariya - Professional Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Showcasing professional translation services and linguistic expertise.

## 🌟 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Performance Optimized**: Fast loading with Next.js 14 and optimized assets
- **SEO Friendly**: Meta tags, sitemap, and structured data
- **Google Analytics**: Integrated GA4 for website analytics
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Featured projects with detailed archive
- **Professional Sections**: About, Experience, Education, and Services

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **Analytics**: Google Analytics 4

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/khilansakariya/khilansakariya.github.io.git
   cd khilansakariya.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
khilansakariya.github.io/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Homepage
│   │   ├── archive/
│   │   │   └── page.tsx        # Projects archive page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Navigation.tsx      # Navigation component
│   │   ├── Footer.tsx          # Footer component
│   │   ├── Analytics.tsx       # Google Analytics
│   │   └── sections/
│   │       ├── Hero.tsx        # Hero section
│   │       ├── About.tsx       # About section
│   │       ├── Experience.tsx  # Work experience
│   │       ├── Education.tsx   # Education section
│   │       ├── Projects.tsx    # Featured projects
│   │       └── Contact.tsx     # Contact form
│   └── data/
│       └── projects.ts         # Project data
├── public/
│   ├── robots.txt              # SEO robots file
│   └── sitemap.xml             # SEO sitemap
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
└── package.json
```

## 🎨 Customization

### Colors and Theme

The site uses a custom color palette defined in `tailwind.config.js`:

```javascript
colors: {
  primary: { /* Blue shades */ },
  navy: { /* Dark blue shades */ },
  green: { /* Green accents */ }
}
```

### Content Updates

1. **Personal Information**: Update content in respective section components
2. **Projects**: Modify `src/data/projects.ts` to add/remove projects
3. **Contact Details**: Update email and social links in Contact component
4. **SEO**: Update metadata in `src/app/layout.tsx`

### Styling

- **Global Styles**: `src/app/globals.css`
- **Component Styles**: Tailwind classes in component files
- **Custom Classes**: Defined in `globals.css` under `@layer components`

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for best user experience
- **Bundle Size**: Optimized with Next.js tree shaking
- **Images**: Optimized with Next.js Image component

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
npm run format       # Format code with Prettier
npm run export       # Export static files for GitHub Pages
```

## 🚀 Deployment

### GitHub Pages Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **Automatic Deployment**
   - GitHub Actions will automatically build and deploy
   - Site will be available at: `https://khilansakariya.github.io`

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   npm run export
   ```

2. **Deploy to GitHub Pages**
   - Copy contents of `out/` folder to GitHub Pages branch
   - Or use GitHub Actions workflow

## 📈 Analytics

Google Analytics 4 is integrated for tracking:
- Page views and user behavior
- Traffic sources and demographics
- Performance metrics

## 🔍 SEO Features

- **Meta Tags**: Complete OpenGraph and Twitter cards
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Proper crawling instructions
- **Structured Data**: Schema markup for better search results
- **Performance**: Optimized for Core Web Vitals

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Responsive layout for tablets
- **Desktop**: Full-featured desktop experience
- **Touch Friendly**: Optimized for touch interactions

## 🎯 Key Sections

### Hero Section
- Professional introduction
- Call-to-action buttons
- Smooth scroll navigation

### About Section
- Professional summary
- Key skills and services
- Personal background

### Experience Section
- Tabbed interface for work history
- Detailed role descriptions
- Key achievements

### Education Section
- Academic background
- Certifications and training
- Educational achievements

### Projects Section
- Featured translation projects
- Project categories and technologies
- Links to live work

### Contact Section
- Contact form with validation
- Social media links
- Professional contact information

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: khilansakariya123@yahoo.com
- **LinkedIn**: [Khilan Sakariya](https://www.linkedin.com/in/khilan005/)
- **X**: [@khilan005](https://twitter.com/khilan005)
- **Instagram**: [@khilan.sk](https://www.instagram.com/khilan.sk)
- **ProZ**: [Professional Profile](http://www.proz.com/profile/3562571)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Animations with [Framer Motion](https://www.framer.com/motion/)

---

**Made with ❤️ in India**
