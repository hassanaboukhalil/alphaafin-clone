import { ReactNode } from "react";

type ISectionProps = {
  className?: string;
  id?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => {
  return (
    <section className={`my-container ${props.className}`} id={props.id}>
      {props.children}
    </section>
  );
};
export default Section;
