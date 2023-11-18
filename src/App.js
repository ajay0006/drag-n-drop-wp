import './App.css';
import Table from "./Components/Table/Table";
import {Data} from "./Assets/data";
import Guest from "./Components/Guest/Guest";
import {useRef, useState} from "react";

function App() {
    const [tableData, setTableData] = useState(Data)
    const [isDragging, setIsDragging] = useState(false)
    const draggedCoordinates = useRef()
    const draggedNode = useRef()
    const handleDragStart = (e, params) => {
        draggedNode.current = e.target
        draggedCoordinates.current = params
        setTimeout(() => {
            setIsDragging(true)
        }, 0)
    }

    const handleDragEnd = () => {
        draggedNode.current = null
        draggedCoordinates.current = null
        setIsDragging(false)

    }

    const handleDragEnter = (e, params) => {
        const currGuest = draggedCoordinates.current
        if (draggedNode.current !== e.target) {
            setTableData(prevState => {
                let newState = JSON.parse(JSON.stringify(prevState))
                newState[params.tableIndex].Guests.splice(params.guestIndex, 0, newState[currGuest.tableIndex].Guests.splice(currGuest.guestIndex, 1)[0])
                draggedCoordinates.current = params
                return newState
            })
        }
    }

    const changeStyleOnDrag = (params) => {
        const currentDraggedItem = draggedCoordinates.current
        if (currentDraggedItem.guestIndex === params.guestIndex && currentDraggedItem.tableIndex === params.tableIndex) {
            return 'dnd-item current'
        }
        return 'dnd-item'
    }

    return (
        <div className="App">
            <header className='App-header'>
                <div className='drag-n-drop'
                >
                    {tableData.map((table, tableIndex) =>
                        <Table

                            key={tableIndex}
                            handleDragEnter={handleDragEnter}
                            {...table}
                            tableIndex={tableIndex}
                            isDragging={isDragging}
                        >
                            {table.Guests.map((tableGuest, tableGuestIndex) =>
                                (
                                    <Guest
                                        key={tableGuestIndex}
                                        tableGuest={tableGuest}
                                        handleDragStart={handleDragStart}
                                        handleDragEnd={handleDragEnd}
                                        handleDragEnter={handleDragEnter}
                                        guestIndex={tableGuestIndex}
                                        tableIndex={tableIndex}
                                        isDragging={isDragging}
                                        changeStyleOnDrag={changeStyleOnDrag}
                                    />
                                )
                            )
                            }
                        </Table>
                    )
                    }
                </div>

            </header>
        </div>
    );
}

export default App;
