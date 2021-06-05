/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Nikokin's Dev Site",
  tagline: "Dinosaurs are cool",
  url: "https://nikok.in",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "nik0kin", // Usually your GitHub org/user name.
  projectName: "nik0kin.github.io", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Nikokin's Dev Site",
      // logo: {
      //   alt: "My Site Logo",
      //   src: "img/logo.svg",
      // },
      items: [
        { to: "/matrix", label: "Matrix", position: "left" },
        {
          href: "https://github.com/nik0kin",
          label: "GitHub",
          position: "right",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/nik0kin/nik0kin.github.io/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
