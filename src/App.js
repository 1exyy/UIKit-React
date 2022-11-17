import React, {useState} from "react";
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
import Frame from "./components/Frame/Frame";
import Popup from "./components/UI/MAC/Popup/Popup";
import Button from "./components/UI/Button/Button";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const selectHandler = (event) => {
        console.log(event)
    }

    const checkBoxHandler = (value) => {
        console.log(value)
    }

    return (
        <div className="App">
            <Sidebar/>
            {/*<Frame className="frame_1">*/}
            {/*    <div className="components">*/}
            {/*        <div className="component">*/}
            {/*            <div className="description">*/}
            {/*                <span>*/}
            {/*                    Компонент Select необходим для выбора одного параметра*/}
            {/*                    Принимает в себя placeholder, который будет указан до выбора какого либо параметра,*/}
            {/*                    cлушатель onSelect и набор опций массив объектов с полями text и value*/}
            {/*                </span>*/}
            {/*            </div>*/}
            {/*            <Select placeholder='Выбор' onSelect={selectHandler} options={[*/}
            {/*                {text: 'Параметр 1', value: "М"},*/}
            {/*                {text: 'Параметр 2', value: "Ж"},*/}
            {/*            ]}/>*/}
            {/*        </div>*/}
            {/*        <div className="component">*/}
            {/*            <div className="description">*/}
            {/*                 <span>*/}
            {/*                   Компонент Input служит для ввода каких либо текстовых данных*/}
            {/*                     Принимает в себя один параметр - placeholder*/}
            {/*                 </span>*/}
            {/*            </div>*/}
            {/*            <Input placeholder='Имя'/>*/}
            {/*        </div>*/}

            {/*        <div className="component">*/}
            {/*            <div className="description">*/}
            {/*                 <span>*/}
            {/*                   Компонент Input служит для ввода каких либо текстовых данных*/}
            {/*                     Принимает в себя один параметр - placeholder*/}
            {/*                 </span>*/}
            {/*            </div>*/}
            {/*            <Email/>*/}
            {/*        </div>*/}

            {/*        <div className="component">*/}
            {/*            <div className="description">*/}
            {/*                <span>Компонент Date служит для выбора даты</span>*/}
            {/*            </div>*/}
            {/*            <Date/>*/}
            {/*        </div>*/}

            {/*        <div className="component">*/}
            {/*            <div className="description">*/}
            {/*                <span>Компонент Password служит для ввода пароля</span>*/}
            {/*            </div>*/}
            {/*            <Password/>*/}
            {/*        </div>*/}


            {/*        <div className="component">*/}
            {/*            <div className="description">*/}
            {/*                <span>Компонент File служит для получения файла от пользователя, так же работает drop файла</span>*/}
            {/*            </div>*/}
            {/*            <File/>*/}
            {/*        </div>*/}

            {/*        <Checkbox onChange={checkBoxHandler}/>*/}
            {/*        <Radio onChange={checkBoxHandler}/>*/}
            {/*        <Switch/>*/}

            {/*    </div>*/}
            {/*</Frame>*/}

            {/*<Frame className="frame_1">*/}
            {/*    <Button onClick={()=>setIsOpen(true)}>*/}
            {/*        Жимааай*/}
            {/*    </Button>*/}
            {/*    <Popup title='Увага!' state={isOpen} stateFx={setIsOpen}>*/}
            {/*        По рзелульаттам илссеовадний одонго анлигйсокго унвиертисета, не иеемт занчнеия, в кокам пряокде рсапожолены бкувы в солве. Галвоне, чотбы преавя и пслоендяя бквуы блыи на мсете. Осатьлыне бкувы мгоут селдовтаь в плоонм бсепордяке, все-рвано ткест чтаитсея без побрелм. Пичрионй эгото ялвятеся то, что мы чиатем не кдаужю бкуву по отдльенотси, а все солво цликеом.*/}
            {/*    </Popup>*/}
            {/*</Frame>*/}
        </div>
    );
}

export default App;
