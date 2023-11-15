import './App.css';

function App() {
    return (
        <div className="App">
            <header className='App-header'>
                <div className='drag-n-drop'>
                    <div className='dnd-table-group'>
                        <div className='group-title'>Table 1</div>
                        <div className='dnd-item'>
                            <di>
                                <p>Guest 1</p>
                            </di>
                        </div>
                        <div className='dnd-item'>
                            <di>
                                <p>Guest 2</p>
                            </di>
                        </div>
                    </div>
                    <div className='dnd-table-group'>
                        <div className='group-title'>Table 2</div>
                        <div className='dnd-item'>
                            <di>
                                <p>Guest 1</p>
                            </di>
                        </div>
                        <div className='dnd-item'>
                            <di>
                                <p>Guest 2</p>
                            </di>
                        </div>
                    </div>
                </div>

            </header>
        </div>
    );
}

export default App;
