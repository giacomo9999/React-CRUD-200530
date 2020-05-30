import React from "react";

const DinosaurInventory = (props) => {
  const dinoList = props.dinosaurs.map((dinosaur) => (
    <tr key={`dino_${dinosaur.id}`}>
      <td>{dinosaur.id}</td>
      <td>{dinosaur.name}</td>
      <td>{dinosaur.color}</td>
      <td>
        <button onClick={() => props.editDinosaur(dinosaur.id)}>Edit</button>
      </td>
      <td>
        <button onClick={() => props.deleteDinosaur(dinosaur.id)}>Delete</button>
      </td>
    </tr>
  ));
  return (
    <div className="container-inner">
      <h1>Dinosaur Inventory</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>{dinoList}</tbody>
      </table>
    </div>
  );
};

export default DinosaurInventory;
