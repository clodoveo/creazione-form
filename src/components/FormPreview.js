import React, { lazy, Suspense, useState, useRef, useEffect } from "react";
import styled from "styled-components";

const StyledFormPreviewContainer = styled.div`
  background-color: #fff;
  padding: 15px;
  height: 38vh;
  overflow-y: scroll;
`;

const importComponent = (componentName) =>
  lazy(() =>
    import(`./formComponents/${componentName}`).catch(() =>
      import(`./formComponents/NullComponent`)
    )
  );

export default function FormPreview(props) {
  const [componentList, setComponentList] = useState({});

  const { selectedItemsList } = props;

  const { formRef } = props;

  const FormItems = selectedItemsList.map((item) => {
    let Comp = <></>;
    if (!componentList[item.component]) {
      Comp = importComponent(item.component);
      setComponentList((c) => ({ ...c, [item.component]: Comp }));
    } else {
      Comp = componentList[item.component];
    }
    return (
      <Suspense fallback="Loading">
        <Comp item={item} />
      </Suspense>
    );
  });

  return (
    <div>
      <StyledFormPreviewContainer ref={formRef} className="container row">
        {FormItems}
      </StyledFormPreviewContainer>
    </div>
  );
}
