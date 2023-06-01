import React from "react";
import Data from "../../User.json";
import User from "./User"; // User.jsx
import "./ServiceProvider.css";
import ServiceProviderLastSection from "./ServiceProviderLastSection";

import ReactPaginate from "react-paginate";
const Shop = () => {
  const [pageNumber, setPageNumber] = React.useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = Data.slice(pagesVisited, pagesVisited + usersPerPage);
  const pageCount = Math.ceil(Data.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <div className="shop">
        <div className="shopTitle">
          <h1 className="SProvider__Heading">Our Service Providers</h1>
        </div>
        <div className="products">
          {displayUsers.map((product) => (
            <User data={product} key={product.id} />
          ))}
        </div>
        <div className="pagination">
          <ReactPaginate
            previousLabel={"<Previous"}
            nextLabel={"Next>"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
      <ServiceProviderLastSection />
    </>
  );
};

export default Shop;
