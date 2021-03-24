import React, { lazy, Suspense, useState } from "react";
import styled from "styled-components";

const StyledFormPreviewContainer = styled.div`
  background-color: #fff;
  padding: 15px;
  height: 38vh;
  overflow-y: scroll;
`;

const importComponent = (componentName) =>
  lazy(
    () => import(`./formComponents/${componentName}`)
    /*.catch(() =>
      import(`./formComponents/NullComponent`)
    )*/
  );

export default function FormPreview(props) {
  const [componentList, setComponentList] = useState({});
  const [activeStep, setActiveStep] = useState(1);
  const { selectedItemsList } = props;

  const { formRef } = props;

  const steps = selectedItemsList
    .map((item) => item.step)
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort();
  console.log(steps);

  const getFormItems = (selectedItemsList, step) => {
    const form = selectedItemsList.map((item, k) => {
      if (item.step === step) {
        let Comp = <></>;
        if (!componentList[item.component]) {
          Comp = importComponent(item.component);
          setComponentList((c) => ({ ...c, [item.component]: Comp }));
        } else {
          Comp = componentList[item.component];
        }
        return (
          <Suspense
            key={"form-preview-item-suspense" + item.id}
            fallback="Loading"
          >
            <Comp
              key={"form-preview-item-" + item.id}
              item={item}
              itemId={item.id}
            />
          </Suspense>
        );
      }
    });
    return form;
  };

  return (
    <div ref={formRef}>
      {steps.map((s, k) => (
        <StyledFormPreviewContainer
          style={{
            display: s == activeStep ? "flex" : "none"
          }}
          className="row"
        >
          {getFormItems(selectedItemsList, s)}

          <div>
            {Math.min(...steps) < activeStep ? (
              <button
                className="btn btn-secondary"
                onClick={() => setActiveStep((old) => old - 1)}
              >
                Indietro {Math.max(...steps)}
              </button>
            ) : (
              <></>
            )}
            {Math.max(...steps) > activeStep ? (
              <button
                className="btn btn-primary"
                onClick={() => setActiveStep((old) => old + 1)}
              >
                Avanti
              </button>
            ) : (
              <></>
            )}
          </div>
        </StyledFormPreviewContainer>
      ))}
    </div>
  );
}
