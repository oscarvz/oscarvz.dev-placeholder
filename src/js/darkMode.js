// This dark mode implementation checks system-level preference, sets a new preference after
// toggling and removes the saved preference in case of a changed/dynamic system-level setting
const { matches: prefersDark } = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');
const button = document.querySelector('.theme-toggle');

const newPreference = prefersDark ? 'light' : 'dark';

const toggleBodyClass = (preference) => document.body.classList.toggle(`theme-${preference}`);
const saveToLocalStorage = (preference) => window.localStorage.setItem('theme', preference);
const removeFromLocalStorage = () => window.localStorage.removeItem('theme');

const toggleMode = () => {
  toggleBodyClass(newPreference);

  if (document.body.classList.contains(`theme-${newPreference}`)) saveToLocalStorage(newPreference);
  else removeFromLocalStorage();
};

button.addEventListener('click', toggleMode);

if ((currentTheme === 'dark' && prefersDark) || (currentTheme === 'light' && !prefersDark)) {
  removeFromLocalStorage();
} else if (currentTheme) {
  toggleBodyClass(currentTheme);
}
