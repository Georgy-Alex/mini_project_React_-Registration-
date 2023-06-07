import useSaveData from "../Hooks/Hook"

function SchoolUser() {
    const {
        datas,
        save,
    } = useSaveData();

    const exports = () => {
        const res = datas
        console.log(res)
    };

    return (
        <div className='container'>
            <h2>Требуется регестрация</h2>
            <div className='formOfRegist'>
                <h3>Выберите школу:</h3>
                <select className='selects' onChange={save} name='school'>
                    <option>СОШ№1</option>
                    <option>СОШ№21</option>
                    <option>Гим.№7</option>
                </select>
                <button onClick={exports} className='btnRegist'>Сохранить</button>
            </div>
        </div>
    );
};

export default SchoolUser