import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

export default [
  {
    id: "name",
    isPaddingDisabled: true,
    label: "Name",
    isSearchable: true,
  },
  {
    id: "username",
    isPaddingDisabled: true,
    label: "Username",
    isSearchable: true,
  },
  {
    id: "phone",
    isPaddingDisabled: false,
    label: "Phone",
    isSearchable: true,
    isNumeric: true,
  },
  {
    id: "website",
    isPaddingDisabled: true,
    label: "Website",
    transformContent: (website?: string) => {
      if (website) {
        return <a href={`http://${website}`}>{website}</a>;
      }

      return website;
    },
  },
  {
    id: "company",
    isPaddingDisabled: true,
    label: "Company",
    transformContent: (id: string, company?: Record<string, string>) => {
      if (company && company.name) {
        return company.name;
      }

      return "";
    },
    isSearchable: true,
  },
  {
    id: "menu",
    label: "",
    transformContent: () => <MenuIcon />,
  },
];
