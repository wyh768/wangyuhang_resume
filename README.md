# Personal Portfolio Website

A high-end, minimal personal resume/portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **3 Style Templates**: Minimal (B/W alternating), Dark (orange accent), Terminal (hacker style)
- **Smooth Animations**: Scroll-triggered reveals, stagger effects, bar chart animations
- **Project Showcase**: Embed videos and images in project cards
- **PDF Download**: One-click resume PDF download
- **SEO Ready**: Auto-generated sitemap.xml and robots.txt
- **Responsive**: Mobile, tablet, and desktop layouts

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router + Turbopack)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Geist](https://vercel.com/font) (local fonts)

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
  lib/
    types.ts           # Data interfaces
    sample-data.ts     # Your resume data (edit this!)
  templates/
    MinimalPro/        # B/W alternating, PRD-style
    CreativeDesign/    # Dark + orange accent
    DarkTech/          # Terminal/hacker style
  app/
    page.tsx           # Style switcher + template render
    layout.tsx         # Fonts, metadata
    globals.css        # Global styles
    sitemap.ts         # SEO
    robots.ts          # SEO
public/
  photos/photo.png     # Your portrait
  resume.pdf           # Downloadable CV
  *.mp4                # Project videos
```

## How to Customize

1. **Edit your data**: Modify `src/lib/sample-data.ts`
2. **Replace photo**: Put your photo at `public/photos/photo.png`
3. **Replace resume PDF**: Put your PDF at `public/resume.pdf`
4. **Add project videos**: Copy MP4 files to `public/` and reference in data
5. **Default style**: Change `useState<TemplateStyle>('minimal')` in `page.tsx`

## Deployment

See [DEPLOY.md](./DEPLOY.md) for detailed instructions on:
- Vercel one-click deploy
- Custom domain setup
- Google/Baidu SEO submission

## License

MIT
