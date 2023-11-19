import {Children, useState} from "react";

export default function Table({handleDragEnterTable, tableIndex, isDragging, children, ...table}) {
    console.log("table guest",!table.Guests.length)
    console.log("isDraggin", isDragging)

    return (
        <div key={table.table}
             id={tableIndex}
             className={"dnd-table-group"}
             onDragEnter={isDragging && table.Guests.length === 0?
                 (e) => {
                     console.log('i am firing...')
                     handleDragEnterTable(e, {tableIndex, guestIndex: 0}
                     )
                 } : null}
             onDragOver={(e) => e.preventDefault()}
        > {table.table}
            {children}
        </div>
    )
}