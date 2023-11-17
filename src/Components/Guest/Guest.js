export default function Guest({tableGuest, tableGuestIndex, tableIndex, isDragging, handleDragStart, handleDrop, handleDragEnter, handleDragEnd, handleDragOver, onChangeStyle}) {
    return (
        <div
            id={tableIndex+''+tableGuestIndex}
            draggable
            onDragStart={(e) => handleDragStart(e, { tableIndex, tableGuestIndex})}
            onDragEnter={isDragging? (e) => {handleDragEnter(e, {tableIndex, tableGuestIndex})} : null}
            onDragEnd={(event) => handleDragEnd(event, {tableIndex, tableGuestIndex})}
            onDrop={(e) => handleDrop(e, {tableIndex, tableGuestIndex})}
            onDragOver={(e) => handleDragOver(e)}
            className={isDragging? onChangeStyle({tableIndex, tableGuestIndex}) : 'dnd-item'}


        >
            <div>
                <p>{tableGuest}</p>
            </div>
        </div>
    )
}