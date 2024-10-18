/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  rewrites: async () => {
    const { nextI18NextRewrites } = await import("next-intl/plugin");
    return nextI18NextRewrites();
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// const { nextI18NextRewrites } = require("next-intl/plugin");

// module.exports = {
//   i18n: {
//     locales: ["en", "fr"],
//     defaultLocale: "en",
//   },
//   rewrites: async () => nextI18NextRewrites(),
// };
