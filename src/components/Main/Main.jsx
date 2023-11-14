// import { useState } from "react";
import RegistrationForm from "../RegistrationForm";

const Main = () => {
    // const [text, setText] = useState('Click text');

    // const [number, setNumber] = useState(0);

    // const onButtonClickHandler = () => {
    //     setText('Button was clicked');
    // }
    // const onPlusNumberHandler = () => {
    //     setNumber(number + 1);
    // }
    // const onMinusNumberHandler = () => {
    //     setNumber(number - 1);
    // }
    // const [firstInput, setFirstInput] = useState();
    // const [secondInput, setSecondInput] = useState();
    // const [result, setResult] = useState(0);

    // const onChangeFirstInputHandler = (value) => {
    //     setFirstInput(value);
    // }
    // const onChangeSecondInputHandler = (value) => {
    //     setSecondInput(value);
    // }
    // const onPlusHandler = () => {
    //     setResult(+firstInput + +secondInput)
    // }
    // const onMinusHandler = () => {
    //     setResult(firstInput - secondInput)
    // }
    // const onResetHandler = () => {
    //     setResult(0)
    // }
    // console.log(firstInput, secondInput);
    return (
        <div>
            <RegistrationForm />
            {/* <button onClick={onButtonClickHandler} type="button">Button</button>
            <div>{text}</div>
            <button onClick={onPlusNumberHandler} type="button">Plus one</button>
            <button onClick={onMinusNumberHandler} type="button">Minus one</button>
            <div>{number}</div> */}

            {/* <input type="number" onChange={(event)=> onChangeFirstInputHandler(event.target.value)} />
            <button onClick={onPlusHandler} type="button">+</button>
            <button onClick={onResetHandler} type="button">reset</button>
            <button onClick={onMinusHandler} type="button">-</button>
            <input type="number" onChange={(event)=> onChangeSecondInputHandler(event.target.value)}/>
            <div>{result}</div> */}
        </div>
    )
}

export default Main;