import Book from "../../../../assets/book0.svg";
const CardBooks = () => {
  return (
    <div className="rounded-lg border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
       
        <img src={Book} alt="book" className="h-7 w-8" />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            2300
          </h4>
          <span className="text-sm font-medium">Total Books</span>
        </div>
      </div>
    </div>
  );
};

export default CardBooks;
