import useSaveData from "../Hooks/Hook"

function PersData() {

    const {
        datas,
        save,
    } = useSaveData();

    

    const exports = () => {
        const res = datas
        Object.keys(res).length === 3 ? console.log(res) : alert('Данные введены не полностью') 
    };

    return (
        <div className='container'>
            <h2>Требуется регестрация</h2>
            <div className='formOfRegist'>
                <input onChange={save} name='username' className='item' placeholder='Имя' />
                <input onChange={save} name='userfamily' className='item' placeholder='Фамилия' />
                <input onChange={save} name='useryear' className='item' placeholder='Дата рождения' />
                <button onClick={exports} className='btnRegist'>Сохранить</button>
            </div>
        </div>
    );

};

export default PersData