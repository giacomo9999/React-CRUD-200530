import React, { Component } from "react";
import DinosaurInventory from "./DinosaurInventory";
import AddDinosaur from "./AddDinosaur";
import EditDinosaur from "./EditDinosaur";

class App extends Component {
  state = {
    editPanelOpen: false,
    runningIdValue: 4,
    tempId: null,
    tempDinoName: "",
    tempDinoColor: "",
    dinosaurs: [
      { id: 1, name: "T. Rex", color: "indigo" },
      { id: 2, name: "Brontosaurus", color: "orange" },
      { id: 3, name: "Stegosaurus", color: "green" },
    ],
  };

  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  addDinosaur = (e) => {
    e.preventDefault();
    console.log("addDinosaur here...");
    const newDinosaur = {
      id: this.state.runningIdValue,
      name: this.state.tempDinoName,
      color: this.state.tempDinoColor,
    };
    this.setState({
      runningIdValue: this.state.runningIdValue + 1,
      tempDinoName: "",
      tempDinoColor: "",
      dinosaurs: [...this.state.dinosaurs, newDinosaur],
    });
  };

  editDinosaur = (dinosaur) => {
    console.log("editDinosaur here...", dinosaur.id);
    this.setState({
      editPanelOpen: true,
      tempId: dinosaur.id,
      tempDinoName: dinosaur.name,
      tempDinoColor: dinosaur.color,
    });
  };

  updateDinosaur = (e) => {
    e.preventDefault();
    console.log("updateDinosaur here...");
    const updatedDinosaur = {
      id: this.state.tempId,
      name: this.state.tempDinoName,
      color: this.state.tempDinoColor,
    };
    this.setState({
      editPanelOpen: false,
      tempId: null,
      tempDinoName: "",
      tempDinoColor: "",
      dinosaurs: [
        ...this.state.dinosaurs.map((dinosaur) =>
          dinosaur.id === updatedDinosaur.id ? updatedDinosaur : dinosaur
        ),
      ],
    });
  };

  deleteDinosaur = (id) => {
    console.log("deleteDinosaur here...", id);
    this.setState({
      dinosaurs: this.state.dinosaurs.filter((dinosaur) => dinosaur.id !== id),
    });
  };

  render() {
    return (
      <div className="container-outer">
        <h1>I Am The App</h1>
        <DinosaurInventory
          dinosaurs={this.state.dinosaurs}
          editDinosaur={this.editDinosaur}
          deleteDinosaur={this.deleteDinosaur}
        />
        {this.state.editPanelOpen ? (
          <EditDinosaur
            handleInputChange={this.handleInputChange}
            updateDinosaur={this.updateDinosaur}
            tempId={this.state.tempId}
            tempDinoName={this.state.tempDinoName}
            tempDinoColor={this.state.tempDinoColor}
          />
        ) : (
          <AddDinosaur
            handleInputChange={this.handleInputChange}
            addDinosaur={this.addDinosaur}
            tempDinoName={this.state.tempDinoName}
            tempDinoColor={this.state.tempDinoColor}
          />
        )}
      </div>
    );
  }
}

export default App;
