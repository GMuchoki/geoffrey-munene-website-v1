document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.theme-toggle');
  if (!toggleBtn) return; // guard clause if element doesn't exist
  const icon = toggleBtn.querySelector('i');

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
    icon.className = 'fa-solid fa-moon';
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    icon.className = isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});
