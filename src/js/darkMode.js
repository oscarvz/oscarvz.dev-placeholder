const { matches: prefersDark } = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');
const button = document.querySelector('.theme-toggle');

const newPreference = prefersDark ? 'light' : 'dark';

const removeLocalStorage = () => window.localStorage.removeItem('theme');
const saveToLocalStorage = (preference) => window.localStorage.setItem('theme', preference);
const toggleBodyClass = (preference) => document.body.classList.toggle(`theme-${preference}`);

const toggleMode = () => {
  toggleBodyClass(newPreference);

  if (document.body.classList.contains(`theme-${newPreference}`)) saveToLocalStorage(newPreference);
  else removeLocalStorage();
};

button.addEventListener('click', toggleMode);

if (currentTheme === 'dark') prefersDark ? removeLocalStorage() : toggleBodyClass('dark');
if (currentTheme === 'light') !prefersDark ? removeLocalStorage() : toggleBodyClass('light');
