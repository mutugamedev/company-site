import { Separator } from "./ui/separator";

const About = () => {
  return (
    <div className="text-center">
      <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl">
        About Us
      </h1>
      <div className="flex items-center justify-center">
        <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
      </div>
      <p className="mt-8 text-lg text-white font-medium">
        Studio Game SMK Muhammadiyah 1 Sukoharjo Established in 1992, Stratford
        Accounting is a full-service firm, offering affordable accounting
        solutions to individuals and local and international businesses
      </p>
    </div>
  );
};

export default About;
