import {useState} from "react";

export default function Table({handleDragEnter, tableIndex, isDragging, children, ...table}) {
    return (
        <div key={table.table}
             id={tableIndex}
             className={"dnd-table-group"}
             onDragEnter={isDragging && table.Guests.length === 0 ?
                 (e) => {
                     console.log('i am firing...')
                     handleDragEnter(e, {tableIndex, guestIndex: 0}
                     )
                 } : null}
        > {table.table}
            {children}
        </div>
    )
}