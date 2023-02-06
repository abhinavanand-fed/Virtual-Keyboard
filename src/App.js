import React, { useState } from "react";
import './App.css'

const Keyboard = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  return (
    <div className="keyboard">
      <div class="row">
      <div className="input-container">
        <input type="text" value={input} readOnly />
      </div>
      <div className="key-container">
        <div className="key" onClick={() => handleClick("1")}>
          1
        </div>
        <div className="key" onClick={() => handleClick("2")}>
          2
        </div>
        <div className="key" onClick={() => handleClick("3")}>
          3
        </div>
        <div className="key" onClick={() => handleClick("4")}>
          4
        </div>
        <div className="key" onClick={() => handleClick("5")}>
          5
        </div>
        <div className="key" onClick={() => handleClick("6")}>
          6
        </div>
        <div className="key" onClick={() => handleClick("7")}>
          7
        </div>
        <div className="key" onClick={() => handleClick("8")}>
          8
        </div>
        <div className="key" onClick={() => handleClick("9")}>
          9
        </div>
        <div className="key" onClick={() => handleClick("0")}>
          0
        </div>
        <div className="key" onClick={() => handleClick("q")}>
          q
        </div>
        <div className="key" onClick={() => handleClick("w")}>
          w
        </div>
        <div className="key" onClick={() => handleClick("e")}>
          e
        </div>
        <div className="key" onClick={() => handleClick("r")}>
          r
        </div>
        <div className="key" onClick={() => handleClick("t")}>
          t
        </div>
        <div className="key" onClick={() => handleClick("y")}>
          y
        </div>
        <div className="key" onClick={() => handleClick("u")}>
          u
        </div>
        <div className="key" onClick={() => handleClick("i")}>
          i
        </div>
        <div className="key" onClick={() => handleClick("o")}>
          o
        </div>
        <div className="key" onClick={() => handleClick("p")}>
          p
        </div>
        <div className="key" onClick={() => handleClick("a")}>
          a
        </div>
        <div className="key" onClick={() => handleClick("s")}>
          s
        </div>
        <div className="key" onClick={() => handleClick("d")}>
          d
        </div>
        <div className="key" onClick={() => handleClick("f")}>
          f
        </div>
        <div className="key" onClick={() => handleClick("g")}>
          g
        </div>
        <div className="key" onClick={() => handleClick("h")}>
          h
        </div>
        <div className="key" onClick={() => handleClick("j")}>
          j
        </div>
        <div className="key" onClick={() => handleClick("k")}>
          k
        </div>
        <div className="key" onClick={() => handleClick("l")}>
          l
        </div>
        <div className="key" onClick={() => handleClick("z")}>
          z
        </div>
        <div className="key" onClick={() => handleClick("x")}>
          x
        </div>
        <div className="key" onClick={() => handleClick("c")}>
          c
        </div>
        <div className="key" onClick={() => handleClick("v")}>
          v
        </div>
        <div className="key" onClick={() => handleClick("b")}>
          b
        </div>
        <div className="key" onClick={() => handleClick("n")}>
          n
        </div>
        <div className="key" onClick={() => handleClick("m")}>
          m
        </div>
        <div className="key" onClick={() => handleClick(" ")}>
          Space
        </div>
        <div className="key special" onClick={() => setInput("")}>
          Clear
        </div>
      </div>
    </div>
    </div>
  );
};
export default Keyboard;