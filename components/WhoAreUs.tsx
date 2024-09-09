import infos from "@/constants/whoAreUs";
import { Button } from "./ui/button";
import Link from "next/link";
import Section from "./layout/Section";

const WhoAreUs = () => {
  return (
    <Section className="bg-color-1 flex flex-col gap-8 border-t-8 border-color-3 pb-9 pt-4 lg:flex-row lg:pb-12">
      {infos.map((info: any) => {
        return (
          <div
            className="bg-color-2 p-[30px] rounded-[20px] flex flex-col justify-center items-start gap-6 border-b-4 border-color-3 lg:w-[50%]"
            key={info.id}
          >
            <h4 className="h3 text-left">{info.title}</h4>
            <p className="leading-[1.8em]">{info.paragraph}</p>
            {info.btnText && (
              <Button>
                <Link className="font-bold" href={info.btnURL}>
                  {info.btnText}
                </Link>
              </Button>
            )}
          </div>
        );
      })}
    </Section>
  );
};
export default WhoAreUs;
