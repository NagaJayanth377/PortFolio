import { Navbar } from "../components/navbar.js";
import { Hero } from "../components/hero.js";
import { Metrics } from "../components/metrics.js";
import { Experience } from "../components/experience.js";
import { initializeAnimations } from "./observer.js";
import { initializeCounters } from "./utils.js";
import {
    initializeNavbar,
    initializeActiveLinks,
    initializeExperience
} from "./utils.js";
import { Philosophy } from "../components/philosophy.js";
import {AI} from "../components/ai.js";
import {Toolbox} from "../components/skills.js";
import { Education } from "../components/education.js";
import {Contact} from "../components/contact.js";
const app = document.querySelector("#app");

app.innerHTML = `

${Navbar()}

<main>

${Hero()}
${Metrics()}
${Experience()}
${Philosophy()}
${Toolbox()}
${AI()}
${Education()}
${Contact()}
</main>

`;

initializeNavbar();

initializeActiveLinks();

initializeAnimations();

initializeCounters();

initializeExperience();

Philosophy();
AI();
Toolbox();
Education();
Contact();