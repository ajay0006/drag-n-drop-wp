export default function Guest({tableGuest, tableGuestIndex, tableIndex, isDragging, handleDragStart, handleDragEnter, handleDragEnd, handleOnDropOver, onChangeStyle}) {
    return (
        <div
            draggable
            onDragStart={(e) => handleDragStart(e, { tableIndex, tableGuestIndex})}
            onDragEnter={isDragging? (e) => {handleDragEnter(e, {tableIndex, tableGuestIndex})} : null}
            onDragEnd={(event) => handleDragEnd(event, {tableIndex, tableGuestIndex})}
            className={isDragging? onChangeStyle({tableIndex, tableGuestIndex}) : 'dnd-item'}


        >
            <div>
                <p>{tableGuest}</p>
            </div>
        </div>
    )
}