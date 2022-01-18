import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CRUDiscountToCategory from "./CRUDiscountToCategory";

function CategoryDetails() {
  const params = useParams();

  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCategory = async () => {
    await axios
      .get(`http://localhost:80/api/categories/${params.id}`)
      .then((response) => {
        setCategory(response.data);
        setLoading(true);
      });
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  if (!loading) return null;

  return (
    <div>
      {/* <h1>Details of category: {category.name}</h1> */}
      <CRUDiscountToCategory category={category} onUpdateCategory={fetchCategory}/>
    </div>
  );
}

export default CategoryDetails;
