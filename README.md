# 🖼️ Fantastic Pictures Gallery

A React-based web app to generate and display a dynamic gallery of random images fetched from the Picsum Photos API. The app lets users specify how many images to load and showcases them in a clean gallery layout with a simple Navbar, smooth animations, and a footer.

---

## 📜 Table of Contents

- [✨ Features](#features)
- [🎥 Demo](#demo)
- [💻 Technologies](#technologies)
- [📂 Project Structure](#project-structure)
- [🚀 Installation](#installation)
- [💡 Usage](#usage)
- [🤝 Contributing](#contributing)
- [📄 License](#license)
- [✍️ Author](#author)

---

## ✨ Features

- 🖼️ User input for number of images to fetch (limit)
- 🌐 Fetches images from a public free Picsum Photos API
- 🎨 Displays images in a responsive gallery layout
- 🪄 Stagger animation for photo cards appearing one by one.
- ⏳ Improved image loading with a loader for each photo.
- ✨ **Interactive Input**: The input field for selecting the number of images is now more interactive with hover effects, focus styling, and a disabled state for the decrement button when the count is at its minimum.
-  navbar Simple Navbar with a FontAwesome camera icon and project title
- 🦶 Footer with social media links (Instagram, GitHub, Portfolio).
- ⚛️ Built with React functional components and hooks
- 💅 Styled using Tailwind CSS
-  axios Axios used for handling API requests

---

## 🎥 Demo

 [Chhobighor](https://chhobighor.netlify.app/)

---

## 💻 Technologies

- React 18+
- Axios
- Framer Motion for animations
- FontAwesome (free icon set)
- Tailwind CSS
- Vite (build tool)

---

## 📂 Project Structure

```
/
├── public/                      # Static assets like index.html, favicon, etc.
│
├── src/
│   ├── assets/                  # Images, fonts, icons
│   │
│   ├── components/              # Reusable components
│   │   ├── Generate/            # Components for the generate section
│   │   │   ├── Button.jsx
│   │   │   ├── Generate.jsx
│   │   │   └── Input.jsx
│   │   ├── Home/                # Components for the home page
│   │   │   ├── Background.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Home.jsx
│   │   │   └── Navbar.jsx
│   │   ├── Loaders/             # Loader components
│   │   │   ├── Loader.jsx
│   │   │   └── PicLoader.jsx
│   │   └── other/               # Other components
│   │       ├── Greet.jsx
│   │       └── PhotoCard.jsx
│   │
│   ├── hooks/                   # Custom hooks
│   │   └── useAxios.jsx
│   │
│   ├── App.jsx                  # Root app component
│   ├── main.jsx                 # App entry point
│   └── index.css                # Global styles
│
├── eslint.config.js             # ESLint configuration
├── vite.config.js               # Vite build configuration
├── package.json                 # Dependencies and scripts
├── README.md                    # Project documentation
└── .gitignore                   # Files/folders to ignore in git
```

---

## 🚀 Installation

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

---

## 💡 Usage

Start the development server:

```

npm run dev

```

Open your browser at the shown address (usually `http://localhost:3000`).

- Enter the desired number of images in the input box.
- Click "Generate" to fetch and display images.
- Enjoy browsing random pictures in the gallery with a smooth stagger animation.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- 🐛 Open issues for bugs or feature requests
- 🍴 Fork the repo and submit pull requests
- 🤔 Suggest improvements or enhancements

Please ensure your code follows the existing style and passes any relevant tests.

---

## 📄 License

This project is released under the MIT License.

---

## 📫 Contact

For questions, feel free to reach out.

---

## ✍️ Author

- **Adrishikhar Chowdhury** - [https://github.com/AdrishikharChowdhury](https://github.com/AdrishikharChowdhury)

---
