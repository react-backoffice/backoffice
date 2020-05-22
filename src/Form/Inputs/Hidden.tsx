import React, { FunctionComponent } from "react";

type Props = {
  id: string;
  value?: any;
};

const Hidden: FunctionComponent<Props> = ({ id, value }) => {
  return <input id={id} type="hidden" value={value} disabled />;
};

export default Hidden;
