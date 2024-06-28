const HeadingContents = ({
  titleColor,
  descColor,
  solidColor,
  titleText,
  descText,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2
        className={`pt-4 text-2xl ${titleColor} flex flex-col items-start justify-end font-bold uppercase`}
      >
        {titleText}
        <span className={`inline-block h-1 w-10 ${solidColor}`}></span>
      </h2>
      <p className={`mt-2 max-w-[400px] ${descColor} text-center`}>
        {descText}
      </p>
    </div>
  );
};

export default HeadingContents;
