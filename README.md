
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

> _Insert screenshot or link to live demo here_

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

*Thank you for checking out Fantastic Pictures Gallery!*
```

If you want, I can help generate the markdown file directly or include screenshots and badges too.
<span style="display:none">[^1][^2][^3][^4][^5][^6][^7][^8][^9]</span>

<div style="text-align: center">⁂</div>

[^1]: https://reactjsexample.com/an-application-that-takes-basic-information-about-the-users-project-as-an-input-and-generates-a-readme-md-file-which-the-user-can-upload-directly-in-t/

[^2]: https://dev.to/documatic/how-to-write-an-awesome-readme-cfl

[^3]: https://www.makeareadme.com

[^4]: https://github.com/evelinsteiger/README-template

[^5]: https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4

[^6]: https://www.reddit.com/r/reactjs/comments/cjimv5/excellent_readme_examples/

[^7]: https://gitlab.com/gitlab-org/project-templates/react/-/blob/main/README.md

[^8]: https://sourcegraph.com/github.com/facebook/create-react-app/-/blob/README.md

[^9]: https://readme.so
