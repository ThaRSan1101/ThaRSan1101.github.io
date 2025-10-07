#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

try {
  console.log('Starting Vite build...');
  
  // Use the local node_modules vite directly
  const viteBin = path.join(process.cwd(), 'node_modules', '.bin', 'vite');
  
  // Run vite build with explicit path
  execSync(`node ${path.join(process.cwd(), 'node_modules', 'vite', 'bin', 'vite.js')} build`, {
    stdio: 'inherit',
    cwd: process.cwd()
  });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}