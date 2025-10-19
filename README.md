# Planora - Sri Lankan Travel Companion

A modern, responsive web application designed to revolutionize travel planning for Sri Lanka using AI-powered features, real-time alerts, and immersive experiences.

## Overview

Planora is an intelligent travel planning platform that combines cutting-edge AI technology with deep knowledge of Sri Lanka's unique destinations, culture, and climate. Whether you're exploring ancient temples, pristine beaches, or lush tea plantations, Planora creates personalized itineraries tailored to your preferences.

## Features

### Core Travel Features
- **Trip Planning Wizard** - Create custom itineraries with guided recommendations
- **AI-Generated Itineraries** - Day-by-day plans optimized for your interests
- **Daily View** - Real-time scheduling and activity management
- **Local Living Feed** - Discover authentic local experiences
- **Memory Journal** - Auto-organized photo gallery with location tags

### Sri Lanka-Specific Features
- **Voice Navigation** - Hands-free navigation without needing to look at your phone
- **Energy Tracking** - Biometric forecasting to manage fatigue in tropical heat
- **Offline Mode** - Full access to maps and guides in remote areas
- **Climate & Monsoon Alerts** - Intelligent weather planning
- **Poya Day Calendar** - Cultural observance dates and local celebrations
- **Safety & Eco Alerts** - Real-time updates on conditions and environmental impact
- **AR Memory Anchors** - Immersive 3D memories tied to GPS locations

## Tech Stack

- **Frontend Framework**: React 18+
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## Project Structure

\`\`\`
Planora-web/
├── my-app/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── Dalada.jpg          (Dalada Temple)
│   │   │   ├── galle.jpg           (Galle Fort)
│   │   │   ├── Sigiriya.jpeg       (Sigiriya Rock)
│   │   │   ├── Polonnaruwa.jpg     (Polonnaruwa)
│   │   │   └── pidurangala.jpg     (Pidurangala)
│   │   ├── App.jsx                 (Main component)
│   │   ├── App.css                 (Component styles)
│   │   ├── index.css               (Global styles)
│   │   └── main.jsx                (Entry point)
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
\`\`\`

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
\`\`\`bash
git clone https://github.com/yourusername/Planora-web.git
cd Planora-web/my-app
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
\`\`\`

3. **Run the development server**
\`\`\`bash
npm run dev
\`\`\`

4. **Open in browser**
Navigate to \`http://localhost:5173\`

## Usage

### Navigation
- Use the top navigation bar to access different sections
- Mobile menu available on smaller screens
- Smooth scrolling between sections

### Viewing Tourist Destinations
The hero section displays beautiful images of Sri Lanka's iconic destinations:
- Dalada Temple (Kandy)
- Galle Fort (Southern Coast)
- Sigiriya Rock (Central Province)
- Polonnaruwa (Ancient City)
- Pidurangala (Scenic Rock Formation)

## Responsive Design

Planora is fully responsive and optimized for all devices:

- **Mobile** (0-640px): Optimized touch experience, stacked layouts
- **Tablet** (640px-1024px): Balanced layouts with adequate spacing
- **Desktop** (1024px+): Full feature experience with side-by-side layouts

## Color Scheme

- **Primary**: #102550 (Deep Navy Blue)
- **Background**: #F2F2F2 (Light Gray)
- **Accents**: Orange, Purple, Pink gradients
- **Text**: Dark Gray (#1F2937) on light backgrounds

## Components

### Hero Section
Large landing section with call-to-action buttons and featured destination images arranged in a clean gallery layout.

### Models Section
Showcases AI-powered features with interactive chat interface simulation and knowledge agent demonstration.

### Embed Section
Highlights AR Spatial Memory Anchors for immersive travel memories.

### Retrieval Section
Real-time destination alerts and safety/sustainability information.

### Advanced Retrieval
Developer-focused section for building with Planora's AI platform.

### Footer
Newsletter signup, comprehensive link navigation, and company information.

## Customization

### Changing Images
Update the image imports in \`App.jsx\`:
\`\`\`javascript
import dalada from './assets/Dalada.jpg';
import galle from './assets/galle.jpg';
// ... etc
\`\`\`

### Modifying Colors
Edit the inline \`style\` props or update Tailwind color utilities:
\`\`\`javascript
style={{ backgroundColor: '#102550' }}  // Change primary color
\`\`\`

### Updating Content
Text content is editable throughout the component. Search for specific text strings to modify headings, descriptions, and call-to-action buttons.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Lazy-loaded images with object-fit for efficient rendering
- CSS animations with GPU acceleration
- Responsive image sizes to minimize bandwidth
- Optimized Tailwind CSS for production builds

## Development Commands

\`\`\`bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
\`\`\`

## File Size Considerations

When adding images:
- Recommended image size: 600x600px (min)
- Supported formats: JPG, PNG, JPEG
- Use image optimization tools for web delivery

## Accessibility

- Semantic HTML structure
- Proper alt text for all images
- Keyboard navigation support
- Color contrast ratios meet WCAG standards
- Responsive tap targets for mobile

## Future Enhancements

- Integration with real travel booking APIs
- User authentication and profiles
- Real-time pricing and availability
- AI chatbot for personalized recommendations
- Advanced filtering and search capabilities
- Multi-language support
- Payment integration

## Contributing

Contributions are welcome! Please follow these guidelines:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see LICENSE file for details.

## Support

For issues, questions, or feature requests:
- Create an issue on GitHub
- Contact: support@planora.com
- Documentation: [Add docs link]

## Acknowledgments

- Built with React and Tailwind CSS
- Icons by Lucide React
- Inspired by modern travel platforms
- Dedicated to promoting sustainable tourism in Sri Lanka

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Maintainer**: Planora Team
\`\`\`

Copy this entire code block and paste it into a file named `README.md` in your GitHub repository root directory. GitHub will automatically format and display it correctly with all the headings, bold text, code blocks, and formatting!
