import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Calculator = styled.div`
  background: #33393e;
  position: relative;
  width: 340px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.25),
    -15px -15px 20px rgba(255, 255, 255, 0.1);
`;

const Card = styled.div`
  position: relative;
  display: grid;
`;

const LCD = styled.input`
  background: #33393e;
  color: #eee;
  position: relative;
  grid-column: span 4;
  user-select: none;
  overflow: hidden;
  width: 100%;
  text-align: end;
  height: 100px;
  line-height: 100px;
  box-shadow: inset 15px 15px 20px rgba(0, 0, 0, 0.5),
    inset -15px -15px 20px rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  border: 2px solid #282a36;
  margin-bottom: 12px;
  padding: 0 20px;
  font-size: 2em;
  font-weight: 500;
`;

const Button = styled.button`
  background: #33393e;
  position: relative;
  padding: 10px;
  color: #eee;
  border: 2px solid #333;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25),
    -5px -5px 10px rgba(255, 255, 255, 0.1);
  margin: 10px;
  cursor: pointer;
  user-select: none;
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.25),
      inset -5px -5px 10px rgba(255, 255, 255, 0.1);
  }

  &#clear {
    grid-column: span 2;
    background: #ff5555;
    border: 2px solid #282a36;

    &:active {
      box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.1);
    }
  }
  &#plus {
    grid-row: span 2;
    background: #50fa7b;
    color: #282a36;
    border: 2px solid #282a36;

    &:active {
      box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.1);
    }
  }
  &#equal {
    grid-row: span 2;
    background: #6272a4;
    color: #282a36;
    border: 2px solid #282a36;

    &:active {
      box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.1);
    }
  }
`;

const Calculators = () => {
  const [val, setVal] = useState("");

  const backspace = () => {
    try {
      if (val === "Error") {
        setVal("");
      } else {
        setVal(val.slice(0, -1));
      }
    } catch (_) {
      setVal("");
    }
  };

  const calculate = () => {
    try {
      setVal(eval(val));
    } catch (_) {
      setVal("Error");
    }
  };

  return (
    <Container>
      <Calculator>
        <Card>
          <LCD type="text" placeholder="0" value={val} disabled />
          <Button id="clear" value="" onClick={() => backspace()}>
            C/CE
          </Button>
          <Button value="/" onClick={(e) => setVal(val + e.target.value)}>
            /
          </Button>
          <Button value="*" onClick={(e) => setVal(val + e.target.value)}>
            *
          </Button>
          <Button value="7" onClick={(e) => setVal(val + e.target.value)}>
            7
          </Button>
          <Button value="8" onClick={(e) => setVal(val + e.target.value)}>
            8
          </Button>
          <Button value="9" onClick={(e) => setVal(val + e.target.value)}>
            9
          </Button>
          <Button value="-" onClick={(e) => setVal(val + e.target.value)}>
            -
          </Button>
          <Button value="4" onClick={(e) => setVal(val + e.target.value)}>
            4
          </Button>
          <Button value="5" onClick={(e) => setVal(val + e.target.value)}>
            5
          </Button>
          <Button value="6" onClick={(e) => setVal(val + e.target.value)}>
            6
          </Button>
          <Button
            id="plus"
            value="+"
            onClick={(e) => setVal(val + e.target.value)}
          >
            +
          </Button>
          <Button value="1" onClick={(e) => setVal(val + e.target.value)}>
            1
          </Button>
          <Button value="2" onClick={(e) => setVal(val + e.target.value)}>
            2
          </Button>
          <Button value="3" onClick={(e) => setVal(val + e.target.value)}>
            3
          </Button>
          <Button value="0" onClick={(e) => setVal(val + e.target.value)}>
            0
          </Button>
          <Button value="00" onClick={(e) => setVal(val + e.target.value)}>
            00
          </Button>
          <Button value="." onClick={(e) => setVal(val + e.target.value)}>
            .
          </Button>
          <Button id="equal" value="=" onClick={() => calculate()}>
            =
          </Button>
        </Card>
      </Calculator>
    </Container>
  );
};

export default Calculators;
