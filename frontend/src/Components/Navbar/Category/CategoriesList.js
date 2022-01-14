function CategoriesList(props){
    return <div>
        <ul>
        {props.categories.map((category) => {
            return <li key={category.categoryId}>{category.name}</li>
        })}
        </ul>
    </div>
}

export default CategoriesList;