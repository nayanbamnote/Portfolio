# Nayan Bamnote Portfolio

A modern, interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS. The site features smooth animations, responsive design, and an elegant user interface to showcase projects and professional experience.

## 🚀 Features

- **Modern UI/UX**: Clean and professional design with smooth animations using Framer Motion
- **Responsive Design**: Fully responsive across all device sizes
- **Interactive Elements**: Custom cursor effects with Blobity
- **Contact Form**: Integrated EmailJS for handling contact form submissions
- **Performance Optimized**: Vercel Analytics and Speed Insights integration
- **Type Safety**: Built with TypeScript for better code reliability
- **Smooth Animations**: Section transitions and text animations
- **Dark Theme**: Elegant dark theme with custom color palette

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Email Integration**: EmailJS
- **UI Components**: Custom components with Tailwind
- **Deployment**: Vercel
- **Icons**: Iconify

## 🏗️ Project Structure

```
├── app/
│   ├── components/
│   │   ├── about-section/
│   │   ├── contact+footer/
│   │   ├── header-section/
│   │   ├── hero-section/
│   │   ├── work-section/
│   │   └── ui/
│   ├── contexts/
│   ├── utils/
│   ├── page.tsx
│   └── layout.tsx
├── public/
└── styles/
```

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_PUBLIC_KEY=your_emailjs_public_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Environment Variables

The following environment variables are required:

- `NEXT_PUBLIC_SERVICE_ID`: EmailJS Service ID
- `NEXT_PUBLIC_TEMPLATE_ID`: EmailJS Template ID
- `NEXT_PUBLIC_PUBLIC_KEY`: EmailJS Public Key

## 🎨 Customization

1. **Colors**: Update the color scheme in `tailwind.config.ts`
2. **Content**: Modify the content in respective components
3. **Projects**: Update the projects list in `Works.tsx`
4. **Experience**: Update work experience in `Timeline.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## 👤 Social Links

**Nayan Bamnote**
- LinkedIn: [@nayan-bamnote](https://www.linkedin.com/in/nayan-bamnote-49443931b/)
- GitHub: [@nayanbamnote](https://github.com/nayanbamnote)
- Instagram: [@bamnotenayan](https://www.instagram.com/bamnotenayan/)

## 🙏 Acknowledgments

- Thanks to all contributors who helped in building this portfolio
- Inspiration from modern portfolio designs
- Open source community for amazing tools and libraries 