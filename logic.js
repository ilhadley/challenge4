// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleButton = document.getElementById('toggle');
const body = document.body;
const savedMode = localStorage.getItem('mode');

let mode = savedMode || 'light';

if (savedMode) {
  body.classList.add('mode');
  toggleButton.textContent = mode === 'light' ? '🌞' : '🌙';
} else if (savedMode) {
  toggleButton.textContent = mode === 'light' ? '🌞' : '🌙';
  body.classList.add('light');
}

toggleButton.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    body.classList.remove('light');
    body.classList.add('dark');
    toggleButton.textContent = '🌙';
    localStorage.setItem('mode', 'dark');
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
    toggleButton.textContent = '🌞'
    localStorage.setItem('mode', 'light');
  }
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

export function readLocalStorage() {
  const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
  if (!blogPosts) {
  blogPosts =[];
  }
  return posts;
}


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
export function storeLocalStorage(posts) {
  const posts = readLocalStorage();
  posts.push(post);
  localStorage.setItem('blogPosts', JSON.stringify(posts));
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

export const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
