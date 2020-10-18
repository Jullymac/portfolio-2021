const withPlugins = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");
const nextEnv = require("next-env");
const dotenv = require("dotenv");

dotenv.config();

module.exports = withPlugins([nextEnv({}), [withOptimizedImages]]);
