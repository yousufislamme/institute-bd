const TeacherCard = ({ item }) => {
  const { teacherName, teacherBody } = item;

  return (
    <>
      <div className="h-[300px] rounded-sm border-2">
        <div className="flex h-[200px] items-center justify-center bg-slate-600 object-cover">
          <img src="https://images.pexels.com/photos/63238/pexels-photo-63238.jpeg" />
        </div>
        <div className="px-2 py-1">
          <h2 className="text-lg font-semibold">{teacherName}</h2>
          <hr />
          <p className="text-sm">{teacherBody}</p>
        </div>
      </div>
    </>
  );
};

export default TeacherCard;
