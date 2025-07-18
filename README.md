# Personal Portfolio Website

This is a fully responsive personal portfolio website built with HTML, CSS, and JavaScript. It's designed to showcase projects, skills, and services in a clean, modern, and professional layout.

## Live Demo

[Link to your live portfolio] <!-- TODO: Add the live URL once deployed -->

## Features

- **Fully Responsive Design**: Looks great on all devices, from mobile phones to desktops.
- **Multi-Page Layout**: Includes separate sections for Home, About Me, Services, Projects, and Contact.
- **Interactive Homepage**: Features a dynamic typing effect to introduce yourself.
- **Smooth Scroll Animations**: Elements animate into view on scroll, powered by ScrollReveal.js.
- **Functional Contact Form**: Uses Formspree to forward contact form submissions directly to your email.
- **Modern UI/UX**: Dark theme with vibrant accent colors and a clean, user-friendly interface.
- **Font Awesome Icons**: Utilizes a wide range of icons to enhance visual appeal.

## Technologies Used

- **HTML5**: For the structure of the website.
- **CSS3**: For styling, including Flexbox, Grid, and CSS Variables for a maintainable and modern design.
- **JavaScript**: For DOM manipulation and interactive features like the typing animation and scroll effects.
- **Font Awesome**: For scalable vector icons.
- **ScrollReveal.js**: For easy-to-implement scroll animations.
- **Formspree**: For the contact form backend.

## Setup and Installation

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repository-name.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd your-repository-name
    ```
3.  **Open `index.html` in your browser** to view the website.

## Configuration

### Contact Form

To receive messages from the contact form, you need to configure the Formspree endpoint.

1.  Open the `contact.html` file.
2.  Find the `<form>` tag (around line 33).
3.  Replace the `action` URL `https://formspree.io/f/your-email@example.com` with your own Formspree endpoint URL.

### Customization

- **Text Content**: All text can be edited directly in the `.html` files (`index.html`, `about.html`, etc.).
- **Styling**: All styles, colors, and fonts can be customized in `css/style.css`. Key color variables are defined at the top of the file in the `:root` section.
- **Images**: Replace the images in the `images` folder with your own. Ensure the profile picture (`girl_picture.jpg`) and project images have the same filenames or update the paths in the HTML.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
