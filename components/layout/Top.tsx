import contactInfo from "@/constants/top";
import Section from "./Section";

const Top = () => {
  return (
    <Section className="bg-color-1 w-full py-[5px]">
      <div className="flex flex-wrap justify-center p-[10px] md:justify-start">
        {contactInfo.map((info) => {
          return (
            <div key={info.id} className="flex items-center mx-[8px]">
              {info.icon}
              <span className="text-white pl-[5px] body-1">{info.label}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
export default Top;
