/** @type {import('tailwindcss').Config} */
module.exports = {
  // Other configuration options...
  content: [
    './src/**/*.html',
    './src/**/*.js',
    // Add any additional paths containing your source files
    "./src/pages/**/*.js",
    "./src/components/**/*.js",
    "./src/layouts/**/*.js",
    "./templates/**/*.html",
    "./static/**/*.js",
  ],
}
