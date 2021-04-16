import React, { useState, useRef } from "react";
import styled from "styled-components";
import ColHeader from "./ColHeader";

const StyledWizardContainer = styled.div`
  color: #fff;
  padding: 15px;
  border-radius: 5px;
`;
const StyledInput = styled.input`
  display: inline;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  font-size: 16px;
  width: 150px;
  padding: 5px;
  margin-bottom: 15px;
  color: #98c379;
  &:focus {
    outline: none;
    background-color: #ccc;
    border: none;
    border-bottom: 1px solid #999;
    color: #666;
  }
`;

export default function WizardStepManagement(props) {
  const { steps } = props;
  const { setSteps } = props;
  const { activeStep } = props;
  const { setActiveStep } = props;

  const [newStepVal, setNewStepVal] = useState("");

  const btnPlusClickHandler = () => {
    const newId = Math.max(...steps.map((s) => s.id));

    setSteps((old) => [...old, { id: newId + 1, title: `Step-${newId + 1}` }]);
    setNewStepVal("");
  };

  const btnTrashcClickHandler = (id) => {
    const newSteps = steps.filter((s) => s.id !== id);
    setSteps(newSteps);
  };

  const onFocusHandler = (id) => {
    setActiveStep(id);
  };

  return (
    <StyledWizardContainer>
      {steps.map((s, k) => (
        <span key={s.id}>
          {s.id != 1 ? (
            <a onClick={() => btnTrashcClickHandler(s.id)}>
              {" "}
              <i className="fa fa-trash" />
            </a>
          ) : (
            <></>
          )}{" "}
          {s.id}{" "}
          <StyledInput
            key={`steplabelinput${s.id}`}
            type="text"
            placeholder="step name here"
            onChange={(e) => {
              const newval = e.target.value;
              setSteps((old) => {
                const newStep = steps;
                newStep[k].title = newval;
                console.log(newStep);
                return [...newStep];
              });
            }}
            onClick={() => onFocusHandler(s.id)}
            value={s.title}
          />
        </span>
      ))}
      <span>
        <a
          className="btn btn-secondary"
          style={{ width: "50px" }}
          onClick={btnPlusClickHandler}
        >
          +
        </a>
      </span>
    </StyledWizardContainer>
  );
}
