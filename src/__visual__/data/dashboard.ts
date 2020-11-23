export default {
  title: "Dashboard Component",
  description: "Component to show content for dashboards",
  groups: [
    {
      id: "components",
      title: "Dashboard Cards",
      cards: [
        {
          id: "list",
          title: "Lists",
          description: "Have a look at list implementations",
          link: "/list",
        },
        {
          id: "forms",
          title: "Forms",
          description: "Have a look at form implementations",
          link: "/form",
        },
        {
          id: "card-2",
          title: "Disabled Card",
          description: "Manage this card’s page",
          link: "/some-link",
          icon: null,
          isDisabled: true,
        },
      ],
    },
  ],
};
