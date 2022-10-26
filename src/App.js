import React from "react";
import './App.css';

import Select from "./components/UI/Select/Select";
import Input from "./components/UI/Input/Input";
import Checkbox from "./components/UI/Checkbox/Checkbox";
import Radio from "./components/UI/Radio/Radio";
import Date from "./components/UI/Date/Date";
import Email from "./components/UI/Email/Email";

function App() {
    const selectHandler = (event) => {
        console.log(event.target.dataset.value)
    }

    const checkBoxHandler = (value) => {
        console.log(value)
    }

    return (
        <div className="App">
            {/*<code>select</code>*/}
            <Select placeholder='Выберете ваш пол' onSelect={selectHandler} options={[
                {text: 'Мужской', value: "М"},
                {text: 'Женский', value: "Ж"}
            ]}
            />

            {/*<code>input[type='text']</code>*/}
            <Input placeholder='Name'/>

            {/*<code>input[type='email']</code>*/}
            <Email/>

            {/*<code>input[type='date']</code>*/}
            <Date/>

            {/*<code>radio and checkbox</code>*/}
            <div style={{display: 'flex', gap: '50px', 'marginBottom': '25px'}}>
                <Checkbox onChange={checkBoxHandler}/>
                <Radio onChange={checkBoxHandler}/>
            </div>
        </div>
    );
}

export default App;
