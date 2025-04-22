# NSS Recruitments Registration Form

This is a web-based registration form for **National Service Scheme (NSS)** recruitments, built using **React**, **Vite**, and **Tailwind CSS**. It features a responsive interface, client-side form validation, and is deployed on **Netlify**.

## Features

- Responsive design optimized for all devices with Tailwind CSS
- Client-side form validation in `src/utils/validation.js`
- Fast development with Vite's Hot Module Replacement (HMR)
- Continuous deployment via Netlify
- Code linting with ESLint

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript (ES Modules)
- Netlify
- GitHub

## Prerequisites

- Node.js (version 16 or higher): Download
- Git: Download

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Varshith271105/NSS_recruitments.git
   cd NSS_recruitments
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   Open `http://localhost:5173` in your browser.

4. Build for production:

   ```bash
   npm run build
   ```

   The output is in the `dist` folder.

## Project Structure

```plaintext
NSS_recruitments/
├── src/
│   ├── utils/
│   │   └── validation.js   # Form validation logic
│   ├── components/         # React components
│   ├── App.jsx             # Main component
│   └── main.jsx            # Entry point
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

## Usage

1. Access the deployed site or run locally with `npm run dev`.
2. Complete the NSS registration form and submit.

Report issues at GitHub Issues.
