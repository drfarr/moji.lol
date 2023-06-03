const withTM = require("next-transpile-modules")(["@esrevinu/ui", "@esrevinu/graphql"]);

module.exports = withTM({
  reactStrictMode: true,
});
