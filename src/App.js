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
            <Select placeholder='Выберете ваш пол' onSelect={selectHandler} options={[
                {text: 'Мужской', value: 'М'},
                {text: 'Женский', value: 'Ж'},
                {text: 'Ламинааад..', value: 'Л'},
            ]}
            />

            <Input placeholder='Name'/>
            <Input placeholder='Surname'/>
        </div>
    );
}

export default App;
