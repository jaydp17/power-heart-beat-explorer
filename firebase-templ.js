/**
 * Template used instead of firebase.json
 */
module.exports = options => ({
  hosting: {
    ...options.hosting,
    public: 'build',
    ignore: ['firebase.json', '**/.*', '**/node_modules/**'],
  },
});
