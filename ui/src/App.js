import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/navbar/nav"
import TableList from "./components/table/table"
import FormDetail from "./components/FormDetail/form.js"

function App() {
    return <div className="App">
        <Nav/>
        <TableList/>
        <FormDetail/>
    </div>
}

export default App;
