import React, { useState } from "react";

import styled from "styled-components";

const StyledFormElement = styled.li`
  background-color: #282c34;
  color: #abb2bf;
  display: flex;
  padding: 5px;
  margin: 2px;
  border-radius: 3px;
  border: 1px solid #abb2bf;
  width: 50px;
`;
const StyledIcon = styled.i`
  font-size: 30px;
  margin-right: 15px;
  margin-top: 5px;
`;

export default function FormElement(props) {
  const [itemOpacity, setItemOpacity] = useState(1);
  const { setDraggedItem } = props;
  const { item } = props;
  const { setSelectedItemsList } = props;
  const { setSelectedItem } = props;

  const onDragStartHandler = (e) => {
    setDraggedItem(item);
  };

  const onDragEndHandler = (e) => {
    setItemOpacity(1);
    setDraggedItem({});
  };

  const onClickHandler = (e, item) => {
    setSelectedItemsList((old) => {
      const newList = [...old, item];
      return newList;
    });
    setSelectedItem(item);
  };

  return (
    <StyledFormElement
      id={item.id}
      draggable={true}
      style={{ opacity: itemOpacity }}
      onDragStart={onDragStartHandler}
      onDrag={() => setItemOpacity(0.8)}
      onDragEnd={(e) => onDragEndHandler(e)}
      onClick={(e) => onClickHandler(e, item)}
      title="start drag"
    >
      <StyledIcon className={item.icon} title={item.component} />
    </StyledFormElement>
  );
}
