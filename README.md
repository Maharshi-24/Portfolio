# Maharshi Desai Portfolio

A cinematic, high-performance portfolio website showcasing Maharshi Desai's work as a developer.

## Features

- **Cinematic Animations**: Powered by GSAP with smooth scroll-triggered reveals
- **Smooth Scrolling**: Implemented with Lenis.js for buttery smooth navigation
- **Interactive Sound Effects**: Audio feedback for user interactions
- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean, professional design with gradient backgrounds and typography

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Animations**: GSAP (GreenSock Animation Platform)
- **Smooth Scrolling**: Lenis.js
- **Backend**: Node.js with Express.js
- **Development**: Nodemon for auto-restart

## Project Structure

```
portfolio/
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── variables.css
│   └── js/
│       ├── animations.js
│       ├── main.js
│       ├── scroll.js
│       └── sounds.js
├── images/
├── sounds/
├── index.html
├── server.js
├── package.json
└── README.md
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Maharshi-24/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Development

- The server uses Nodemon for automatic restarts on file changes
- Static files are served from the root directory
- GSAP and Lenis libraries are included locally in `node_modules`

## Deployment

This project can be deployed to any Node.js hosting platform:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Heroku**: Use the included `package.json` scripts
- **Netlify**: Deploy the static files (may need build configuration)

## Scripts

- `npm run dev` - Start development server with auto-reload
- `npm start` - Start production server

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Maharshi Desai** - Full Stack Developer
[LinkedIn](https://linkedin.com/in/maharshi-desai) | [GitHub](https://github.com/Maharshi-24) | [Portfolio](https://maharshi-desai.dev)