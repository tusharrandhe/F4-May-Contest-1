import { useState } from "react";
import "./Calculator.css";


function Calculator() {
  let [ans, setAns] = useState("");
  let [num1, setNum1] = useState("");
  let [num2, setNum2] = useState("");
  let [status, setStatus] = useState("");

  let gr = { color: "green" };
  let re = { color: "red" };

  function num1Change(e) {
    if (e.target.value.match(/[^0-9]/i)) {
      alert("sorry! enter only integer");
      e.target.value = "";
    } else {
      setNum1(e.target.value);
    }
  }
  function num2Change(e) {
    if (e.target.value.match(/[^0-9]/i)) {
      alert("sorry! enter only integer");
      e.target.value = "";
    } else {
      setNum2(e.target.value);
    }
  }

  function addition(e) {
    e.preventDefault();
    console.log("add", Number(num1), Number(num2));
    if (num1 !== "" && num2 !== "") {
      setAns(Number(num1) + Number(num2));
      setStatus("Success : Your Result is Shown above");
    } else {
      setStatus("Please fill all input");
    }
  }
  function subtraction(e) {
    e.preventDefault();
    console.log("sub", Number(num1) - Number(num2));
    if (num1 !== "" && num2 !== "") {
      setAns(Number(num1) - Number(num2));
      setStatus("Success : Your Result is Shown above");
    } else {
      setStatus("Please fill all input");
    }
  }
  function divide(e) {
    e.preventDefault();
    console.log("divide", Number(num1) / Number(num2));
    if (num1 !== "" && num2 !== "") {
      setAns(Number(num1) / Number(num2));
      setStatus("Success : Your Result is Shown above");
    } else {
      setStatus("Please fill both field");
    }
  }
  function multiplication(e) {
    e.preventDefault();
    console.log("multi", Number(num1) * Number(num2));
    if (num1 !== "" && num2 !== "") {
      setAns(Number(num1) * Number(num2));
      setStatus("Success : Your Result is Shown above");
    } else {
      setStatus("Please fill all input");
    }
  }
  return (
    <>
      <h1>React Calculator</h1>
      <form id="forms">
        <input
          className="inputs"
          type="text"
          onChange={num1Change}
          placeholder="Num 1"
        ></input>
        <br />
        <input
          className="inputs"
          type="text"
          onChange={num2Change}
          placeholder="Num 2"
        ></input>
        <br />

        <div>
          <button onClick={addition}>+</button>
          <button onClick={subtraction}>-</button>
          <button onClick={divide}>/</button>
          <button onClick={multiplication}>*</button>
        </div>
      </form>
      {ans !== "" ? (
        <div>
          <h1>Result = {ans}</h1>
          <h1 style={gr}>{status}</h1>
        </div>
      ) : (
        <h1 style={re}>{status}</h1>
      )}
    </>
  );
}

export default Calculator;
