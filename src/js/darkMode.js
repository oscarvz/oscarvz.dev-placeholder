const { matches: prefersDark } = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');
const button = document.querySelector('.theme-toggle');

const selectedPreference = prefersDark ? 'light' : 'dark';

const removeLocalStorage = () => window.localStorage.removeItem('theme');

const toggleBodyClass = (preference) => document.body.classList.toggle(`theme-${preference}`);

const toggleMode = () => {
  toggleBodyClass(selectedPreference);

  if (document.body.classList.contains(`theme-${selectedPreference}`)) {
    window.localStorage.setItem('theme', selectedPreference);
  } else {
    removeLocalStorage();
  }
};

button.addEventListener('click', toggleMode);

if (currentTheme === 'dark') prefersDark ? removeLocalStorage() : toggleBodyClass('dark');
if (currentTheme === 'light') !prefersDark ? removeLocalStorage() : toggleBodyClass('light');
