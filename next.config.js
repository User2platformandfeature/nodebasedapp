const withSourceMaps = require("@zeit/next-source-maps");

module.exports = withSourceMaps({
  env: {
    HEROKU_SLUG_COMMIT: process.env.HEROKU_SLUG_COMMIT,
    NEXT_PUBLIC_APPSIGNAL_FRONTEND_KEY: "a75c6e73-340c-4342-a408-7249c262b469",
  },
});
