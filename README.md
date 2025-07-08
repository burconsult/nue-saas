# Nue.js SAAS Boilerplate 🚀

A complete, production-ready SAAS boilerplate built with [Nue.js](https://nuejs.org) - the standards-first web framework. Get your SAAS application up and running in minutes, not months.

![Nue SAAS Boilerplate](https://img.shields.io/badge/Nue.js-SAAS%20Boilerplate-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0.0-purple?style=for-the-badge)

## ✨ Features

### 🔐 **Authentication & User Management**
- **Complete Auth System**: Login, signup, password reset, email verification
- **Social Authentication**: Google and GitHub OAuth integration
- **Session Management**: Secure token-based authentication with auto-refresh
- **Role-Based Access Control**: User, admin, and custom role permissions
- **User Profiles**: Comprehensive user profile management

### 💳 **Billing & Subscriptions**
- **Stripe Integration**: Ready-to-use payment processing
- **Multiple Plans**: Starter, Pro, and Enterprise tiers
- **Usage Tracking**: Monitor API calls, storage, and team members
- **Subscription Management**: Upgrade, downgrade, and cancellation flows
- **Invoice Management**: Automated billing and receipt generation

### 📊 **Dashboard & Analytics**
- **Modern Dashboard**: Beautiful, responsive admin interface
- **Real-time Analytics**: User engagement and usage metrics
- **Interactive Charts**: Data visualization with Chart.js integration
- **Activity Feeds**: Recent activities and system notifications
- **Usage Monitoring**: Track limits and quotas

### 🏗️ **Application Architecture**
- **Component-Based**: Reusable UI components with Nue.js
- **Responsive Design**: Mobile-first, adaptive layouts
- **Performance Optimized**: Lightning-fast load times with progressive enhancement
- **SEO Ready**: Proper meta tags, structured data, and sitemap
- **Accessibility**: WCAG 2.1 AA compliant interfaces

### 🛠️ **Developer Experience**
- **Modern CSS**: Custom properties, Grid, Flexbox, and modern techniques
- **Design System**: Consistent colors, typography, and spacing scales
- **Hot Reloading**: Universal hot-reloading for rapid development
- **TypeScript Ready**: Full TypeScript support for enhanced development
- **API Integration**: RESTful API with authentication and rate limiting

## 🚀 Quick Start

### Prerequisites

- **Bun** 1.0+ (recommended) or **Node.js** 18+
- **Git** for version control

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/nue-saas-boilerplate.git
   cd nue-saas-boilerplate
   ```

2. **Install dependencies:**
   ```bash
   # Using Bun (recommended)
   bun install

   # Or using npm
   npm install
   ```

3. **Install Nue globally:**
   ```bash
   bun install nuekit --global
   # or
   npm install nuekit --global
   ```

4. **Start development server:**
   ```bash
   nue serve --dev
   # or
   npm run dev
   ```

5. **Open your browser:**
   Visit `http://localhost:8080` to see your SAAS application

### Demo Credentials

For testing the authentication system:
- **Email**: `demo@example.com`
- **Password**: `password`

## 📁 Project Structure

```
nue-saas-boilerplate/
├── src/
│   ├── css/
│   │   ├── base.css          # CSS reset and design system
│   │   ├── layout.css        # Layout utilities and grid
│   │   ├── components.css    # UI component styles
│   │   ├── features.css      # Feature-specific styles
│   │   └── animations.css    # Animations and transitions
│   ├── js/
│   │   ├── auth.js          # Authentication module
│   │   ├── api.js           # API client and utilities
│   │   ├── utils.js         # General utilities
│   │   └── dashboard.js     # Dashboard-specific logic
│   ├── layouts/
│   │   ├── main.htm         # Main site layout
│   │   └── dashboard.htm    # Dashboard layout
│   ├── components/
│   │   ├── header.nue       # Site header component
│   │   ├── footer.nue       # Site footer component
│   │   └── ui/              # Reusable UI components
│   ├── pages/
│   │   ├── index.htm        # Landing page
│   │   ├── auth/            # Authentication pages
│   │   │   ├── login.htm
│   │   │   ├── signup.htm
│   │   │   └── forgot-password.htm
│   │   ├── app/             # Dashboard pages
│   │   │   ├── dashboard.htm
│   │   │   ├── settings.htm
│   │   │   ├── billing.htm
│   │   │   └── profile.htm
│   │   └── docs/            # Documentation pages
│   └── assets/
│       ├── images/          # Image assets
│       └── icons/           # Icon assets
├── public/                  # Static assets
├── nue.config.js           # Nue configuration
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🎨 Design System

### Color Palette

Our design system uses OKLCH color space for perceptually uniform colors:

```css
/* Primary Colors */
--primary-500: oklch(0.55 0.20 280);
--primary-600: oklch(0.45 0.25 280);

/* Neutral Colors */
--neutral-0: oklch(1.00 0.00 0);
--neutral-900: oklch(0.15 0.00 0);

/* Semantic Colors */
--success-500: oklch(0.65 0.15 145);
--warning-500: oklch(0.75 0.15 85);
--error-500: oklch(0.60 0.20 25);
```

### Typography Scale

Based on the Perfect Fifth (1.5) ratio for harmonious typography:

```css
--font-size-xs: clamp(0.64rem, 0.61rem + 0.15vw, 0.75rem);
--font-size-sm: clamp(0.8rem, 0.73rem + 0.35vw, 1rem);
--font-size-base: clamp(1rem, 0.87rem + 0.65vw, 1.33rem);
--font-size-lg: clamp(1.25rem, 1.03rem + 1.1vw, 1.78rem);
```

### Spacing System

Consistent spacing using the Perfect Fifth scale:

```css
--space-xs: clamp(0.31rem, 0.29rem + 0.1vw, 0.38rem);
--space-sm: clamp(0.63rem, 0.58rem + 0.25vw, 0.81rem);
--space-md: clamp(1.25rem, 1.16rem + 0.45vw, 1.56rem);
--space-lg: clamp(2.5rem, 2.32rem + 0.9vw, 3.13rem);
```

## 🏗️ Architecture

### Nue.js Framework

This boilerplate leverages Nue.js's standards-first approach:

- **HTML-first**: Semantic HTML as the foundation
- **Progressive Enhancement**: Works without JavaScript, enhanced with it
- **Separation of Concerns**: Clean separation of content, styling, and behavior
- **Web Standards**: Built on modern web standards for longevity

### Component Architecture

```html
<!-- Example Nue component -->
<div @name="card" class="card">
  <div class="card-header" :if="title">
    <h3 class="card-title">{title}</h3>
  </div>
  <div class="card-body">
    {children}
  </div>
</div>
```

### State Management

Simple, reactive state management without complex frameworks:

```javascript
// Reactive state
const state = {
  user: null,
  isLoading: false,
  notifications: []
}

// State updates trigger UI re-renders
function updateUser(newUser) {
  state.user = newUser
  renderUserInterface()
}
```

## 🔒 Authentication

### Setup

The authentication system supports multiple providers:

1. **Email/Password**: Traditional authentication
2. **Social Login**: Google and GitHub OAuth
3. **Magic Links**: Passwordless authentication (coming soon)

### Usage

```javascript
// Login user
const result = await auth.login('user@example.com', 'password')
if (result.success) {
  window.location.href = '/dashboard'
}

// Register user
const userData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  password: 'securepassword'
}
await auth.register(userData)

// Check authentication
if (auth.isAuthenticated()) {
  // User is logged in
  const user = auth.getUser()
}

// Logout
auth.logout() // Redirects to login page
```

### Protected Routes

Routes are automatically protected based on authentication status:

```javascript
// Protected routes
const protectedRoutes = ['/dashboard', '/settings', '/billing']
const adminRoutes = ['/admin']

// Automatic redirection for unauthenticated users
if (protectedRoutes.includes(currentPath)) {
  auth.requireAuth()
}
```

## 💳 Billing Integration

### Stripe Setup

1. **Create Stripe Account**: Sign up at [stripe.com](https://stripe.com)

2. **Get API Keys**: 
   ```bash
   # Add to your environment variables
   STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   ```

3. **Configure Webhooks**: Set up webhooks for subscription events

### Subscription Plans

```javascript
const plans = {
  starter: {
    priceId: 'price_starter',
    name: 'Starter',
    price: 29,
    features: ['Up to 1,000 users', 'Basic authentication', 'Email support']
  },
  pro: {
    priceId: 'price_pro', 
    name: 'Pro',
    price: 79,
    features: ['Up to 10,000 users', 'Advanced features', 'Priority support']
  }
}
```

## 📊 Analytics & Monitoring

### Built-in Analytics

- **User Engagement**: Track user actions and page views
- **Performance Metrics**: Monitor page load times and user experience
- **Usage Analytics**: Track feature usage and adoption
- **Error Monitoring**: Capture and track application errors

### Integration Options

- **Google Analytics**: Web analytics and user behavior
- **Mixpanel**: Advanced event tracking and user analytics
- **Sentry**: Error monitoring and performance tracking
- **PostHog**: Open-source product analytics

## 🔧 Configuration

### Environment Variables

Create a `.env` file in your project root:

```bash
# App Configuration
NODE_ENV=development
APP_URL=http://localhost:8080
APP_NAME="Nue SAAS"

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/nue_saas

# Authentication
JWT_SECRET=your_jwt_secret_here
SESSION_SECRET=your_session_secret_here

# Stripe
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Email (SendGrid, Mailgun, etc.)
EMAIL_FROM=noreply@yourdomain.com
SENDGRID_API_KEY=your_sendgrid_key
```

### Nue Configuration

Customize your application in `nue.config.js`:

```javascript
export default {
  name: 'Your SAAS App',
  domain: 'yourdomain.com',
  
  // Build settings
  build: {
    minify: true,
    cache: true,
    bundle: true
  },

  // Global data
  globals: {
    title: 'Your SAAS',
    description: 'Amazing SAAS application',
    company: 'Your Company Inc.'
  }
}
```

## 🚀 Deployment

### Build for Production

```bash
# Build optimized version
nue build --production

# Check bundle sizes
nue stats
```

### Deployment Options

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify
```bash
# Build command
nue build --production

# Publish directory
dist/
```

#### Traditional Hosting
Upload the contents of the `dist/` folder to your web server.

### Performance Optimization

- **Critical CSS**: Automatically inlined for faster initial render
- **Progressive Enhancement**: Works without JavaScript
- **Image Optimization**: WebP and modern formats
- **Gzip Compression**: Automatic compression for smaller file sizes

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure

```
tests/
├── unit/           # Unit tests
├── integration/    # Integration tests
├── e2e/           # End-to-end tests
└── fixtures/      # Test data
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [Full Documentation](./docs)
- **Discord**: [Join our Discord](https://discord.gg/nue)
- **GitHub Issues**: [Report bugs or request features](https://github.com/yourusername/nue-saas-boilerplate/issues)
- **Email**: support@yourdomain.com

## 🙏 Acknowledgments

- [Nue.js Team](https://nuejs.org) for creating an amazing framework
- [Stripe](https://stripe.com) for payment processing
- [Heroicons](https://heroicons.com) for beautiful icons
- [Inter Font](https://rsms.me/inter/) for typography

## 🗺️ Roadmap

- [ ] **Mobile App Support**: React Native boilerplate
- [ ] **Multi-tenancy**: Support for multiple organizations
- [ ] **Advanced Analytics**: Custom analytics dashboard
- [ ] **Internationalization**: Multi-language support
- [ ] **API Documentation**: Auto-generated API docs
- [ ] **Plugin System**: Extensible plugin architecture

---

Built with ❤️ using [Nue.js](https://nuejs.org) - The standards-first web framework

**[⭐ Star this repository](https://github.com/yourusername/nue-saas-boilerplate) if you find it helpful!**
