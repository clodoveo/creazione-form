import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainWrapper from "./components/MainWrapper";
import FormElementsCol from "./components/FormElementsCol";
import CenterCol from "./components/CenterCol";
import ItemDetailsCol from "./components/ItemDetailsCol";
import FormElementsList from "./components/FormElementsList";
import DropHere from "./components/DropHere";
import ItemDetails from "./components/ItemDetails";

import { elements } from "./settings/";
import { getTables } from "./adapters/dummy/tables";
import { getFields } from "./adapters/dummy/fields";

export default function App() {
  const tempState = [];
  const [selectedItemsList, setSelectedItemsList] = useState(tempState);
  const [draggedItem, setDraggedItem] = useState({});
  const [selectedItem, setSelectedItem] = useState({});

  const [tables, setTables] = useState(getTables());
  const [table, setTable] = useState("");
  const [fields, setFields] = useState([]);

  const tableChangeHandler = (e) => {
    setTable(e.target.value);
    setFields(getFields(e.target.value));
  };

  const onClickHandler = (e, f) => {
    const defaultItem = {
      label: f,
      name: f,
      placeholder: "insert " + f,
      info: "",
      width: "12",
      class: "",
      component: "TextInput",
      icon: "fa fa-font"
    };
    setSelectedItemsList((old) => {
      const newList = [...old, defaultItem];
      return newList;
    });
    setSelectedItem(defaultItem);
  };

  let SelectField = "";
  if (table !== "") {
    const fields = getFields(table);
    SelectField = (
      <div>
        <label style={{ color: "#ccc" }}>Click to insert:</label>
        <ul>
          {fields.map((f) => (
            <li
              onClick={(e) => onClickHandler(e, f)}
              style={{
                color: "#98c379",
                listStyle: "none",
                width: "150px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                cursor: "pointer"
              }}
            >
              + {f}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <MainWrapper>
        <ItemDetailsCol title="Field Params" colWidth={250}>
          <ItemDetails
            elements={elements}
            item={selectedItem}
            setSelectedItemsList={setSelectedItemsList}
            selectedItemsList={selectedItemsList}
            setSelectedItem={setSelectedItem}
            table={table}
            fields={fields}
          />
        </ItemDetailsCol>
        <CenterCol
          selectedItemsList={selectedItemsList}
          setSelectedItemsList={setSelectedItemsList}
          draggedItem={draggedItem}
          setDraggedItem={setDraggedItem}
          setSelectedItem={setSelectedItem}
        >
          <div className="container">
            <div className="row ">
              <DropHere
                selectedItemsList={selectedItemsList}
                setSelectedItemsList={setSelectedItemsList}
                draggedItem={draggedItem}
                position={0}
                setSelectedItem={setSelectedItem}
                className="col-md-12"
              />
            </div>
          </div>
        </CenterCol>
        <FormElementsCol colWidth={350}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <label style={{ color: "#ccc" }}>Select a table:</label>
              <select
                style={{ width: "100%" }}
                onChange={(e) => tableChangeHandler(e)}
              >
                {tables.map((t) => (
                  <option value={t}>{t}</option>
                ))}
              </select>
              <hr />
              {SelectField}
            </div>
            <div>
              <label style={{ color: "#ccc" }}>Add:</label>
              <FormElementsList
                elements={elements}
                draggedItem={draggedItem}
                setDraggedItem={setDraggedItem}
                selectedItemsList={selectedItemsList}
                setSelectedItemsList={setSelectedItemsList}
                setSelectedItem={setSelectedItem}
                style={{ display: "flex", marginRight: "12px" }}
              />
            </div>
          </div>
        </FormElementsCol>
      </MainWrapper>
      <Footer
        selectedItemsList={selectedItemsList}
        setSelectedItemsList={setSelectedItemsList}
      />
    </div>
  );
}
