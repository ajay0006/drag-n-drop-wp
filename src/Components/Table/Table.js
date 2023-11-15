import Guest from "../Guest/Guest";
import {useState} from "react";


export default function Table({...table}) {
    const [tableData, setTableData] = useState(table)


    const handleDragStart = (e) => {
        console.log('drag starting')
    }
    return (
        <div className='dnd-table-group'>
            <div className='group-title'> {table.table}</div>
            { tableData.Guests.map((tableGuest, tableGuestIndex) =>
                <Guest key={tableGuestIndex} {...tableGuest} handleDragStart = {handleDragStart}/>
            )
            }
        </div>
    )
}