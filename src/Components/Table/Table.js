import Guest from "../Guest/Guest";
import {useState, useRef, Children} from "react";

export default function Table({tableIndex, children, ...table}) {
    const [tableData, setTableData] = useState(table)
    const [isDragging, setIsDragging] = useState(false)
    const draggedCoordinates = useRef()
    const draggedNode = useRef()
    const handleDragStart = (e, params) => {
        draggedNode.current = e.target
        draggedCoordinates.current = params
        console.log("Drag start", params)
        setTimeout(() => {
            setIsDragging(prevState => true)
        }, 0)
    }

    const handleDragEnd = () => {
        setIsDragging(prevState => false)
        draggedNode.current = null
        draggedCoordinates.current = null
    }

    const handleDragEnter = (e, params) => {
        console.log('Entering drag...', params)
        console.log('target in handleDragEnter', e.target)
        console.log('current dragged node', draggedNode.current)
        console.log(draggedCoordinates.current)
        if (draggedNode.current !== e.target) {
            console.log('They arent the same')
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
        <>
            <div className='drag-n-drop'>
                <div key={tableData.table}
                     className={"dnd-table-group"}
                     onDragEnter={(e) => handleDragEnter(e, {tableIndex})}
                > {tableData.table}
                    {tableData.Guests.map((tableGuest, tableGuestIndex) =>
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
                </div>
            </div>
        </>
    )
}