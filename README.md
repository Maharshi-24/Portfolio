# 🚀 MINDPLANE Portfolio

A minimal, cinematic portfolio for **Maharshi Desai** featuring production-ready Node.js backend and GSAP-powered animations.

> **Philosophy:** *"Motion should feel inevitable, not decorative."*

## ✨ Features

- **Smooth Animations**: GSAP 3.12+ with ScrollTrigger for cinematic reveals
- **Buttery Smooth Scroll**: Lenis.js integration for premium scrolling experience
- **Micro-interactions**: Thoughtful hover effects and click feedback
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Compression middleware and optimized assets
- **Clean Architecture**: Modular JavaScript with clear separation of concerns
- **Accessibility**: Semantic HTML and ARIA labels throughout

## 🎨 Design System

### Colors
```css
--bg-primary: #FFFFFF
--text-primary: #0D0D0D
--text-secondary: rgba(0, 0, 0, 0.6)
--accent-dark: #111111
```

### Typography
- **Font**: Outfit (Google Fonts)
- **Sizes**: Fluid typography using clamp()
- **Weights**: 300, 400, 500, 600

### Animation Timing
- **Loader**: 3s total sequence
- **Section Reveals**: 0.8s duration, trigger at 80% viewport
- **Hover Effects**: 0.3s duration
- **Micro-interactions**: 0.15s compress, 0.3s release

## 🛠️ Tech Stack

### Backend
- **Node.js** + **Express** - Fast, minimal server
- **Compression** - Gzip compression for better performance

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **Vanilla JavaScript** - No frameworks, pure performance
- **GSAP 3.12+** - Professional-grade animations
- **ScrollTrigger** - Scroll-based animations
- **Lenis.js** - Smooth scroll library

## 📁 Project Structure

```
maharshi-portfolio/
├── server.js                 # Express server
├── package.json              # Dependencies
└── public/
    ├── index.html            # Main HTML
    ├── css/
    │   ├── variables.css     # Design system variables
    │   └── style.css         # Main styles
    ├── js/
    │   ├── scroll.js         # Lenis smooth scroll
    │   ├── animations.js     # GSAP animations
    │   ├── sounds.js         # Audio feedback (optional)
    │   └── main.js           # App initialization
    └── assets/
        ├── images/           # Image assets
        └── sounds/           # Audio files (optional)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 14+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Development Mode

For auto-restart on file changes:
```bash
npm run dev
```

## 📝 Sections

1. **Loader** - Animated word-by-word reveal
2. **Hero** - Bold introduction with CTA buttons
3. **About** - Personal introduction with image placeholder
4. **Skills** - Technical skills grid with icons
5. **Projects** - Featured work showcase
6. **Experience** - Timeline of professional journey
7. **Contact** - Contact form with validation
8. **Footer** - Copyright and scroll-to-top button

## 🎬 Animation Details

### Loader Sequence
- Words fade in with stagger (0.2s delay)
- Hold for 1.5s
- Fade out entire loader (0.5s)
- Trigger hero animation

### Hero Animation
- Elements fade in sequentially
- Stagger: 0.15s between elements
- Easing: power3.out

### Scroll Animations
- Trigger: 80% viewport
- Duration: 0.8s
- Once: true (no repeat)
- Easing: power3.out

### Micro-interactions
- Hover: scale(1.02), 0.3s
- Click: compress to scale(0.98), then release
- Form focus: scale(1.01)

## 🎨 Customization

### Update Personal Information

Edit `public/index.html`:
- Hero section: Name, tagline, skills
- About section: Bio paragraphs
- Projects: Add/edit project cards
- Experience: Update timeline entries

### Modify Colors

Edit `public/css/variables.css`:
```css
:root {
  --bg-primary: #FFFFFF;
  --text-primary: #0D0D0D;
  --accent-dark: #111111;
}
```

### Adjust Animation Timing

Edit `public/js/animations.js`:
```javascript
const EASINGS = {
  smooth: "power3.out",
  snappy: "back.out(1.7)",
  elastic: "elastic.out(1, 0.5)",
  loader: "power4.inOut"
};
```

## 📱 Responsive Breakpoints

- **Mobile**: 480px and below
- **Tablet**: 768px and below
- **Desktop**: 1024px and above
- **Wide**: 1440px and above

## ⚡ Performance

- Gzip compression enabled
- Optimized animation performance (60fps)
- Passive event listeners
- Lazy loading for scroll animations
- Minimal dependencies

## 🔧 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

ISC License - Free to use and modify

## 👤 Author

**Maharshi Desai**
- Full Stack Developer
- Specializing in Flutter, IoT, and Backend Development

## 🙏 Credits

- **GSAP** - GreenSock Animation Platform
- **Lenis** - Studio Freight smooth scroll
- **Outfit Font** - Google Fonts

---

**Built with ❤️ and attention to motion design**
