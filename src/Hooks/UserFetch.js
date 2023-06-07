import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [dataFetch, setFetch] = useState({
        loading: false,
        data: undefined
    });

    function newFetch(url) {
        setFetch({ loading: true })
        fetch(url)
            .then(res => res.json())
            .then(resp =>{
                setFetch({loading: false, data: resp.data})
            });
    };
    useEffect(() => {
        if(url){
            newFetch(url)
        }
    }, []);


    return { ...dataFetch, newFetch};
};

export default useFetch 