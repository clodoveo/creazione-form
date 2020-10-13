import React from "react";
import styled from "styled-components";
import Highlight from "react-highlight";
import FormPreview from "./FormPreview";
import JsonPaste from "./JsonPaste";

import "highlight.js/styles/atom-one-dark.css";
const StyledFooter = styled.div`
  overflow-y: scroll;
  height: 40vh;
  background-color: #282c34;
`;

export default function Footer(props) {
  return (
    <StyledFooter>
      <div className="row">
        <div
          className="col-md-3"
          style={{ overflowY: "scroll", height: "38vh" }}
        >
          <Highlight language="auto">
            {JSON.stringify(props.selectedItemsList, null, 2)}
          </Highlight>
        </div>
        <div className="col-md-5">
          <FormPreview selectedItemsList={props.selectedItemsList} />
        </div>
        <div className="col-md-4">
          <JsonPaste setSelectedItemsList={props.setSelectedItemsList} />
        </div>
      </div>
    </StyledFooter>
  );
}
