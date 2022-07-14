/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    {
      type: "autogenerated",
      dirName: ".",
    },
  ],

  contributionSidebar: [
    {
      type: "category",
      label: "Contribution",
      link: {
        type: "generated-index",
        title: "Contribution Guides",
        description:
          "Learn how to be a part of us! Contribute to polyphy using these guides.",
        keywords: ["contribution"],
      },
      items: [
        "contribution/open-an-issue",
        "contribution/make-a-pull-request",
        "contribution/pull-request-template",
      ],
    },
  ],

  tutorialSidebar: [
    {
      type: "doc",
      label: "Intro",
      id: "intro",
    },
    {
      type: "category",
      label: "Tutorial",
      items: [
        "tutorial-basics/congratulations",
        "tutorial-basics/create-a-blog-post",
        "tutorial-extras/manage-docs-versions",
      ],
    },
  ],
};

module.exports = sidebars;
