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
        console.log(res);
          
        // fetch(
        //     'http://localhost:80/api/categories',
        //     {
        //         method: 'POST',
        //         body: JSON.stringify(categoryData),
        //         headers: {  //very important
        //             'Content-Type': 'application/json'
        //         }
        //     }
        // ).then(r => r.json())
        // .then(r => console.log('sykces    ' + r))
        // .catch(err => console.log('error:   ' + err))
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