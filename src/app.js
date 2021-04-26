import 'regenerator-runtime';
import 'bootstrap';

import './assets/scss/styles.scss';

import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';

import './assets/js/components/app-bar.js';
import './assets/js/components/jumbotron.js';
import './assets/js/components/search-bar.js';
import './assets/js/components/recipe-list.js';

import main from './assets/js/view/main.js';

document.addEventListener("DOMContentLoaded", main);