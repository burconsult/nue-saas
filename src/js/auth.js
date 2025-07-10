/**
 * Authentication Module
 * Handles user authentication, session management, and auth state
 */

class AuthManager {
  constructor() {
    this.user = null
    this.token = null
    this.isAuthenticated = false
    this.init()
  }

  /**
   * Initialize authentication
   */
  init() {
    this.loadFromStorage()
    this.updateAuthState()
    this.setupTokenRefresh()
  }

  /**
   * Load auth data from localStorage
   */
  loadFromStorage() {
    try {
      const token = localStorage.getItem('auth_token')
      const userData = localStorage.getItem('user_data')
      
      if (token && userData) {
        this.token = token
        this.user = JSON.parse(userData)
        this.isAuthenticated = true
      }
    } catch (error) {
      console.error('Error loading auth data:', error)
      this.clearAuth()
    }
  }

  /**
   * Save auth data to localStorage
   */
  saveToStorage() {
    if (this.token && this.user) {
      localStorage.setItem('auth_token', this.token)
      localStorage.setItem('user_data', JSON.stringify(this.user))
    }
  }

  /**
   * Clear all auth data
   */
  clearAuth() {
    this.user = null
    this.token = null
    this.isAuthenticated = false
    localStorage.removeItem('auth_token')
    localStorage.removeItem('user_data')
    this.updateAuthState()
  }

  /**
   * Login with email and password
   */
  async login(email, password, remember = false) {
    try {
      // Simulate API call - replace with actual endpoint
      const response = await this.makeAuthRequest('/api/auth/login', {
        email,
        password,
        remember
      })

      if (response.success) {
        this.token = response.token
        this.user = response.user
        this.isAuthenticated = true
        
        if (remember) {
          this.saveToStorage()
        }
        
        this.updateAuthState()
        return { success: true }
      } else {
        throw new Error(response.message || 'Login failed')
      }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: error.message }
    }
  }

  /**
   * Register new user
   */
  async register(userData) {
    try {
      const response = await this.makeAuthRequest('/api/auth/register', userData)

      if (response.success) {
        this.token = response.token
        this.user = response.user
        this.isAuthenticated = true
        this.saveToStorage()
        this.updateAuthState()
        return { success: true }
      } else {
        throw new Error(response.message || 'Registration failed')
      }
    } catch (error) {
      console.error('Registration error:', error)
      return { success: false, error: error.message }
    }
  }

  /**
   * Logout user
   */
  async logout() {
    try {
      // Notify server
      if (this.token) {
        await this.makeAuthRequest('/api/auth/logout', {}, 'POST')
      }
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      this.clearAuth()
      // Redirect to login
      window.location.href = '/login'
    }
  }

  /**
   * Refresh access token
   */
  async refreshToken() {
    try {
      const response = await this.makeAuthRequest('/api/auth/refresh', {})
      
      if (response.success) {
        this.token = response.token
        this.saveToStorage()
        return true
      } else {
        this.clearAuth()
        return false
      }
    } catch (error) {
      console.error('Token refresh error:', error)
      this.clearAuth()
      return false
    }
  }

  /**
   * Update UI based on auth state
   */
  updateAuthState() {
    // Update navigation
    const authActions = document.querySelectorAll('.auth-actions')
    const userMenus = document.querySelectorAll('.user-menu')
    
    authActions.forEach(el => {
      el.style.display = this.isAuthenticated ? 'none' : 'flex'
    })
    
    userMenus.forEach(el => {
      el.style.display = this.isAuthenticated ? 'block' : 'none'
    })

    // Update user data in UI
    if (this.isAuthenticated && this.user) {
      this.updateUserUI()
    }

    // Trigger custom event
    window.dispatchEvent(new CustomEvent('authStateChanged', {
      detail: { isAuthenticated: this.isAuthenticated, user: this.user }
    }))
  }

  /**
   * Update user information in UI
   */
  updateUserUI() {
    // Update user name displays
    document.querySelectorAll('[data-user-name]').forEach(el => {
      el.textContent = this.user.name || this.user.firstName + ' ' + this.user.lastName
    })

    // Update user email displays
    document.querySelectorAll('[data-user-email]').forEach(el => {
      el.textContent = this.user.email
    })

    // Update avatars
    document.querySelectorAll('[data-user-avatar]').forEach(el => {
      if (this.user.avatar) {
        el.src = this.user.avatar
      } else {
        // Show initials
        const initials = this.getInitials(this.user.name || this.user.firstName + ' ' + this.user.lastName)
        if (el.tagName === 'IMG') {
          el.style.display = 'none'
          el.nextElementSibling.textContent = initials
        } else {
          el.textContent = initials
        }
      }
    })
  }

  /**
   * Get user initials
   */
  getInitials(name) {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  /**
   * Setup automatic token refresh
   */
  setupTokenRefresh() {
    // Refresh token every 30 minutes
    setInterval(() => {
      if (this.isAuthenticated) {
        this.refreshToken()
      }
    }, 30 * 60 * 1000)
  }

  /**
   * Make authenticated API request
   */
  async makeAuthRequest(endpoint, data = {}, method = 'POST') {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: method !== 'GET' ? JSON.stringify(data) : undefined
    }

    if (this.token) {
      options.headers['Authorization'] = `Bearer ${this.token}`
    }

    // Simulate API response for demo
    return new Promise((resolve) => {
      setTimeout(() => {
        if (endpoint === '/api/auth/login') {
          if (data.email === 'demo@example.com' && data.password === 'password') {
            resolve({
              success: true,
              token: 'demo_token_' + Date.now(),
              user: {
                id: 1,
                name: 'John Doe',
                email: 'demo@example.com',
                role: 'user',
                plan: 'pro',
                avatar: null
              }
            })
          } else {
            resolve({ success: false, message: 'Invalid credentials' })
          }
        } else if (endpoint === '/api/auth/register') {
          resolve({
            success: true,
            token: 'demo_token_' + Date.now(),
            user: {
              id: Date.now(),
              name: data.firstName + ' ' + data.lastName,
              email: data.email,
              role: 'user',
              plan: 'starter',
              avatar: null
            }
          })
        } else {
          resolve({ success: true })
        }
      }, 1000)
    })
  }

  /**
   * Check if user has permission
   */
  hasPermission(permission) {
    if (!this.isAuthenticated || !this.user) return false
    
    // Admin has all permissions
    if (this.user.role === 'admin') return true
    
    // Add your permission logic here
    const permissions = {
      'create_project': ['user', 'admin'],
      'manage_team': ['admin'],
      'view_analytics': ['user', 'admin'],
      'manage_billing': ['admin']
    }
    
    return permissions[permission]?.includes(this.user.role) || false
  }

  /**
   * Redirect if not authenticated
   */
  requireAuth() {
    if (!this.isAuthenticated) {
      const currentPath = window.location.pathname
      window.location.href = `/login?redirect=${encodeURIComponent(currentPath)}`
      return false
    }
    return true
  }

  /**
   * Redirect if not admin
   */
  requireAdmin() {
    if (!this.requireAuth()) return false
    
    if (this.user.role !== 'admin') {
      window.location.href = '/dashboard'
      return false
    }
    return true
  }
}

// Initialize auth manager
const authManager = new AuthManager()

// Global auth functions
window.auth = {
  login: (email, password, remember) => authManager.login(email, password, remember),
  register: (userData) => authManager.register(userData),
  logout: () => authManager.logout(),
  isAuthenticated: () => authManager.isAuthenticated,
  getUser: () => authManager.user,
  hasPermission: (permission) => authManager.hasPermission(permission),
  requireAuth: () => authManager.requireAuth(),
  requireAdmin: () => authManager.requireAdmin()
}

// Auto-redirect logic for protected pages
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname
  
  // Protected routes
  const protectedRoutes = ['/dashboard', '/settings', '/billing', '/profile', '/projects', '/team']
  const adminRoutes = ['/admin']
  
  if (protectedRoutes.some(route => path.startsWith(route))) {
    authManager.requireAuth()
  }
  
  if (adminRoutes.some(route => path.startsWith(route))) {
    authManager.requireAdmin()
  }
  
  // Redirect authenticated users away from auth pages
  const authPages = ['/login', '/signup']
  if (authPages.includes(path) && authManager.isAuthenticated) {
    const urlParams = new URLSearchParams(window.location.search)
    const redirect = urlParams.get('redirect') || '/dashboard'
    window.location.href = redirect
  }
})