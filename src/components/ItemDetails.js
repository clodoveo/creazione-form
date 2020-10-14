import React from "react";
import styled from "styled-components";

const StyledItemDetails = styled.div`
  display: block;
  background-color: #282c34;
  font-size: 12px;
  width: 100%;
  overflow-y: scroll;

  color: #d19a66;
  height: 93%;
  padding: 5px;
  padding-bottom: 50px;
`;

const StyledInput = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  font-size: 16px;
  width: 100%;
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

const StyledSelect = styled.select`
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  outline: none;
  width: 100%;
  color: #98c379;
  padding: 5px;
  margin-bottom: 15px;
  font-size: 16px;
`;

export default function ItemDatails(props) {
  const { selectedItemsList, setSelectedItemsList } = props;
  const { setSelectedItem } = props;
  const { item } = props;
  const { elements } = props;

  const onChangeHandler = (e, item, field) => {
    const newValue = e.target.value;
    const i = selectedItemsList.findIndex((o) => o.position === item.position);

    const newSelectedItemsList = selectedItemsList;
    const newItem = { ...item };
    newItem[field] = newValue;
    newSelectedItemsList[i] = newItem;

    setSelectedItemsList((old) => newSelectedItemsList);
    setSelectedItem((old) => newItem);
  };

  const itemFieldsKey = Object.keys(item);

  const fieldsOption = elements.map((f) => (
    <option value={f.component}>{f.component}</option>
  ));

  const inputFields = itemFieldsKey.map((field, k) => (
    <div key={k}>
      <label>{field}</label>
      {field === "component" ? (
        <StyledSelect
          value={item.component}
          onChange={(e) => onChangeHandler(e, item, field)}
        >
          {fieldsOption}
        </StyledSelect>
      ) : (
        <StyledInput
          type="text"
          value={item[field]}
          onChange={(e) => onChangeHandler(e, item, field)}
        />
      )}
    </div>
  ));

  return (
    <StyledItemDetails>
      <legend>
        {item.component}: {item.name}
      </legend>
      {inputFields}
    </StyledItemDetails>
  );
}
