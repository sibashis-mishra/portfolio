# Modern Developer Portfolio

A modern, responsive developer portfolio built with React, TypeScript, and Vite. Features smooth animations, dark mode support, and a clean, professional design.

## Features

- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- 🌙 Dark mode support
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎯 SEO optimized
- ⚡ Fast performance with Vite
- 🔍 TypeScript for better development experience
- 📧 Email contact form integration

## Pages

- **Home**: Hero section with introduction
- **About**: Personal bio and skills
- **Projects**: Showcase of projects with filtering
- **Experience**: Professional experience timeline
- **Contact**: Contact form and social links

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Lucide React (icons)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/sibashis-mishra/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Customization

1. Update personal information:
   - Edit social media links in `src/components/layout/Navbar.tsx`
   - Modify contact information in `src/pages/Contact.tsx`
   - Update projects in `src/pages/Projects.tsx`
   - Customize experience details in `src/pages/Experience.tsx`

2. Email Service Setup:
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create a new email service and template
   - Add your EmailJS credentials to `.env`:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

3. Styling:
   - Theme colors can be modified in `src/index.css`
   - Component styles use Tailwind CSS classes

## Deployment

The project can be easily deployed to platforms like Vercel or Netlify:

1. Push your code to GitHub
2. Connect your repository to Vercel/Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
