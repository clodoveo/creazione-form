import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainWrapper from "./components/MainWrapper";
import LeftCol from "./components/LeftCol";
import CenterCol from "./components/CenterCol";
import RightCol from "./components/RightCol";
import FormElementsList from "./components/FormElementsList";
import DropHere from "./components/DropHere";
import ItemDetails from "./components/ItemDetails";

export default function App() {
  const tempState = [];
  const [selectedItemsList, setSelectedItemsList] = useState(tempState);
  const [draggedItem, setDraggedItem] = useState({});

  const [selectedItem, setSelectedItem] = useState({
    title: "prova"
  });

  return (
    <div className="App">
      <Header />
      <MainWrapper>
        <LeftCol title="Pick an element" colWidth={150}>
          <FormElementsList
            draggedItem={draggedItem}
            setDraggedItem={setDraggedItem}
            selectedItemsList={selectedItemsList}
            setSelectedItemsList={setSelectedItemsList}
            setSelectedItem={setSelectedItem}
          />
        </LeftCol>
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
        <RightCol title="Field Params" colWidth={350}>
          <ItemDetails
            item={selectedItem}
            setSelectedItemsList={setSelectedItemsList}
            selectedItemsList={selectedItemsList}
            setSelectedItem={setSelectedItem}
          />
        </RightCol>
      </MainWrapper>
      <Footer
        selectedItemsList={selectedItemsList}
        setSelectedItemsList={setSelectedItemsList}
      />
    </div>
  );
}
