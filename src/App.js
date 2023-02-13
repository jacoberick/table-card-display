import { useState } from "react";
import Card from "./Card";

import "./styles.css";
import BasicTable from "./Table";

export default function App() {
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <div className="App">
      <h2>
        <span>PILYTIX</span> Scored Opportunities
      </h2>
      <BasicTable setSelectedRow={setSelectedRow}></BasicTable>
      {selectedRow && (
        <Card selectedRow={selectedRow} setSelectedRow={setSelectedRow} />
      )}
    </div>
  );
}

// CANIDATE REQUIRED COMMENTS
// I testify that the work done on this take-home assignment is my own.
// Time Spent: 8hrs
// Name: Jacob White
// Email: jacobewhitedev@gmail.com
