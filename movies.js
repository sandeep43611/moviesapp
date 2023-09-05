// Create the menu bar
const menuBar = document.createElement('div');
menuBar.classList.add('menu-bar');
menuBar.id = 'menu-bar';

const ul = document.createElement('ul');

// Create Home link
const homeLi = document.createElement('li');
const homeLink = document.createElement('a');
homeLink.href = './home.html';
homeLink.id = 'home-link';
homeLink.textContent = 'Home';
homeLi.appendChild(homeLink);
ul.appendChild(homeLi);

// Create Movies link
const moviesLi = document.createElement('li');
const moviesLink = document.createElement('a');
moviesLink.href = '/';
moviesLink.id = 'movies-link';
moviesLink.textContent = 'Movies';
moviesLi.appendChild(moviesLink);
ul.appendChild(moviesLi);

// Create Web Shows link
const webshowLi = document.createElement('li');
const webshowLink = document.createElement('a');
webshowLink.href = '/wabshow.html';
webshowLink.id = 'webshow-link';
webshowLink.textContent = 'Web Shows';
webshowLi.appendChild(webshowLink);
ul.appendChild(webshowLi);

// Create the search input and button
const searchLi = document.createElement('li');
searchLi.classList.add('search');

const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.id = 'search-input';
searchInput.placeholder = 'Search...';

const searchButton = document.createElement('button');
searchButton.id = 'search-button';
searchButton.textContent = 'Search';

searchLi.appendChild(searchInput);
searchLi.appendChild(searchButton);

ul.appendChild(searchLi);

menuBar.appendChild(ul);

// Add the menu bar to the document
document.body.appendChild(menuBar);
