import HeadingContents from "../HeadingContents";
import TeacherCard from "./TeacherCard";

const Teachers = () => {
  return (
    <section className="block bg-green-50">
      <HeadingContents
        titleColor={`text-green-900`}
        descColor={`text-green-900`}
        solidColor="bg-green-600"
        titleText="Teachers"
        descText="Meet out the talented teachers of this years."
      />
      <div className="mt-5 grid grid-cols-2 gap-5 px-4 py-5 md:grid-cols-3 lg:grid-cols-4 lg:px-20">
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
      </div>
    </section>
  );
};

export default Teachers;
