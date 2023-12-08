import React from "react";
import { Table } from "../../components/_admin";
import Add from "../../assets/add.svg";

const Listing = () => {
  return (
    <>
      <div className="flex justify-between items-center mx-4">
        <h2 className="text-3xl my-5">Listings</h2>
        <button className="bg-black p-2 px-3 text-lg text-white rounded-lg hover:bg-bodydark2">
          <span className="flex items-center gap-2">
            <img src={Add} alt="add-icon" className="h-3 w-4"/>
            New Book{" "}
          </span>
         
        </button>
      </div>
      <Table />
    </>
  );
};

export default Listing;
