import React, { Fragment } from "react";

import Icon from "@material-ui/icons/Visibility";
import { Divider, Typography } from "@material-ui/core";

import { TYPES, WIDTH } from "../../Form/constants";
import { FormField } from "../../Form";

const form: FormField[] = [
  {
    group: true,
    title: "Form",
    id: "base",
    data: [
      {
        id: "text",
        title: "Text Field",
        type: TYPES.TEXT,
        width: "small",
        isRequired: true,
      },
      {
        id: "select",
        title: "Select",
        type: TYPES.SELECT,
        options: ["Foo", "Bar", "Baz"],
        width: "small",
        isRequired: true,
      },
      {
        id: "number",
        title: "Number",
        type: TYPES.NUMBER,
        value: 10,
        width: "small",
        isRequired: true,
      },
      {
        id: "multiline",
        title: "Multiline",
        type: "multiline",
        rows: 5,
      },
      {
        id: "nested",
        group: true,
        title: "Nested Form",
        integrated: true,
        isVisible: true,
        data: [
          {
            id: "nested-text",
            title: "Nested Text",
            type: TYPES.TEXT,
            iconEnd: <Icon />,
            width: "mid",
          },
          {
            id: "empty",
            type: TYPES.EMPTY,
            width: "mid",
          },
        ],
      },
      {
        id: "content",
        type: TYPES.CONTENT,
        content: (
          <Fragment>
            <Typography variant="h5">Content</Typography>
            <Divider />
          </Fragment>
        ),
      },
      {
        id: "email",
        title: "Email",
        type: TYPES.EMAIL,
        width: "mid",
        beforeSubmit: (url?: string) => {
          if (url) {
            return `${url}#top`;
          }

          return url;
        },
      },
      {
        id: "password",
        title: "Password",
        type: TYPES.PASSWORD,
        width: "mid",
      },
      {
        id: "url",
        title: "URL",
        type: TYPES.URL,
        width: "mid",
        helperText: "Should be URL with trailing slash",
        validators: [
          {
            validator: (value?: string) => value && value.substr(-1, 1) === "/",
            message: "Please add a trailing slash to your URL",
          },
        ],
      },
      {
        id: "empty",
        type: TYPES.EMAIL,
        width: "mid",
      },
    ],
  },
  {
    group: true,
    title: "Form - Date",
    id: "date",
    data: [
      {
        id: "date",
        title: "Date",
        type: TYPES.DATE,
        format: "DD.MM.YYYY",
        value: 1514989682669,
        width: "small",
        validators: ["date"],
      },
      {
        id: "time",
        title: "Time",
        type: TYPES.TIME,
        format: "hh:mm a",
        value: 1514989682669,
        width: "small",
        validators: ["date"],
      },
      {
        id: "datetime",
        title: "Datetime",
        type: TYPES.DATETIME,
        format: "DD.MM.YYYY, hh:mm a",
        value: 1514989682669,
        width: "small",
        validators: ["date"],
      },
    ],
  },
  {
    group: true,
    title: "Form - Disabled fields",
    id: "disabled",
    data: [
      {
        id: "disabled",
        title: "Disabled Text",
        type: TYPES.TEXT,
        width: "mid",
        isDisabled: true,
      },
      {
        id: "disabled-select",
        title: "Disabled Select",
        type: TYPES.SELECT,
        width: "mid",
        options: ["Foo", "Bar", "Baz"],
        isDisabled: true,
      },
    ],
  },
  {
    group: true,
    title: "Form - Switches, Radio Buttons and Checkboxes",
    id: "switches",
    data: [
      {
        id: "switch",
        title: "Switch",
        type: TYPES.SWITCH,
        helperText: "Display Helper Text",
        width: WIDTH.SMALL,
      },
      {
        id: "switch",
        title: "Switch - Prefilld",
        type: TYPES.SWITCH,
        value: true,
        width: WIDTH.SMALL,
      },
      {
        id: "switch-1",
        title: "Switch - Disabled",
        type: TYPES.SWITCH,
        isDisabled: true,
        width: WIDTH.SMALL,
      },
    ],
  },
];

export default form;
