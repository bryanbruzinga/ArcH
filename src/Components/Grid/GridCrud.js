import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { ReactComponent as View } from "../../Assets/view.svg";
import { ReactComponent as Edit } from "../../Assets/edit.svg";
import { ReactComponent as Delete } from "../../Assets/delete.svg";

const GridCrud = () => {
  const itensColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "Nome", width: 130 },
    { field: "lastName", headerName: "Sobrenome", width: 130 },
    {
      field: "age",
      headerName: "Idade",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Nome Completo",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue("firstName") || ""} ${
          params.getValue("lastName") || ""
        }`,
    },
    {
      field: "actions",
      headerName: "Ações",
      width: 300,
      renderCell: () => (
        <div>
          <button
            style={{
              marginRight: "1rem",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <View style={{ height: "20px", width: "20px" }} />
          </button>
          <button
            style={{
              marginRight: "1rem",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Edit style={{ height: "20px", width: "20px" }} />
          </button>
          <button
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <Delete style={{ height: "20px", width: "20px" }} />
          </button>
        </div>
      ),
    },
  ];

  const itensRow = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      actions: "Editar    Excluir",
    },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div style={{ height: 370, width: "100%" }}>
      <DataGrid
        rows={itensRow}
        columns={itensColumns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};

export default GridCrud;
