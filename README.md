
# Fantastic Pictures Gallery

A React-based web app to generate and display a dynamic gallery of random images fetched from the Picsum Photos API. The app lets users specify how many images to load and showcases them in a clean gallery layout with a simple Navbar.

---

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- User input for number of images to fetch (limit)
- Fetches images from a public free Picsum Photos API
- Displays images in a responsive gallery layout
- Simple Navbar with a FontAwesome camera icon and project title
- Built with React functional components and hooks
- Styled using Tailwind CSS
- Axios used for handling API requests

---

## Demo

 [Chhobighor]{}

---

## Technologies

- React 18+
- Axios
- FontAwesome (free icon set)
- Tailwind CSS
- Vite (build tool)

---

## Project Structure

```

my-react-app/
│
├── public/                      \# Static assets like index.html, favicon, etc.
│
├── src/
│   ├── assets/                  \# Images, fonts, icons (if any)
│   │
│   ├── components/              \# Reusable components
│   │   ├── Navbar.jsx           \# Navbar with FontAwesome icon
│   │   └── Gallery.jsx          \# Gallery displaying images
│   │
│   ├── services/                \# API calls (optional organization)
│   │
│   ├── styles/                  \# Tailwind or global styles
│   │
│   ├── App.jsx                  \# Root app component: state, logic, fetch
│   ├── main.jsx                 \# App entry and ReactDOM.render
│   └── index.css                \# Global styles and Tailwind imports
│
├── tailwind.config.js           \# Tailwind CSS configuration
├── vite.config.js               \# Vite build configuration
├── package.json                \# Dependencies and scripts
├── README.md                   \# Project documentation (this file)
└── .gitignore                  \# Files/folders to ignore in git

```

---

## Installation

1. Clone the repo:

```

git clone https://github.com/AdrishikharChowdhury/Fantastic-Gallery.git

```

2. Navigate into the project folder:

```

cd fantastic-pictures-gallery

```

3. Install dependencies:

```

npm install

```

Make sure to install FontAwesome free packages if not already installed:

```

npm install @fortawesome/fontawesome-svg-core @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

```

---

## Usage

Start the development server:

```

npm run dev

```

Open your browser at the shown address (usually `http://localhost:3000`).

- Enter the desired number of images in the input box.
- Click "Generate" to fetch and display images.
- Enjoy browsing random pictures in the gallery.

---

## Contributing

Contributions are welcome! Feel free to:

- Open issues for bugs or feature requests
- Fork the repo and submit pull requests
- Suggest improvements or enhancements

Please ensure your code follows the existing style and passes any relevant tests.

---

## License

This project is released under the MIT License.

---

## Contact

For questions, feel free to reach out.

---
