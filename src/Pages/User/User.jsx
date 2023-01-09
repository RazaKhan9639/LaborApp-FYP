import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import "./ServiceProvider.css";

const Product = (props) => {
  const navigate = useNavigate();
  const {
    id,
    name,
    image,
    amount,
    ServiceName,
    Contact,
    Experience,
    city,
    rating,
    discount,
  } = props.data;
  const { addToCart, cartItem } = useContext(UserContext);
  const cartItemAmount = cartItem[id];
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row justify-content-center mb-3">
          <div className="col-md-12 col-xl-10">
            <div className="card shadow-0 border rounded-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    <div className="bg-image hover-zoom ripple rounded ripple-surface">
                      <Link to="#!">
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(253, 253, 253, 0.15)",
                            }}
                          />
                          <img
                            src={image}
                            className="w-100"
                            alt="ServiceProviderImage"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6">
                    <h5>{name}</h5>
                    <div className="d-flex flex-row">
                      <div className="text-danger mb-1 me-2">{rating}</div>
                      <span>(310 Reviews)</span>
                    </div>
                    <div className="mt-1 mb-0 text-muted small">
                      <span>
                        {" "}
                        <span style={{ color: "#ac2132", fontWeight: "bold" }}>
                          Contact:
                        </span>{" "}
                        {Contact}
                        <br />
                      </span>

                      <span>
                        {" "}
                        <span style={{ color: "#ac2132", fontWeight: "bold" }}>
                          Experience:
                        </span>{" "}
                        {Experience} Y
                        <br />
                      </span>

                      <span>
                        {" "}
                        <span style={{ color: "#ac2132", fontWeight: "bold" }}>
                          Location:
                        </span>{" "}
                        {city}
                        <br />
                      </span>

                      <span>
                        {" "}
                        <span style={{ color: "#ac2132", fontWeight: "bold" }}>
                          Service:
                        </span>{" "}
                        {ServiceName}
                        <br />
                      </span>
                      <span>
                        {" "}
                        <span style={{ color: "#ac2132", fontWeight: "bold" }}>
                          Total Time:
                        </span>{" "}
                        1 H
                        <br />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div className="d-flex flex-row align-items-center mb-1">
                      <h4 className="mb-1 me-1"> Rs:{amount}</h4>
                      <span className="text-danger">
                        <s>Rs:{discount}</s>
                      </span>
                    </div>
                    <h6 className="text-success">Good Service</h6>
                    <div className="d-flex flex-column mt-4">
                      <button
                        className="btn btn-primary btn-sm "
                        id="cart_btn"
                        type="button"
                        onClick={() => addToCart(id)}
                      >
                        Add{cartItemAmount > 0 && <>({cartItemAmount})</>}
                      </button>
                      <button
                        className="btn  btn-sm mt-2 "
                        type="button"
                        id="Order_btn"
                        onClick={() => navigate("/cart")}
                      >
                        View Your Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
