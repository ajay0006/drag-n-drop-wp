import Guest from "../Guest/Guest";
import {useState, useRef} from "react";


export default function Table({tableIndex, ...table}) {
    const [tableData, setTableData] = useState(table)
    const [isDragging, setIsDragging] = useState(false)

    const draggedGuest = useRef()
    const draggedGuestNode = useRef()

    const handleDragStart = (e, params) => {
        console.log("Starting to drag", params)

        draggedGuestNode.current = e.target
        draggedGuest.current = params

        setTimeout(() => {
            setIsDragging(true)
        }, 0)

    }

    const handleDragEnter = (e, params) => {
        console.log("Entering the target drag", params)
        console.log(e.target)

        if (draggedGuestNode.current !== e.target){
            console.log("Target is NOT the same as dragged item")
        }
    }

    const handleDragEnd = (e, params) => {
        console.log('where i am dropping it at', params)
        setIsDragging(false)
        draggedGuest.current = null
        draggedGuestNode.current = null
    }

    const handleOnDropOver = (e, params) => {
        console.log('I dropped it here', params)
    }

    const onDragChangeStyling = (param) => {
        if (draggedGuest.current.tableGuestIndex === param.tableGuestIndex && draggedGuest.current.tableIndex === param.tableIndex){
            return "dnd-item current"
        }
        return "dnd-item"
    }

    return (
        <div className='dnd-table-group'>
            <div className='group-title'> {table.table}</div>
            { tableData.Guests.map((tableGuest, tableGuestIndex) =>
                <Guest
                    key={tableGuestIndex}
                    tableGuest = {tableGuest}
                    tableIndex = {tableIndex}
                    tableGuestIndex = {tableGuestIndex}
                    handleDragStart = {handleDragStart}
                    handleDragEnter = {handleDragEnter}
                    handleDragEnd = {handleDragEnd}
                    handleOnDropOver = {handleOnDropOver}
                    onChangeStyle = {onDragChangeStyling}
                    isDragging = {isDragging}
                />
            )
            }
        </div>
    )
}