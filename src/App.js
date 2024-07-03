import { createElement, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [toggle, setToggle] = useState(true);
  const [player, setPlayer] = useState("");
  const [xScore, setXScore] = useState(false);
  const [yScore, setYScore] = useState(false);
  const [win, setWin] = useState("");
  let refer = useRef("");
  let refer1 = useRef("");
  let refer2 = useRef("");
  let refer3 = useRef("");
  let refer4 = useRef("");
  let refer5 = useRef("");
  let refer6 = useRef("");
  let refer7 = useRef("");
  let refer8 = useRef("");
  let ref9 = useRef("");
  let winner = useRef("");
  let X = "X",
    O = "O";
  function handleClick() {
    if (toggle) {
      refer.current.textContent = "X";
      refer.current.style.fontSize = "40px";
      setToggle(false);
      localStorage.setItem("moves[0]", JSON.stringify(X));
      // setMoves((moves[0] = refer.current.text));
      setPlayer("O");
    } else {
      refer.current.textContent = "O";
      refer.current.style.fontSize = "40px";
      setToggle(true);
      localStorage.setItem("moves[0]", JSON.stringify(O));
      // setMoves((moves[0] = refer.current.text));

      setPlayer("X");
    }
  }
  function handleClick1() {
    if (toggle) {
      refer1.current.textContent = "X";
      refer1.current.style.fontSize = "40px";
      setToggle(false);
      // setMoves((moves[1] = refer.current.text));
      localStorage.setItem("moves[1]", JSON.stringify(X));
      setPlayer(O);
    } else {
      refer1.current.textContent = "O";
      refer1.current.style.fontSize = "40px";
      setToggle(true);
      // setMoves((moves[1] = refer.current.text));
      localStorage.setItem("moves[1]", JSON.stringify("O"));
      setPlayer("X");
    }
  }

  function handleClick2() {
    if (toggle) {
      refer2.current.textContent = "X";
      refer2.current.style.fontSize = "40px";
      setToggle(false);
      // setMoves((moves[2] = refer.current.text));
      localStorage.setItem("moves[2]", JSON.stringify(X));
      setPlayer("O");
    } else {
      refer2.current.textContent = "O";
      refer2.current.style.fontSize = "40px";
      setToggle(true);
      // setMoves((moves[2] = refer.current.text));
      localStorage.setItem("moves[2]", JSON.stringify(O));
      setPlayer("X");
    }
  }
  function handleClick3() {
    if (toggle) {
      refer3.current.textContent = "X";
      refer3.current.style.fontSize = "40px";
      setToggle(false);
      // setMoves((moves[3] = refer.current.text));
      localStorage.setItem("moves[3]", JSON.stringify(X));
      setPlayer("O");
    } else {
      refer3.current.textContent = "O";
      refer3.current.style.fontSize = "40px";
      setToggle(true);
      // setMoves((moves[3] = refer.current.text));
      localStorage.setItem("moves[3]", JSON.stringify(O));
      setPlayer("X");
    }
  }
  function handleClick4() {
    if (toggle) {
      refer4.current.textContent = "X";
      refer4.current.style.fontSize = "40px";
      setToggle(false);
      // setMoves((moves[4] = refer.current.text));
      localStorage.setItem("moves[4]", JSON.stringify(X));
      setPlayer("O");
    } else {
      refer4.current.textContent = "O";
      refer4.current.style.fontSize = "40px";
      setToggle(true);
      // setMoves((moves[4] = refer.current.text));
      localStorage.setItem("moves[4]", JSON.stringify(O));
      setPlayer("X");
    }
  }
  function handleClick5() {
    if (toggle) {
      refer5.current.textContent = "X";
      refer5.current.style.fontSize = "40px";
      setToggle(false);
      // setMoves((moves[5] = refer.current.text));
      localStorage.setItem("moves[5]", JSON.stringify(X));
      setPlayer("O");
    } else {
      refer5.current.textContent = "O";
      refer5.current.style.fontSize = "40px";
      setToggle(true);
      // setMoves((moves[5] = refer.current.text));
      localStorage.setItem("moves[5]", JSON.stringify(O));
      setPlayer("X");
    }
  }
  function handleClick6() {
    if (toggle) {
      refer6.current.textContent = "X";
      refer6.current.style.fontSize = "40px";
      setToggle(false);
      // setMoves((moves[6] = refer.current.text));
      localStorage.setItem("moves[6]", JSON.stringify(X));
      setPlayer("O");
    } else {
      refer6.current.textContent = "O";
      refer6.current.style.fontSize = "40px";
      setToggle(true);
      // setMoves((moves[6] = refer.current.text));
      localStorage.setItem("moves[6]", JSON.stringify(O));
      setPlayer("X");
    }
  }
  function handleClick7() {
    if (toggle) {
      refer7.current.textContent = "X";
      refer7.current.style.fontSize = "40px";
      setToggle(false);
      // setMoves((moves[7] = refer.current.text));
      localStorage.setItem("moves[7]", JSON.stringify(X));
      setPlayer("O");
    } else {
      refer7.current.textContent = "O";
      refer7.current.style.fontSize = "40px";
      setToggle(true);
      // setMoves((moves[7] = refer.current.text));
      localStorage.setItem("moves[7]", JSON.stringify(O));
      setPlayer("X");
    }
  }
  function handleClick8() {
    if (toggle) {
      refer8.current.textContent = "X";
      refer8.current.style.fontSize = "40px";
      setToggle(false);
      // setMoves((moves[8] = refer.current.text));
      localStorage.setItem("moves[8]", JSON.stringify(X));
      setPlayer("O");
    } else {
      refer8.current.textContent = "O";
      refer8.current.style.fontSize = "40px";
      setToggle(true);
      // setMoves((moves[8] = refer.current.text));
      localStorage.setItem("moves[8]", JSON.stringify(O));
      setPlayer("X");
    }
  }
  function handleReset() {
    ref9.current.style.pointerEvents = "auto";
    refer.current.textContent = "";
    refer2.current.textContent = "";
    refer1.current.textContent = "";
    refer3.current.textContent = "";
    refer4.current.textContent = "";
    refer5.current.textContent = "";
    refer6.current.textContent = "";
    refer7.current.textContent = "";
    refer8.current.textContent = "";
    localStorage.setItem("moves[0]", "");
    localStorage.setItem("moves[1]", "");
    localStorage.setItem("moves[2]", "");
    localStorage.setItem("moves[3]", "");
    localStorage.setItem("moves[4]", "");
    localStorage.setItem("moves[5]", "");
    localStorage.setItem("moves[6]", "");
    localStorage.setItem("moves[7]", "");
    localStorage.setItem("moves[8]", "");
    localStorage.setItem("score", "");
  }
  if (
    localStorage.getItem("moves[0]") === localStorage.getItem("moves[1]") &&
    localStorage.getItem("moves[1]") === localStorage.getItem("moves[2]") &&
    localStorage.getItem("moves[2]") !== ""
  ) {
    // var x = localStorage.getItem("moves[0]");
    // ref9.current.style.pointerEvents = "none";
    // setXScore(true)
    //  setXScore(1)
    // console.log(x);
    localStorage.setItem("score", localStorage.getItem("moves[0]"));
    // refer.current.textContent = `${x} "wins"`
    localStorage.setItem("moves[0]", "");
    localStorage.setItem("moves[1]", "");
    localStorage.setItem("moves[2]", "");
    localStorage.setItem("moves[3]", "");
    localStorage.setItem("moves[4]", "");
    localStorage.setItem("moves[5]", "");
    localStorage.setItem("moves[6]", "");
    localStorage.setItem("moves[7]", "");
    localStorage.setItem("moves[8]", "");
  } else if (
    localStorage.getItem("moves[0]") === localStorage.getItem("moves[3]") &&
    localStorage.getItem("moves[3]") === localStorage.getItem("moves[6]") &&
    localStorage.getItem("moves[6]") !== ""
  ) {
    // if(localStorage.getItem("moves[0]")=="X"){
    //   setXScore(xScore+1)
    // }
    // else{
    //   setYScore(yScore+1)
    // }
    // alert("match finished "+localStorage.getItem("moves[0]")+"wins");
    localStorage.setItem("score", localStorage.getItem("moves[0]"));
    ref9.current.style.pointerEvents = "none";
    localStorage.setItem("moves[0]", "");
    localStorage.setItem("moves[1]", "");
    localStorage.setItem("moves[2]", "");
    localStorage.setItem("moves[3]", "");
    localStorage.setItem("moves[4]", "");
    localStorage.setItem("moves[5]", "");
    localStorage.setItem("moves[6]", "");
    localStorage.setItem("moves[7]", "");
    localStorage.setItem("moves[8]", "");
  } else if (
    localStorage.getItem("moves[0]") === localStorage.getItem("moves[4]") &&
    localStorage.getItem("moves[4]") === localStorage.getItem("moves[8]") &&
    localStorage.getItem("moves[8]") !== ""
  ) {
    // if(localStorage.getItem("moves[0]")=="X"){
    //   setXScore(xScore+1)
    // }
    // else{
    //   setYScore(yScore+1)
    // }
    // alert("match finished "+localStorage.getItem("moves[0]")+"wins");
    localStorage.setItem("score", localStorage.getItem("moves[0]"));
    ref9.current.style.pointerEvents = "none";
    localStorage.setItem("moves[0]", "");
    localStorage.setItem("moves[1]", "");
    localStorage.setItem("moves[2]", "");
    localStorage.setItem("moves[3]", "");
    localStorage.setItem("moves[4]", "");
    localStorage.setItem("moves[5]", "");
    localStorage.setItem("moves[6]", "");
    localStorage.setItem("moves[7]", "");
    localStorage.setItem("moves[8]", "");
  } else if (
    localStorage.getItem("moves[3]") === localStorage.getItem("moves[4]") &&
    localStorage.getItem("moves[4]") === localStorage.getItem("moves[5]") &&
    localStorage.getItem("moves[5]") !== ""
  ) {
    // if(localStorage.getItem("moves[0]")=="X"){
    //   setXScore(xScore+1)
    // }
    // else{
    //   setYScore(yScore+1)
    // }
    // alert("match finished "+localStorage.getItem("moves[3]")+"wins");
    localStorage.setItem("score", localStorage.getItem("moves[3]"));
    ref9.current.style.pointerEvents = "none";
    localStorage.setItem("moves[0]", "");
    localStorage.setItem("moves[1]", "");
    localStorage.setItem("moves[2]", "");
    localStorage.setItem("moves[3]", "");
    localStorage.setItem("moves[4]", "");
    localStorage.setItem("moves[5]", "");
    localStorage.setItem("moves[6]", "");
    localStorage.setItem("moves[7]", "");
    localStorage.setItem("moves[8]", "");
  } else if (
    localStorage.getItem("moves[6]") === localStorage.getItem("moves[7]") &&
    localStorage.getItem("moves[7]") === localStorage.getItem("moves[8]") &&
    localStorage.getItem("moves[8]") !== ""
  ) {
    // if(localStorage.getItem("moves[0]")=="X"){
    //   setXScore(xScore+1)
    // }
    // else{
    //   setYScore(yScore+1)
    // }
    // alert("match finished "+localStorage.getItem("moves[6]")+"wins");
    localStorage.setItem("score", localStorage.getItem("moves[6]"));
    ref9.current.style.pointerEvents = "none";
    localStorage.setItem("moves[0]", "");
    localStorage.setItem("moves[1]", "");
    localStorage.setItem("moves[2]", "");
    localStorage.setItem("moves[3]", "");
    localStorage.setItem("moves[4]", "");
    localStorage.setItem("moves[5]", "");
    localStorage.setItem("moves[6]", "");
    localStorage.setItem("moves[7]", "");
    localStorage.setItem("moves[8]", "");
  } else if (
    localStorage.getItem("moves[1]") === localStorage.getItem("moves[4]") &&
    localStorage.getItem("moves[4]") === localStorage.getItem("moves[7]") &&
    localStorage.getItem("moves[7]") !== ""
  ) {
    // if(localStorage.getItem("moves[0]")=="X"){
    //   setXScore(xScore+1)
    // }
    // else{
    //   setYScore(yScore+1)
    // }
    // alert("match finished "+localStorage.getItem("moves[1]")+"wins");
    localStorage.setItem("score", localStorage.getItem("moves[1]"));
    ref9.current.style.pointerEvents = "none";
    localStorage.setItem("moves[0]", "");
    localStorage.setItem("moves[1]", "");
    localStorage.setItem("moves[2]", "");
    localStorage.setItem("moves[3]", "");
    localStorage.setItem("moves[4]", "");
    localStorage.setItem("moves[5]", "");
    localStorage.setItem("moves[6]", "");
    localStorage.setItem("moves[7]", "");
    localStorage.setItem("moves[8]", "");
  } else if (
    localStorage.getItem("moves[6]") === localStorage.getItem("moves[4]") &&
    localStorage.getItem("moves[4]") === localStorage.getItem("moves[2]") &&
    localStorage.getItem("moves[2]") !== ""
  ) {
    // if(localStorage.getItem("moves[0]")=="X"){
    //   setXScore(xScore+1)
    // }
    // else{
    //   setYScore(yScore+1)
    // }
    // alert("match finished "+localStorage.getItem("moves[6]")+"wins");
    localStorage.setItem("score", localStorage.getItem("moves[6]"));
    ref9.current.style.pointerEvents = "none";
    localStorage.setItem("moves[0]", "");
    localStorage.setItem("moves[1]", "");
    localStorage.setItem("moves[2]", "");
    localStorage.setItem("moves[3]", "");
    localStorage.setItem("moves[4]", "");
    localStorage.setItem("moves[5]", "");
    localStorage.setItem("moves[6]", "");
    localStorage.setItem("moves[7]", "");
    localStorage.setItem("moves[8]", "");
  } else if (
    localStorage.getItem("moves[2]") === localStorage.getItem("moves[5]") &&
    localStorage.getItem("moves[5]") === localStorage.getItem("moves[8]") &&
    localStorage.getItem("moves[8]") !== ""
  ) {
    // if(localStorage.getItem("moves[0]")=="X"){
    //   setXScore(xScore+1)
    // }
    // else{
    //   setYScore(yScore+1)
    // }
    // alert("match finished "+localStorage.getItem("moves[2]")+"wins");
    localStorage.setItem("score", localStorage.getItem("moves[2]"));
    ref9.current.style.pointerEvents = "none";
    localStorage.setItem("moves[0]", "");
    localStorage.setItem("moves[1]", "");
    localStorage.setItem("moves[2]", "");
    localStorage.setItem("moves[3]", "");
    localStorage.setItem("moves[4]", "");
    localStorage.setItem("moves[5]", "");
    localStorage.setItem("moves[6]", "");
    localStorage.setItem("moves[7]", "");
    localStorage.setItem("moves[8]", "");
  }
  // else{
  //     console.log("play again");
  //   }
  // console.log(localStorage.getItem("moves[7]"));
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <h2 ref={winner}>
        {localStorage.getItem("score") == '"X"'
          ? "X"
          : localStorage.getItem("score") == '"O"'
          ? "O"
          : "-"}{" "}
        is winner
      </h2>
      {/* <h2>X : {xScore}  Y:{yScore}</h2> */}
      <h3>{player}'s Turn</h3>
      <div className="boxes" ref={ref9}>
        <div className="row1">
          <div className="box" onClick={handleClick}>
            <b ref={refer}>1</b>
          </div>
          <div className="box" onClick={handleClick1}>
            <b ref={refer1}>2</b>
          </div>
          <div className="box" onClick={handleClick2}>
            <b ref={refer2}>3</b>
          </div>
        </div>
        <div className="row2">
          <div className="box" onClick={handleClick3}>
            <b ref={refer3}>4</b>
          </div>
          <div className="box" onClick={handleClick4}>
            <b ref={refer4}>5</b>
          </div>
          <div className="box" onClick={handleClick5}>
            <b ref={refer5}>6</b>
          </div>
        </div>
        <div className="row3">
          <div className="box" onClick={handleClick6}>
            <b ref={refer6}>7</b>
          </div>
          <div className="box" onClick={handleClick7}>
            <b ref={refer7}>8</b>
          </div>
          <div className="box" onClick={handleClick8}>
            <b ref={refer8}>9</b>
          </div>
        </div>
      </div>
      <button type="button" className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
