import { ReactNode, Children, ReactElement } from "react";

type EachProps = {
  render: (item: ReactNode, index: number) => ReactElement;
  of: ReactNode[];
};

export const Each = ({ render, of }: EachProps) =>
  Children.toArray(of).map((item, index) => render(item, index));
