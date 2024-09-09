import { ReactNode } from "react";

type IHeaderSectionProps = {
  className?: string;
  children: ReactNode;
};

const HeaderSection = (props: IHeaderSectionProps) => {
  return <h2 className={`h2 h2-bold ${props.className}`}>{props.children}</h2>;
};
export default HeaderSection;
