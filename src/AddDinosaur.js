import React from "react";

const AddDinosaur = (props) => {
  return (
    <div className="container-inner">
      <h1>Add Dinosaur</h1>
      <form className="h-form" onSubmit={props.addDinosaur}>
        <label className="h-label">Name</label>
        <input
          className="h-input"
          onChange={props.handleInputChange}
          type="text"
          name="tempDinoName"
          value={props.tempDinoName}
        />
        <label className="h-label">Color</label>
        <input
          className="h-input"
          onChange={props.handleInputChange}
          type="text"
          name="tempDinoColor"
          value={props.tempDinoColor}
        />
        <br/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddDinosaur;
