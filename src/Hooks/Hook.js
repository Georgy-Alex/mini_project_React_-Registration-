import { useState } from "react";


const useSaveData = () => {
    const [datas, setData] = useState({})
    const save = (event) => {
        setData(data => ({ ...data, [event.target.name]: event.target.value }));
    };
    
    return {
        datas,
        save
    };
};

export default useSaveData