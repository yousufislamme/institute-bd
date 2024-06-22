const Search = ({ className, onClick, value, onChange }) => {
  return (
    <div className="flex">
      <input
        type="text"
        value={value}
        placeholder="Search student with ID"
        onClick={onClick}
        onChange={onChange}
        className={`${className} inline-block w-[350px] rounded-lg px-3 py-1 outline-none lg:w-[500px]`}
      />
      {/* <IoIosSearch /> */}
    </div>
  );
};

export default Search;
