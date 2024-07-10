import HeadingContents from "../HeadingContents";
import ColorFullAccordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="bg-violet-50">
      {/* heading title and description */}
      <HeadingContents
        titleText="FAQ"
        descText="Learn more our basic information."
        titleColor="text-violet-900"
        descColor="text-violet-900"
        solidColor="bg-violet-600"
      />
      <div className="mx-auto w-[600px]">
        <ColorFullAccordion />
      </div>
    </div>
  );
};

export default FAQ;
