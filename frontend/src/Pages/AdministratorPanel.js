import NewCategoryForm from "../Components/Navbar/Category/NewCategoryForm";
import { useState, useEffect } from 'react'; 
import CategoriesList from "../Components/Navbar/Category/CategoriesList";

function AdministratorPanel(){
    function addCategoryHandler(categoryData){
        console.log(JSON.stringify(categoryData));
        fetch(
            'HTTP://localhost:80/api/categories',
            {
                method: 'POST',
                body: JSON.stringify(categoryData),
                headers: {  //very important
                    'Content-Type': 'application/json'
                }
            }
        ).then(r => r.json())
        .then(r => console.log('sykces    ' + r))
        .catch(err => console.log('error:   ' + err))
    }

    const [isLoading, setIsLoading] = useState(true);
    const [loadedCategories, setLoadedCategories] = useState([]);

    useEffect(() => {
        fetch(
            'HTTP://localhost:80/api/categories'
        ).then(response => {
            return response.json();
        }).then(data => {
            setIsLoading(false);
            setLoadedCategories(data);
        });
    }, [loadedCategories]);


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