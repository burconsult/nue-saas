export default {
  // Basic app configuration
  name: 'Nue SAAS Boilerplate',
  domain: 'localhost:8080',
  
  // Build settings
  build: {
    minify: true,
    cache: true,
    bundle: true
  },

  // Routing configuration
  routes: {
    // Public routes
    '/': 'index.htm',
    '/features': 'features.htm',
    '/pricing': 'pricing.htm',
    '/contact': 'contact.htm',
    '/docs': 'docs/index.htm',
    '/docs/*': 'docs/*.htm',
    
    // Auth routes
    '/login': 'auth/login.htm',
    '/signup': 'auth/signup.htm',
    '/forgot-password': 'auth/forgot-password.htm',
    '/reset-password': 'auth/reset-password.htm',
    
    // Protected app routes
    '/dashboard': 'app/dashboard.htm',
    '/dashboard/*': 'app/*.htm',
    '/settings': 'app/settings.htm',
    '/billing': 'app/billing.htm',
    '/profile': 'app/profile.htm',
    
    // Admin routes
    '/admin': 'admin/dashboard.htm',
    '/admin/*': 'admin/*.htm'
  },

  // Global data available to all pages
  globals: {
    title: 'Nue SAAS',
    description: 'Modern SAAS application built with Nue.js',
    company: 'Nue SAAS Inc.',
    year: new Date().getFullYear(),
    social: {
      twitter: '@nuesaas',
      github: 'nuejs/nue-saas',
      linkedin: 'company/nue-saas'
    }
  },

  // CSS processing
  css: {
    // Primary CSS (critical path - inlined)
    primary: ['base.css', 'layout.css', 'components.css', 'utilities.css'],
    // Secondary CSS (loaded after)
    secondary: ['features.css', 'animations.css']
  },

  // JavaScript modules
  js: {
    // Core app functionality
    core: ['auth.js', 'api.js', 'utils.js', 'theme-toggle.js'],
    // Page-specific scripts
    pages: {
      '/dashboard': ['dashboard.js', 'charts.js'],
      '/billing': ['billing.js', 'stripe.js'],
      '/admin': ['admin.js', 'analytics.js']
    }
  },

  // Security headers
  headers: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'"
  }
}