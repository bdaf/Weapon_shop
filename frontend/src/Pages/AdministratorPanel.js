import NewCategoryForm from "../Components/Navbar/Category/NewCategoryForm";
import { useState, useEffect } from 'react'; 
import CategoriesList from "../Components/Navbar/Category/CategoriesList";
import axios from 'axios';

const api  = axios.create({
    baseURL: 'http://localhost:80/api/categories'
})

function AdministratorPanel(){
    async function addCategoryHandler(categoryData){
        // http POST method
        const res = api.post ('/', {name: categoryData.name})
        .then(function (response) {
            // get result data from http method
            const resultData = response.data;
            // check if there isn't one with same name
            const theSameCategory = loadedCategories.find(cat => cat.name == resultData.name);
            // adding locally category to site if condition above
            if(theSameCategory == null){
                setLoadedCategories((prev) => (
                    [...prev, resultData]
                ));
            }
        });
    }

    const [isLoading, setIsLoading] = useState(true);
    const [loadedCategories, setLoadedCategories] = useState([]);

    useEffect(() => {
        api.get('/').then(function (response) {
            setIsLoading(false);
            setLoadedCategories(response.data);
        });
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