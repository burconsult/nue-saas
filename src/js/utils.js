// Utilities and helpers
// Following Nue.js minimalist principles

// Authentication status placeholder
const user = null; // This would be populated from actual auth system

// Basic utility functions
const utils = {
  // Toggle mobile menu
  toggleMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileNav) {
      mobileNav.classList.toggle('open');
    }
  },

  // Toggle user menu
  toggleUserMenu() {
    const userMenu = document.querySelector('.user-menu .dropdown-menu');
    if (userMenu) {
      userMenu.classList.toggle('open');
    }
  },

  // Close dropdowns when clicking outside
  handleOutsideClick(event) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(event.target)) {
        const menu = dropdown.querySelector('.dropdown-menu');
        if (menu) {
          menu.classList.remove('open');
        }
      }
    });
  },

  // Smooth scroll to anchor links
  handleAnchorLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  },

  // Initialize all utilities
  init() {
    // Handle mobile menu toggle
    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-mobile-menu-toggle]')) {
        this.toggleMobileMenu();
      }
      
      if (e.target.closest('[data-user-menu-toggle]')) {
        this.toggleUserMenu();
      }
    });

    // Handle outside clicks
    document.addEventListener('click', this.handleOutsideClick);

    // Handle anchor links
    this.handleAnchorLinks();

    // Show/hide auth elements based on user status
    this.updateAuthElements();
  },

  // Update auth elements visibility
  updateAuthElements() {
    const authActions = document.querySelectorAll('.auth-actions');
    const userMenus = document.querySelectorAll('.user-menu');

    if (user) {
      authActions.forEach(el => el.classList.add('hidden'));
      userMenus.forEach(el => el.classList.remove('hidden'));
    } else {
      authActions.forEach(el => el.classList.remove('hidden'));
      userMenus.forEach(el => el.classList.add('hidden'));
    }
  }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  utils.init();
});

// Export for global use
window.utils = utils;
window.user = user;