# responsive_webpage
HTML Structure:
The HTML includes a fixed navbar with a toggle button, a left menu, and a main content area. The left menu contains a list of items.

CSS Styles:
The CSS styles define the layout and appearance of the navbar, left menu, and main content. The left menu has a default width and transitions smoothly when toggled. The .collapsed class is used to hide the menu.The .container uses display: grid to define a two-column layout.
The main content area takes up the remaining space, while the right panel has a fixed width.
Media queries adjust the layout for smaller screens by changing the grid to a single column.

JavaScript Functionality:
The JavaScript code listens for a click event on the toggle button. When clicked, it toggles the .collapsed class on the left menu, allowing it to expand or collapse.

# Features
- Fixed navbar that stays at the top when scrolling.
- Three sections below the navbar: a left menu, a main content area, and a right panel.
- Collapsible left menu for smaller screens.
- Responsive layout with automatic scaling.

# Technologies Used
- HTML5
- CSS3
- JavaScript

# Setup and Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/satya-sahu27/responsive_webpage.git
   cd responsive_webpage
2. Open index.html in your browser to view the webpage.
    Responsive Behavior
    Shrinks to 90% for screens between 992px and 1600px.
    Shrinks to 80% for screens between 700px and 767px.
    Shrinks to 75% for screens between 600px and 700px.
    Shrinks to 50% for screens 600px or smaller.
