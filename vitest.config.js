import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Use happy-dom for DOM testing (faster than jsdom)
    environment: 'happy-dom',

    // Enable global test APIs (describe, it, expect, etc.)
    globals: true,

    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      include: ['*.js', '!main.js'], // Exclude main.js initially, focus on modules
      exclude: [
        'node_modules/**',
        'vitest.config.js',
        '**/*.test.js',
        '**/*.spec.js'
      ]
    },

    // Watch mode excludes
    exclude: [
      'node_modules/**',
      'dist/**',
      '.git/**',
      'icons/**',
      'help/**'
    ]
  }
});