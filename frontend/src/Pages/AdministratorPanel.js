import NewCategoryForm from "../Components/Navbar/Category/NewCategoryForm";
import { useState, useEffect } from 'react'; 
import CategoriesList from "../Components/Navbar/Category/CategoriesList";
import axios from 'axios';

const api  = axios.create({
    baseURL: 'http://localhost:80/api/categories'
})

function AdministratorPanel(){
    async function addCategoryHandler(categoryData){
        console.log(JSON.stringify(categoryData));
        let res = api.post ('/', {name: categoryData.name});
        // setting locally ID for new category
        categoryData.categoryId = loadedCategories[loadedCategories.length-1].categoryId+1;
        // adding locally category to site if there isn't one with same name
        const theSameCategory = loadedCategories.find(cat => cat.name == categoryData.name);
        if(theSameCategory == null){
            setLoadedCategories((prev) => (
                [...prev, categoryData]
            ));
        }

        console.log(res);
    }

    const [isLoading, setIsLoading] = useState(true);
    const [loadedCategories, setLoadedCategories] = useState([]);

    useEffect(() => {
        api.get('/')
        .then(function (response) {
            // handle success
            setIsLoading(false);
            setLoadedCategories(response.data);
        }).catch(function (error) {
            // handle error
            console.log(error);
          })
    }, []);


    if(isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return <div>
       <h1>AdministratorPanel</h1>
       <h1>Add new category:</h1>
        <NewCategoryForm  onAddCategory={addCategoryHandler}/>
        <CategoriesList categories={loadedCategories}/>
    </div>
}

export default AdministratorPanel;