# Yassine El Hamdani - IT Portfolio Website

A modern, professional portfolio website for a System & Network Administrator, built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between dark and light themes with persistent storage
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Component-Based Architecture**: Well-organized, reusable React components

## Sections

1. **Hero Section**: Introduction with name, title, and call-to-action buttons
2. **About Me**: Professional summary with key highlights
3. **Skills**: Organized skill categories with visual cards
4. **Experience**: Timeline of professional experience
5. **Projects**: Featured projects with descriptions and technologies
6. **Media**: Video and presentation showcase
7. **Downloads**: CV and portfolio documents
8. **Contact**: Contact information and message form
9. **Footer**: Quick links and social media

## Tech Stack

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe code
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and dev server
- **Lucide React**: Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Build the project for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form and info
│   ├── Downloads.tsx   # Download section
│   ├── Experience.tsx  # Experience timeline
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero/landing section
│   ├── Media.tsx       # Video and slides section
│   ├── Navigation.tsx  # Navigation header
│   ├── Projects.tsx    # Projects showcase
│   └── Skills.tsx      # Skills cards
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Dark/light mode context
├── App.tsx            # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## Customization

### Update Personal Information

1. **Contact Information**: Edit `src/components/Contact.tsx` to update email, LinkedIn, GitHub, etc.
2. **Experience**: Modify `src/components/Experience.tsx` to add/edit work experience
3. **Skills**: Update `src/components/Skills.tsx` to reflect your skills
4. **Projects**: Customize `src/components/Projects.tsx` with your projects

### Add Files for Download

Place your CV, portfolio, and presentation files in the `public` folder and update the download links in:
- `src/components/Hero.tsx` (CV download button)
- `src/components/Downloads.tsx` (all download buttons)

### Add Video and Slides

1. **Video**: Upload your video to YouTube or place an MP4 file in the `public` folder
2. Update the video section in `src/components/Media.tsx`
3. **Slides**: Convert your presentation to images or embed iframe in `src/components/Media.tsx`

### Change Color Scheme

The site uses blue as the primary color. To change:
1. Find all instances of `blue-` in component files
2. Replace with your preferred Tailwind color (e.g., `green-`, `red-`, `cyan-`)

## Deployment

### Deploy to GitHub Pages

1. Update `vite.config.ts` with your repo name:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ...
});
```

2. Build and deploy:
```bash
npm run build
```

3. Push the `dist` folder to a `gh-pages` branch

### Deploy to Netlify/Vercel

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

This project is open source and available for personal use.

## Contact

**Yassine El Hamdani**
- Email: yassine.elhamdani@example.com
- LinkedIn: [linkedin.com/in/yassine-elhamdani](https://linkedin.com/in/yassine-elhamdani)
- GitHub: [github.com/yassineelhamdani](https://github.com/yassineelhamdani)
- Location: Marrakech, Morocco

---

Built with React, TypeScript, and Tailwind CSS
