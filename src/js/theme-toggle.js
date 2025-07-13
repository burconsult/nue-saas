// Theme toggle functionality
// Following Nue.js minimalist principles

class ThemeToggle {
  constructor() {
    this.storageKey = 'theme-preference';
    this.theme = {
      value: this.getColorPreference(),
    };
    
    this.init();
  }
  
  init() {
    this.reflectPreference();
    this.bindEvents();
  }
  
  getColorPreference() {
    if (localStorage.getItem(this.storageKey)) {
      return localStorage.getItem(this.storageKey);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  
  reflectPreference() {
    document.documentElement.setAttribute('data-theme', this.theme.value);
    
    // Update toggle button icon
    const toggleBtn = document.querySelector('[data-theme-toggle]');
    if (toggleBtn) {
      this.updateToggleIcon(toggleBtn);
    }
  }
  
  updateToggleIcon(button) {
    const sunIcon = button.querySelector('.sun-icon');
    const moonIcon = button.querySelector('.moon-icon');
    
    if (this.theme.value === 'dark') {
      sunIcon?.classList.remove('hidden');
      moonIcon?.classList.add('hidden');
    } else {
      sunIcon?.classList.add('hidden');
      moonIcon?.classList.remove('hidden');
    }
  }
  
  setPreference() {
    localStorage.setItem(this.storageKey, this.theme.value);
    this.reflectPreference();
  }
  
  toggle() {
    this.theme.value = this.theme.value === 'light' ? 'dark' : 'light';
    this.setPreference();
  }
  
  bindEvents() {
    // Theme toggle button
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-theme-toggle]') || 
          e.target.closest('[data-theme-toggle]')) {
        this.toggle();
      }
    });
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', ({matches: isDark}) => {
        if (!localStorage.getItem(this.storageKey)) {
          this.theme.value = isDark ? 'dark' : 'light';
          this.reflectPreference();
        }
      });
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  new ThemeToggle();
});

// Export for module usage
export { ThemeToggle };