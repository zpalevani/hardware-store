# Hardware Store Website Walkthrough

## Project Overview
This is a modern hardware store website built with Next.js and Tailwind CSS. It features a responsive design, product listings, individual product details, and informational pages.

## Features
- **Homepage**: Hero section, featured products, and "Why Choose Us" section.
- **Product Pages**: Dynamic routing for individual products with large images and specifications.
- **About Page**: Company story, values, and team information.
- **Contact Page**: Functional contact form (UI only) and location information.
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop.
- **Custom Styling**: Premium dark theme with orange accents using Tailwind CSS.

## Project Structure
- `/app`: Main application code (pages, layout, globals.css).
- `/components`: Reusable components (Navbar, Footer, ProductCard).
- `/data`: Mock product data.
- `/public`: Static assets.

## Getting Started

### Prerequisites
- Node.js installed
- npm or yarn

### Installation
1. Navigate to the project directory:
   ```bash
   cd hardware-store
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization
- **Colors**: Edit `app/globals.css` to change the color variables.
- **Products**: Modify `data/products.js` to add or update products.
- **Images**: The project uses Unsplash images. You can replace them with your own in the product data or page components.

## Technologies Used
- Next.js 15 (App Router)
- Tailwind CSS
- React
- Lucide React (Icons)
