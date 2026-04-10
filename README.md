# Risal Labs

Welcome to the official repository for **Risal Labs**, a premium full-stack web application designed with an emphasis on modern architecture, SEO optimization, and a sleek, developer-centric dark mode UI.

## 🚀 Features

*   **Dark Mode IDE Aesthetic**: Custom styled with neon/synthwave accents (Purple, Gold, Cyan) utilizing `Fira Code` for a premium tech feel.
*   **Dynamic Landing Page**:
    *   Floating interactive Bash Terminal.
    *   Dual-pane code architecture showcase highlighting Python & JavaScript/Node environments.
    *   Subtle "matrix-style" background code reveals on hover states.
*   **SEO Optimized**: Fully integrated with semantic HTML5, localized Schema.org data, and structured Open Graph tags.
*   **Serverless Contact Integration**: Live contact form submission handling effortlessly handled via [Web3Forms](https://web3forms.com/).

## 💻 Tech Stack

*   **Frontend**: HTML5, Vanilla JS, Modular CSS (CSS Variables, Flexbox, CSS Grid).
*   **Backend**: Node.js, Express.js.
*   **Deployment**: Ready for static or Node environment hosting.

## ⚙️ Quick Start

### Prerequisites
*   [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <your-repo-url>
   cd Risal Site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   *(Ensure you have express installed, or any other dependencies listed in package.json)*

3. **Configure Environment**:
   * If using the Web3Forms integration, replace the `access_key` in `public/index.html` with your actual Web3Forms key.

### Running Locally

To run the application locally for development:

```bash
# Run with nodemon for automatic restarts upon file changes
npx nodemon server.js

# Or standard Node execution
node server.js
```

The server will initialize and be accessible at: `http://localhost:3000`

## 📁 Project Structure

```text
├── public/
│   ├── css/
│   |   └── style.css       # Core styling & IDE aesthetics
│   ├── images/
│   |   └── logo.png        # Branding assets
│   ├── js/
│   |   └── main.js         # Client-side scripts
│   ├── index.html          # Main application landing page
│   └── sitemap.xml         # SEO sitemap
├── server.js               # Node.js Express server entry point
└── README.md
```

## 📜 License

© 2026 Risal Labs. All rights reserved.
