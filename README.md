# Navoiy Shahar 1-sonli IMI (navoiy1imi.uz)

Official website for **Navoiy shahar 1-sonli IMI** built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **React Router v7**.

## 🚀 Features & Faithfulness

- **1:1 Visual & Structural Similarity**:
  - Recreates the exact layout, section order, spacing, typography (`Rubik` for headings, `Karla` for body), and Astra/Beaver Builder styling.
  - Colors matching the live site (`#FB2056` primary accent, `#191919` dark footer, `#222222` dark text).
  - All original images and assets stored locally in `public/images/`.
- **Full Page Hierarchy**:
  - **Bosh sahifa (`/`)**: Hero banner with parallax background, President Shavkat Mirziyoyev quote section, featured news cards showcase, admission banner, and 2x2 course photo gallery with image lightbox.
  - **Biz haqimizda (`/biz-haqimizda`)**: Hero header, "Bizning maqsadimiz", "Biz bilan boshqacha", and educational directions.
  - **Yangiliklar (`/yangiliklar`)**: 3-column responsive news grid with all 10 articles from the reference website.
  - **Batafsil yangilik (`/yangiliklar/:slug`)**: Single news view with full article text, images, prev/next post navigation, and interactive comment form.
  - **Aloqa (`/aloqa`)**: Hero header, interactive contact form with instant validation & toast feedback, address, contact details, Telegram channel link, and map embed.
- **Legacy URL Compatibility**:
  - Automatically handles legacy WordPress queries (e.g. `/?page_id=5`, `/?page_id=566`, `/?page_id=8`, `/?news=slug`).
- **Mobile Responsive**:
  - Mobile hamburger drawer menu with smooth animations.
  - Responsive grids for mobile, tablet, and desktop viewports.
  - Back-to-top floating button.

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + Custom Theme Design System
- **Routing**: React Router DOM v7
- **Icons**: Lucide React
- **Build Tool**: Vite 8

## 💻 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```
