import React, { useState } from 'react'

export default function Calculator(props) {
    const [inputVal, setInputVal] = useState("");
    const calculate = () => {
        try{
            // eslint-disable-next-line
            setInputVal(String(eval(inputVal)))
        }
        catch{
            alert("Invalid input!!");
        }
    }

    let border;
    let textColor;
    let bgColor;
    let btnColor;

    if (props.mode === "dark"){
        border = "border";
        textColor = "text-white";
        bgColor = "bg-black"
        btnColor = "bg-gray-600"
    }
    else {
        border = "border border-black";
        textColor = "text-black";
        bgColor = "bg-white";
        btnColor = "bg-gray-400";
    }
    
    return (
        <div className={`${border} rounded-lg ${textColor} w-[90%] text-center m-auto mt-14 ${bgColor} sm:w-[25rem]`}>
            <div className="text-3xl my-4 font-medium">Calculator</div>
            <div type="text" className={`pr-2 mt-14 w-full h-10 text-2xl ${textColor} text-right outline-none bg-transparent`}>{inputVal}</div>
            <div className="my-4">
                <div className="flex justify-around items-center mt-2">
                    <button className={`${btnColor} w-12 h-12 rounded-full text-lg active:translate-y-1`} onClick={() => setInputVal(inputVal.slice(0, -1))}>C</button>
                    <button className={`${btnColor} w-12 h-12 rounded-full text-lg active:translate-y-1`} onClick={() => setInputVal(inputVal + "(")}>(</button>
                    <button className={`${btnColor} w-12 h-12 rounded-full text-lg active:translate-y-1`} onClick={() => setInputVal(inputVal + ")")}>)</button>
                    <button className="bg-orange-400 w-12 h-12 rounded-full text-lg active:translate-y-1" onClick={() => setInputVal(inputVal + "/")}>&divide;</button>
                </div>
                <div className="flex justify-around items-center mt-2">
                    <button className={`${btnColor} w-12 h-12 rounded-full text-lg active:translate-y-1`} onClick={() => setInputVal(inputVal + "7")}>7</button>
                    <button className={`${btnColor} w-12 h-12 rounded-full text-lg active:translate-y-1`} onClick={() => setInputVal(inputVal + "8")}>8</button>
                    <button className={`${btnColor} w-12 h-12 rounded-full text-lg active:translate-y-1`} onClick={() => setInputVal(inputVal + "9")}>9</button>
                    <button className="bg-orange-400 w-12 h-12 rounded-full text-lg active:translate-y-1" onClick={() => setInputVal(inputVal + "*")}>&times;</button>
                </div>
                <div className="flex justify-around items-center mt-2">
                    <button className={`${btnColor} w-12 h-12 rounded-full text-lg active:translate-y-1`} onClick={() => setInputVal(inputVal + "4")}>4</button>
                    <button className={`${btnColor} w-12 h-12 rounded-full text-lg active:translate-y-1`} onClick={() => setInputVal(inputVal + "5")}>5</button>
                    <button className={`${btnColor} w-12 h-12 rounded-full text-lg active:translate-y-1`} onClick={() => setInputVal(inputVal + "6")}>6</button>
                    <button className="bg-orange-400 w-12 h-12 rounded-full text-lg active:translate-y-1" onClick={() => setInputVal(inputVal + "-")}>-</button>
                </div>
                <div className="flex justify-around items-center mt-2">
                    <button className={`${btnColor} w-12 h-12 rounded-full text-lg active:translate-y-1`} onClick={() => setInputVal(inputVal + "1")}>1</button>
                    <button className={`${btnColor} w-12 h-12 rounded-full text-lg active:translate-y-1`} onClick={() => setInputVal(inputVal + "2")}>2</button>
                    <button className={`${btnColor} w-12 h-12 rounded-full text-lg active:translate-y-1`} onClick={() => setInputVal(inputVal + "3")}>3</button>
                    <button className="bg-orange-400 w-12 h-12 rounded-full text-lg active:translate-y-1" onClick={() => setInputVal(inputVal + "+")}>+</button>
                </div>
                <div className="flex justify-around items-center mt-2">
                    <button className={`${btnColor} w-12 h-12 rounded-full text-lg active:translate-y-1`} onClick={() => setInputVal("")}>AC</button>
                    <button className={`${btnColor} w-12 h-12 rounded-full text-lg active:translate-y-1`} onClick={() => setInputVal(inputVal + "0")}>0</button>
                    <button className={`${btnColor} w-12 h-12 rounded-full text-lg active:translate-y-1`} onClick={() => setInputVal(inputVal + ".")}>.</button>
                    <button className="bg-orange-400 w-12 h-12 rounded-full text-lg active:translate-y-1" onClick={calculate}>=</button>
                </div>
            </div>
        </div>
  )
}