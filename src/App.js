import './App.css';
import Table from "./Components/Table/Table";
import {Data} from "./Assets/data";

function App() {
    return (
        <div className="App">
            <header className='App-header'>
                <div className='drag-n-drop'>
                    {Data.map((table, tableIndex) =>
                        <Table key={tableIndex} {...table} tableIndex={tableIndex}/>
                    )
                    }
                </div>

            </header>
        </div>
    );
}

export default App;
