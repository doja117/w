import './App.css';
import Content from './file'; // Assuming this returns an array of objects
import { useEffect, useState } from 'react';
import { ExecHeadsTable, GroupTable } from './utils/DataGrid'; // Import DataGrid components

function App() {
  const [execHead, setExecHead] = useState([]);
  const [execLoad, setExecLoad] = useState(false);
  const [selectedExecHead, setSelectedExecHead] = useState('');
  const [activeChildren, setActiveChildren] = useState([]);

  const columnsexechead = [
    { field: 'id', headerName: 'Executive Head', width: 200 },
    { field: 'exec_head_desc', headerName: 'Description', width: 300 },
  ];

  const handleRowClick = (params) => {
    console.log('Clicked Row:', params.row);
    setSelectedExecHead(params.row.id); // Track selected executive head
  };

  useEffect(() => {
    const data = Content();
    const formattedData = data.map((item, index) => ({
      id: item.exec_head || `unknown-${index}`,
      exec_head_desc: item.exec_head_desc,
    }));
    setExecHead(formattedData);
    setExecLoad(true);
  }, []);

  useEffect(() => {
    const data = Content();
    const children = data.filter((item) => item.exec_head === selectedExecHead); // Filter relevant children
    console.log('Active Children:', children);
    setActiveChildren(children);
    console.log(activeChildren);
  }, [selectedExecHead]);

  return (
    <div className="App">
      <h1>SPI Dashboard</h1>
      {execLoad ? (
        <ExecHeadsTable
          rows={execHead}
          columns={columnsexechead}
          onRowClick={handleRowClick}
          selectedRowId={selectedExecHead}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
