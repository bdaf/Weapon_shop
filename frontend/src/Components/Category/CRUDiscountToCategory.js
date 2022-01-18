import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import AddDiscountToCategory from "./AddDiscountToCategory";
import DeleteDiscountFromCategory from "./DeleteDiscountFromCategory";
import UpdateCategoryNameForm from "./UpdateCategoryNameForm";

function CRUDiscountToCategory(props) {
  const [allDiscountOptions, setAllDiscountOptions] = useState([]);
  const [discountOfCategoryOptions, setDiscountOfCategoryOptions] = useState([]);

  // GET ALL DISCOUNTS METHOD
  const fetchAllDiscountsData = async () => {
    await axios.get("http://localhost:80/api/discounts").then((response) => {
      console.log("fetchAllDiscountsData()");
      const discountOptions = response.data.map((d) => {
        const discountLabel =
          d.percent * 100 + "% - From: " + d.fromDate + ", To: " + d.toDate;
        return { value: d.discountId, label: discountLabel };
      });
      setAllDiscountOptions(discountOptions);
      console.log(discountOptions);
    });
  };

  // GET DISCOUNT FROM CATEGORY METHOD
  const fetchDiscountsOfSelectedCategory = async () => {
    await axios
      .get(`http://localhost:80/api/categories/${props.category.categoryId}`)
      .then((response) => {
        console.log("fetchDiscountsOfSelectedCategory()");
        const discountOptions = response.data.discounts.map((d) => {
          const discountLabel =
            d.percent * 100 + "% - From: " + d.fromDate + ", To: " + d.toDate;
          return { value: d.discountId, label: discountLabel };
        });
        setDiscountOfCategoryOptions(discountOptions);
        console.log(discountOptions);
      });
  };

  useEffect(() => {
    fetchAllDiscountsData();
    fetchDiscountsOfSelectedCategory();
  }, []);

  return (
    <div className="m-3">
      <h1>Details of category: {props.category.name}</h1>
      <UpdateCategoryNameForm category = {props.category} onUpdateCategory={props.onUpdateCategory}/>
      <AddDiscountToCategory category = {props.category} fetchDiscountsOfSelectedCategory={fetchDiscountsOfSelectedCategory} allDiscountOptions = {allDiscountOptions}/>
      <DeleteDiscountFromCategory  category = {props.category} fetchDiscountsOfSelectedCategory={fetchDiscountsOfSelectedCategory} discountOfCategoryOptions={discountOfCategoryOptions}/>
    </div>
  );
}

export default CRUDiscountToCategory;
