/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      swcPlugins: [
        ["fluentui-next-appdir-directive",{
           paths: [
            "@griffel",
            "@fluentui"
            // 👇 you can add another dependency that needs the directive
          ]
        }],
      ],
    },
  };
  
  module.exports = nextConfig;