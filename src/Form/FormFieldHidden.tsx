import React from "react";

type FormFieldHiddenProps = {
  id: string;
  value?: string | any[] | number;
};

const FormFieldHidden: React.SFC<FormFieldHiddenProps> = ({ id, value }) => (
  <input id={id} type="hidden" value={value} disabled />
);

FormFieldHidden.defaultProps = {
  value: "",
};

export default FormFieldHidden;
