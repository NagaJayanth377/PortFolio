export function Navbar() {
    return `
        <header class="navbar">

            <div class="container nav-container">

                <a href="#home" class="logo">
                    <span class="logo-text">NJ</span>
                </a>

                <nav class="nav-menu">

                    <ul class="nav-links">

                        <li>
                            <a href="#home" class="nav-link active">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="#experience" class="nav-link">
                                Career
                            </a>
                        </li>

                        <li>
                            <a href="#philosophy" class="nav-link">
                                Philosophy
                            </a>
                        </li>

                        <li>
                            <a href="#skills" class="nav-link">
                                Expertise
                            </a>
                        </li>

                        <li>
                            <a href="#ai" class="nav-link">
                                AI
                            </a>
                        </li>
   <li>
                            <a href="#education" class="nav-link">
                                Education
                            </a>
                        </li>
                        <li>
                            <a href="#contact" class="nav-link">
                                Contact
                            </a>
                        </li>

                    </ul>

                </nav>

                <a
                    href="#contact"
                    class="nav-button">
                    Let's Talk
                </a>

                <button
                    class="menu-toggle"
                    aria-label="Open Menu">

                    <span></span>
                    <span></span>
                    <span></span>

                </button>

            </div>

        </header>
    `;
}