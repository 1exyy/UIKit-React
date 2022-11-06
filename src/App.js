import React from "react";
import './App.css';

import Select from "./components/UI/Select/Select";
import Input from "./components/UI/Input/Input";
import Checkbox from "./components/UI/Checkbox/Checkbox";
import Radio from "./components/UI/Radio/Radio";
import Date from "./components/UI/Date/Date";
import Email from "./components/UI/Email/Email";
import Password from "./components/UI/Password/Password";
import Switch from "./components/UI/Switch/Switch";
import File from "./components/UI/File/File";

function App() {
    const selectHandler = (event) => {
        console.log(event)
    }

    const checkBoxHandler = (value) => {
        console.log(value)
    }

    return (
        <div className="App">
            {/*<Select placeholder='Выберете ваш пол' onSelect={selectHandler} options={[*/}
            {/*    {text: 'Мужской', value: "М"},*/}
            {/*    {text: 'Женский', value: "Ж"}*/}
            {/*]}*/}
            {/*/>*/}

            {/*<Input placeholder='Name'/>*/}

            {/*<Email/>*/}

            {/*<Date/>*/}

            {/*<Password/>*/}

            <File/>

            {/*<div style={{display: 'flex', gap: '50px', 'marginBottom': '25px'}}>*/}
            {/*    <Checkbox onChange={checkBoxHandler}/>*/}
            {/*    <Radio onChange={checkBoxHandler}/>*/}
            {/*</div>*/}

            {/*<Switch/>*/}

        </div>
    );
}

export default App;
