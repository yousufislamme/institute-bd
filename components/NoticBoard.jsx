
const NoticBoard = () => {
  return (
    <div className="bg-yellow-200 w-[700px] mx-auto my-5 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 ">Notice Board</h2>
      <ul className="space-y-2">
        <li className="flex items-center">
          <div className="text-gray-700">
            <strong>Important:</strong> The school will be closed on Monday, May 27, 2024 due to a holiday.
          </div>
        </li>
        <li className="flex items-center">
          <div className="text-gray-700">
            <strong>Reminder:</strong> Please submit your assignments on time.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NoticBoard;