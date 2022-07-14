// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Polyphy",
        logo: {
          alt: "Polyphy Logo",
          src: "img/logo192.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            type: "doc",
            docId: "/category/contribution",
            position: "left",
            label: "Contribution",
          },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            items: [
              {
                html: `
                <h1>POLYPHORM</h1>
              `,
              },
            ],
          },
          {
            items: [
              {
                html: `
                <div class="footer-column">
            <h2>Quick Links</h2>
            <p>About</p>
            <p>Documenation</p>
            <p>References</p>
          </div>
              `,
              },
            ],
          },
          {
            items: [
              {
                html: `
                <div class="footer-column">
            <h2>Contribution</h2>
            <p>All Issues</p>
            <p>Open an Issue</p>
            <p>Pull Request</p>
          </div>
              `,
              },
            ],
          },
          {
            items: [
              {
                html: `
                <div class="footer-column">
            <h2>Community</h2>
            <p>GitHub</p>
            <p>Slack Channel</p>
            <p>Discussions</p>
          </div>
              `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PolyPhy, Center of Research for Open Source Software`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
