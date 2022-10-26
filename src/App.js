import React from "react";
import './App.css';
import Select from "./components/UI/Select/Select";
import Input from "./components/UI/Input/Input";

function App() {
    const selectHandler = (event) => {
        console.log(event.target.value)
    }

    return (
        <div className="App">
            <Select placeholder='Выборы 2024' onSelect={selectHandler} options={[
                {text: 'Путин', value: '111'},
                {text: 'Первый кандидат', value: '222'},
                {text: 'Второй кандидат', value: '333'}
            ]}
            />

            <Input placeholder='Имя'/>
            <Input placeholder='Фамилия'/>
        </div>
    );
}

export default App;
