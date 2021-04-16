import React, { lazy, Suspense, useState } from "react";
import styled from "styled-components";

const StyledFormPreviewContainer = styled.div`
  background-color: #fff;
  padding: 15px;
  height: 38vh;
  overflow-y: scroll;
`;
const StyledFormMenu = styled.div`
  background-color: #fff;
  padding: 15px;
  height: 100px;
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
  const { selectedItemsList } = props;
  const { formRef } = props;
  const { steps } = props;
  const { activeStep } = props;
  const { setActiveStep } = props;

  const getFormItems = (selectedItemsList, step) => {
    const form = selectedItemsList.map((item, k) => {
      if (item.step == step) {
        let Comp = <></>;
        if (item.container == 0) {
          if (!componentList[item.component]) {
            Comp = importComponent(item.component);
            setComponentList((c) => ({ ...c, [item.component]: Comp }));
          } else {
            Comp = componentList[item.component];
          }
          let ReturnedComp = <></>;
          let childrenComp;
          if (item.component === "Fieldset") {
            const children = selectedItemsList.filter(
              (s) => (s.container = item.id)
            );
            childrenComp = children.map((c) => {
              let Comp2 = <></>;
              if (!componentList[c.component]) {
                Comp2 = importComponent(c.component);
                setComponentList((cc) => ({ ...cc, [c.component]: Comp2 }));
              } else {
                Comp2 = componentList[c.component];
              }
              return Comp2;
            });

            console.log("children", childrenComp);

            ReturnedComp = (
              <Comp
                key={"form-preview-item-" + item.id}
                item={item}
                itemId={item.id}
              >
                {childrenComp}
              </Comp>
            );
          } else {
            ReturnedComp = (
              <Comp
                key={"form-preview-item-" + item.id}
                item={item}
                itemId={item.id}
              />
            );
          }

          return (
            <Suspense
              key={"form-preview-item-suspense" + item.id}
              fallback="Loading"
            >
              {ReturnedComp}
            </Suspense>
          );
        } else {
          return <></>;
        }
      }
    });
    return form;
  };

  const Menulink = steps.map((s) => {
    const activeClass =
      activeStep == s.id ? "btn btn-primary active" : "btn btn-primary";
    return (
      <a
        className={activeClass}
        style={{ margin: 5 }}
        onClick={() => setActiveStep(s.id)}
      >
        {s.title}
      </a>
    );
  });

  return (
    <div ref={formRef}>
      <StyledFormMenu>{steps.length > 1 ? Menulink : <></>}</StyledFormMenu>
      {steps.map((s, k) => (
        <StyledFormPreviewContainer
          style={{
            display: s.id == activeStep ? "flex" : "none"
          }}
          className="row"
        >
          {getFormItems(selectedItemsList, s.id)}

          <div>
            {Math.min(...steps.map((x) => x.id)) < activeStep ? (
              <button
                className="btn btn-secondary"
                onClick={() => setActiveStep((old) => old - 1)}
              >
                Indietro
              </button>
            ) : (
              <></>
            )}
            {Math.max(...steps.map((x) => x.id)) > activeStep ? (
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
