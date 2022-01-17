import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Col, Row, Stack, Button } from "react-bootstrap";
import axios from 'axios';

function CategoryDetails(props) {
    const params = useParams();

    const [category, setCategory] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchCategories = async () => {
        await axios.get(`http://localhost:80/api/categories/${params.id}`).then((response) => {
            setCategory(response.data)
            setLoading(true)
        })
    }

    useEffect(() => {
        fetchCategories()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!loading)
        return null;

        return (
            <h1>{category.name}</h1>
        );
}

export default CategoryDetails;