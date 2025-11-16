# 📄 Multi-Page Setup Guide

This guide explains how to add new pages to your MINDPLANE portfolio.

## 🏗️ Current Structure

```
Portfolio/
├── server.js              # Express server with routing
├── public/
│   ├── index.html         # Home page (current)
│   ├── pages/             # Future pages go here
│   │   └── .gitkeep
│   ├── css/               # Shared styles
│   ├── js/                # Shared scripts
│   └── assets/            # Shared assets
```

## 🚀 Adding a New Page

### Step 1: Create the HTML File

Create a new HTML file in `public/pages/`:

```bash
# Example: Create an About page
public/pages/about.html
```

### Step 2: Use the Template

Copy this template for your new page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About | Maharshi Desai</title>
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
  
  <!-- Stylesheets (adjust paths - go up one level) -->
  <link rel="stylesheet" href="../css/variables.css">
  <link rel="stylesheet" href="../css/style.css">
  
  <!-- GSAP & Lenis -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.19/bundled/lenis.min.js"></script>
</head>
<body>
  
  <!-- Navigation Bar (copy from index.html) -->
  <nav id="navbar" class="navbar">
    <div class="nav-container">
      <a href="/" class="nav-logo">
        <span class="logo-text">MINDPLANE</span>
      </a>
      
      <div class="nav-menu" id="nav-menu">
        <a href="/" class="nav-link">Home</a>
        <a href="/about" class="nav-link active">About</a>
        <a href="/#skills" class="nav-link">Skills</a>
        <a href="/#projects" class="nav-link">Projects</a>
        <a href="/#contact" class="nav-link">Contact</a>
      </div>
      
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">
        <span class="hamburger"></span>
        <span class="hamburger"></span>
        <span class="hamburger"></span>
      </button>
    </div>
  </nav>
  
  <!-- Your Page Content Here -->
  <section id="about-page" style="padding-top: 120px; min-height: 100vh;">
    <div class="container">
      <h1>About Me</h1>
      <p>Your content here...</p>
    </div>
  </section>
  
  <!-- Footer -->
  <footer>
    <div class="container">
      <p>&copy; 2025 Maharshi Desai. All rights reserved.</p>
    </div>
  </footer>

  <!-- Scripts (adjust paths) -->
  <script src="../js/scroll.js"></script>
  <script src="../js/animations.js"></script>
  <script src="../js/main.js"></script>
</body>
</html>
```

### Step 3: Add Route to Server

Edit `server.js` and add your route:

```javascript
// Add this before the catch-all route
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages', 'about.html'));
});
```

### Step 4: Update Navigation

Update the navbar in ALL pages to include the new link:

```html
<div class="nav-menu" id="nav-menu">
  <a href="/" class="nav-link">Home</a>
  <a href="/about" class="nav-link">About</a>
  <a href="/projects" class="nav-link">Projects</a>
  <a href="/#contact" class="nav-link">Contact</a>
</div>
```

### Step 5: Restart Server

```bash
# Stop the server (Ctrl+C)
# Start it again
npm start
```

## 📝 Example Pages You Can Add

### 1. Detailed About Page (`/about`)
- Extended bio
- Skills breakdown
- Education
- Certifications

### 2. Projects Gallery (`/projects`)
- Full project showcase
- Filters by technology
- Case studies
- GitHub links

### 3. Blog (`/blog`)
- Technical articles
- Tutorials
- Thoughts on development

### 4. Contact Page (`/contact`)
- Detailed contact form
- Social media links
- Location/availability

### 5. Resume/CV (`/resume`)
- Downloadable resume
- Interactive timeline
- Skills matrix

## 🎨 Page-Specific Styles

If a page needs unique styles, create a separate CSS file:

```css
/* public/css/about.css */
#about-page {
  /* Your custom styles */
}
```

Then link it in your HTML:
```html
<link rel="stylesheet" href="../css/about.css">
```

## 🎬 Page-Specific Animations

For custom animations on a specific page:

```javascript
// In your page HTML, add this before closing </body>
<script>
  // Custom animations for this page
  document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.about-content', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });
  });
</script>
```

## 🔗 Linking Between Pages

### Internal Links
```html
<!-- Link to another page -->
<a href="/about">About Me</a>

<!-- Link to section on home page -->
<a href="/#projects">View Projects</a>

<!-- Link to home -->
<a href="/">Home</a>
```

### Active Link Highlighting

The navbar automatically highlights the active page. Make sure to add the `active` class to the current page's nav link.

## 📱 Mobile Considerations

- All pages inherit the responsive navbar
- Test each page on mobile (375px, 768px, 1024px)
- Ensure touch interactions work
- Check scroll performance

## ⚡ Performance Tips

1. **Lazy Load Images**: Use loading="lazy" on images
2. **Code Splitting**: Only load page-specific JS when needed
3. **Shared Assets**: Keep common CSS/JS in main files
4. **Caching**: Browser will cache shared assets across pages

## 🚨 Common Issues

### Issue: Styles not loading
**Solution**: Check file paths - pages are one level deeper, so use `../css/` instead of `css/`

### Issue: Navigation not working
**Solution**: Make sure navbar JavaScript is included and IDs match

### Issue: Animations not triggering
**Solution**: Ensure GSAP and animation scripts are loaded

### Issue: 404 errors
**Solution**: Check that route is added to `server.js` and server is restarted

## 🎯 Best Practices

1. **Consistent Navigation**: Keep navbar identical across all pages
2. **Shared Styles**: Use the same design system (variables.css)
3. **SEO**: Add unique meta descriptions for each page
4. **Accessibility**: Maintain ARIA labels and semantic HTML
5. **Performance**: Keep pages lightweight and fast

## 📊 Example Multi-Page Structure

```
public/
├── index.html              # Home (/)
├── pages/
│   ├── about.html          # About (/about)
│   ├── projects.html       # Projects (/projects)
│   ├── blog.html           # Blog (/blog)
│   └── contact.html        # Contact (/contact)
├── css/
│   ├── variables.css       # Shared variables
│   ├── style.css           # Shared styles
│   ├── about.css           # About page styles
│   └── projects.css        # Projects page styles
└── js/
    ├── scroll.js           # Shared smooth scroll
    ├── animations.js       # Shared animations
    └── main.js             # Shared initialization
```

## 🔄 Converting to SPA (Optional)

If you want a true Single Page Application later:

1. Use a framework like React, Vue, or vanilla JS routing
2. Implement client-side routing
3. Load content dynamically
4. Update URL without page reload

For now, the multi-page approach is simpler and SEO-friendly!

---

**Need help?** Check the main README.md or create an issue.

