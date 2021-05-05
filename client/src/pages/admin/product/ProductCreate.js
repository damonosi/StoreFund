import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import { createProduct } from "../../../functions/product";

import AdminNav from "../../../components/nav/AdminNav";

const initialState = {
  title: "",
  description: "",
  price: "",
  categories: [],
  category: "",
  subs: [],
  shipping: "",
  quantity: "",
  images: [],
  brands: ["Miere", "Dulceata", "Sirop", "Uleiuri"],
  brand: "Miere",
};

const ProductCreate = () => {
  const [values, setValues] = useState(initialState);

  const {
    title,
    description,
    price,
    category,
    categories,
    subs,
    shipping,
    quantity,
    images,
    brands,
    brand,
  } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {};

  return (
    <div className="container-fluid">
      <div className="row">
        {" "}
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-10">
          <h4>Product Create</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                values={title}
                onChange={handleChange}
              />
            </div>
          </form>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Decription</label>
              <input
                type="text"
                name="description"
                className="form-control"
                values={description}
                onChange={handleChange}
              />
            </div>
          </form>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                name="price"
                className="form-control"
                values={price}
                onChange={handleChange}
              />
            </div>
          </form>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Shipping</label>
              <select
                name="shipping"
                className="form-control"
                onChange={handleChange}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          </form>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Quantity</label>
              <input
                type="number"
                name="quantity"
                className="form-control"
                values={quantity}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Brand</label>
              <select
                name="brand"
                className="form-control"
                onChange={handleChange}
              >
                <option>Please select</option>
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
            <button className="btn btn-outline-info">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
