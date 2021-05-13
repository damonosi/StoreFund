import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import { getProduct } from "../../../functions/product";
import { getCategories, getCategorySubs } from "../../../functions/category";

import AdminNav from "../../../components/nav/AdminNav";
import FileUpload from "../../../components/forms/FileUpload";

import ProductUpdateForm from "../../../components/forms/ProductUpdateForm";

import { LoadingOutlined } from "@ant-design/icons";

const initialState = {
  title: "",
  description: "",
  price: "",
  category: "",
  subs: [],
  shipping: "",
  quantity: "",
  images: [],
  brands: ["Miere", "Dulceata", "Sirop", "Uleiuri"],
  brand: "",
};

const ProductUpdate = ({ match }) => {
  const [values, setValues] = useState(initialState);
  const [categories, setCategories] = useState([]);
  const [subOptions, setSubOptions] = useState([]);
  const [arrayOfSubs, setArrayOfSubs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const { user } = useSelector((state) => ({ ...state }));

  const { slug } = match.params;

  useEffect(() => {
    loadProduct();
    loadCategories();
  }, []);

  const loadProduct = () => {
    getProduct(slug).then((p) => {
      //   console.log("single product", p);
      setValues({ ...values, ...p.data });
      getCategorySubs(p.data.category._id).then((res) => {
        setSubOptions(res.data);
      });
      let arr = [];
      p.data.subs.map((s) => {
        arr.push(s._id);
      });
      console.log("Arr", arr);
      setArrayOfSubs((prev) => arr);
    });
  };

  const loadCategories = () =>
    getCategories().then((c) => setCategories(c.data));

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, "-----", e.target.value);
  };

  const handleCategoryChange = (e) => {
    e.preventDefault();
    console.log("CLICKED CATEGORY", e.target.value);
    setValues({ ...values, subs: [] });

    setSelectedCategory(e.target.value);

    getCategorySubs(e.target.value).then((res) => {
      console.log("SUB OPTIONS ON CATEGORY CLICK", res);
      setSubOptions(res.data);
    });

    if (values.category._id === e.target.value) {
      loadProduct();
    }
    setArrayOfSubs([]);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {" "}
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-10">
          <h4>Product Update</h4>

          <ProductUpdateForm
            values={values}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setValues={setValues}
            handleCategoryChange={handleCategoryChange}
            categories={categories}
            subOptions={subOptions}
            arrayOfSubs={arrayOfSubs}
            setArrayOfSubs={setArrayOfSubs}
            selectedCategory={selectedCategory}
            // showSub={showSub}
          />
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;
