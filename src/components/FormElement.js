import React, { useState } from "react";
import { uniqueId } from "lodash";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { tableAtom, itemAtom } from "../atoms/optionsState";

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
  const { selectedItemsList } = props;
  const { setSelectedItem } = props;

  const { activeStep } = props;

  const SetAtomTable = useSetRecoilState(tableAtom(item.id));
  const SetAtomItem = useSetRecoilState(itemAtom(item.id));

  const onDragStartHandler = (e) => {
    setDraggedItem(item);
  };

  const onDragEndHandler = (e) => {
    setItemOpacity(1);
    setDraggedItem({});
  };

  const onClickHandler = (e, item) => {
    console.log("old", selectedItemsList);
    let newId = 0;
    console.log("il container è", item.container);
    if (selectedItemsList.length > 0) {
      newId = Math.max(...selectedItemsList.map((s) => s.id)) + 1;
    }
    console.log("item", item);
    const newItem = {
      ...item,
      id: newId,
      step: activeStep,
      container: 0,
      container2: 0
    };
    console.log("il newItem è", newItem);
    const newList = [...selectedItemsList, newItem];
    // console.log("il Newcontainer è", newList);

    setSelectedItemsList(newList);

    //setSelectedItem(item);
    //SetAtomItem(item);
    SetAtomTable(item.dataSourceTable);
  };

  return (
    <StyledFormElement
      id={item.id}
      draggable={true}
      style={{ opacity: itemOpacity }}
      //onDragStart={onDragStartHandler}
      //onDrag={() => setItemOpacity(0.8)}
      //onDragEnd={(e) => onDragEndHandler(e)}
      onClick={(e) => onClickHandler(e, item)}
      title="start drag"
    >
      <StyledIcon className={item.icon} title={item.component} />
    </StyledFormElement>
  );
}
