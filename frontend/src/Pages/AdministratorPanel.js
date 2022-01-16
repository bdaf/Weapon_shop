import NewCategoryForm from "../Components/Category/NewCategoryForm";
import { useState, useEffect } from "react";
import CategoriesList from "../Components/Category/CategoriesList";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:80/api/categories",
});

function AdministratorPanel() {
  async function addCategoryHandler(categoryData) {
    // http POST method
    const res = api
      .post("/", { name: categoryData.name })
      .then(function (response) {
        // get result data from http method
        const resultData = response.data;
        // check if there isn't one with same name
        const theSameCategory = loadedCategories.find(
          (cat) => cat.name == resultData.name
        );
        // adding locally category to site if condition above
        if (theSameCategory == null) {
          setLoadedCategories((prev) => [...prev, resultData]);
        }
      });
  }

  const [isLoading, setIsLoading] = useState(true);
  const [loadedCategories, setLoadedCategories] = useState([]);

  useEffect(() => {
    api.get("/").then(function (response) {
      setIsLoading(false);
      setLoadedCategories(response.data);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
      <div>
          <br></br>
      <h4>Add New Category:</h4>
      <NewCategoryForm onAddCategory={addCategoryHandler} />
      <CategoriesList categories={loadedCategories} />
    </div>
  );
}

export default AdministratorPanel;
