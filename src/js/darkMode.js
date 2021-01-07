const { matches: prefersDark } = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');
const button = document.querySelector('.theme-toggle');

const selectedPreference = prefersDark ? 'light' : 'dark';

const removeLocalStorage = () => window.localStorage.removeItem('theme');

const toggleMode = () => {
  document.body.classList.toggle(`theme-${selectedPreference}`);

  if (document.body.classList.contains(`theme-${selectedPreference}`)) {
    window.localStorage.setItem('theme', selectedPreference);
  } else {
    removeLocalStorage();
  }
};

button.addEventListener('click', toggleMode);

if (currentTheme === 'dark') {
  prefersDark ? removeLocalStorage() : document.body.classList.toggle('theme-dark');
}

if (currentTheme === 'light') {
  !prefersDark ? removeLocalStorage() : document.body.classList.toggle('theme-light');
}
