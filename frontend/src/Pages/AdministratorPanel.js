import NewCategoryForm from "../Components/Navbar/Category/NewCategoryForm";
import { useState, useEffect } from 'react'; 
import CategoriesList from "../Components/Navbar/Category/CategoriesList";

function AdministratorPanel(){
    function addCategoryHandler(categoryData){
        console.log(categoryData);
        fetch(
            'HTTP://localhost:80/api/categories',
            {
                method: 'POST',
                body: JSON.stringify(categoryData)
            }
        );
    }

    const [isLoading, setIsLoading] = useState(true);
    const [loadedCategories, setLoadedCategories] = useState([]);

    useEffect(() => {
        console.log("wchodzi-1")
        fetch(
            'HTTP://localhost:80/api/categories'
        ).catch((e) => {
            console.log(e)
        })
        
        .then(response => {
            console.log("wchodzi")
            return response.json();
        }).then(data => {
            console.log(data)
            setIsLoading(false);
            setLoadedCategories(data);
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