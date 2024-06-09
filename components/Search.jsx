import { IoIosSearch } from "react-icons/io";

const Search = ({ className, onClick, value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="Search student with ID"
        onClick={onClick}
        onChange={onChange}
        className={`${className} relative inline-block rounded-lg px-3 py-1 outline-none`}
      />
      <IoIosSearch className="absolute right-[28rem] top-[95px] inline-block text-lg" />
    </div>
  );
};

export default Search;
