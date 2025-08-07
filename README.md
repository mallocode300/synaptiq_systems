# Synaptiq - The Intelligence That Connects You to Tomorrow

A minimalist, modern website for Synaptiq, bridging strategy and technology through AI automation and consulting. Built with clean HTML, CSS, and JavaScript with a focus on performance and user experience, aligned with official brand guidelines.

## Design Philosophy

- **Minimalist Design**: Clean, uncluttered interface focusing on content
- **Color Scheme**: Black and white primary colors with electric blue (#035096) accents
- **Typography**: Montserrat for headlines, Lato for body text (per brand guidelines)
- **Responsive**: Fully responsive design that works on all devices

## Features

### Visual Design
- Modern minimalist aesthetic
- Animated neural network visualization
- Smooth scroll animations
- Hover effects and micro-interactions
- Professional color palette with strategic blue accents

### User Experience
- Responsive mobile-first design
- Smooth scrolling navigation
- Mobile hamburger menu
- Form validation and feedback
- Loading states and notifications
- **Bilingual support** (English/French) with automatic language detection

### Sections
1. **Hero Section**: Compelling introduction with animated neural network
2. **About Section**: Company overview with statistics
3. **Services Section**: Six core service offerings with icons
4. **Blog Section**: Links to Medium publication with topic tags and features
5. **Contact Section**: Contact form and company information
6. **Footer**: Simple footer with links

## Technical Implementation

### File Structure
```
synaptiq/
├── index.html          # Main HTML structure
├── style.css           # All CSS styling and animations
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations and responsive design
- **JavaScript (ES6+)**: Interactive functionality
- **Google Fonts**: Montserrat and Lato font families

### CSS Features
- CSS Grid and Flexbox for layout
- CSS animations and transitions
- CSS custom properties for maintainability
- Mobile-responsive media queries
- Advanced selectors and pseudo-elements

### JavaScript Features
- Intersection Observer API for scroll animations
- Form validation and submission handling
- Mobile navigation toggle
- Smooth scrolling
- Notification system
- Counter animations for statistics
- **Complete internationalization system** with localStorage persistence
- Automatic browser language detection
- Dynamic content switching without page reload

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Lightweight codebase with minimal dependencies
- Optimized animations using CSS transforms
- Intersection Observer for efficient scroll animations
- Semantic HTML for accessibility and SEO

## Getting Started

1. **Clone or download** the project files
2. **Open `index.html`** in a modern web browser
3. **For development**, use a local server (e.g., Live Server in VS Code)

### Local Development
```bash
# If you have Python installed
python -m http.server 8000

# If you have Node.js installed
npx http-server

# Then visit http://localhost:8000
```

## Customization

### Colors
The main colors are defined in CSS variables for easy customization:
- Primary Blue: `#035096`
- Black: `#000`
- White: `#fff`
- Gray variants for text and borders

### Content
All content can be easily modified:
- **Bilingual content**: Update translations in `script.js` within the `translations` object
- Company information in the About section
- Service descriptions and icons
- Blog section Medium link (update `href="https://medium.com/@your-medium-username"`)
- Contact information
- Statistics and metrics

### Language System
The website supports English and French with:
- **Automatic detection**: Uses browser language preference on first visit
- **User preference**: Remembers selected language in localStorage
- **Easy expansion**: Add more languages by extending the `translations` object
- **Complete coverage**: All text content, form placeholders, and notifications are translated

### Styling
The CSS is organized in logical sections:
- Reset and base styles
- Typography
- Components (buttons, forms, etc.)
- Layout sections
- Responsive design

## Deployment

This is a static website that can be deployed to any web hosting service:

- **GitHub Pages**: Push to a GitHub repository and enable Pages
- **Netlify**: Drag and drop the files to Netlify
- **Vercel**: Import the project from Git
- **Traditional hosting**: Upload files via FTP

## Future Enhancements

Potential improvements for future versions:
- Blog section for thought leadership content
- Case studies and portfolio showcase
- Team member profiles
- Advanced analytics integration
- Performance monitoring
- SEO optimization with meta tags
- Accessibility improvements (ARIA labels, etc.)

## License

This project is open source and available under the MIT License.

## Contact

For questions about this website or Synaptiq's services:
- Email: hello@synaptiq.ai
- Phone: +1 (555) 123-4567

---

*Built with ❤️ for the future of AI automation* 