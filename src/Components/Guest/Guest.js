export default function Guest({tableGuest, handleDragStart, handleDragEnd, handleDragEnter, guestIndex, tableIndex, isDragging, changeStyleOnDrag}) {
    return (
        <div
            draggable
            onDragStart={(e) => handleDragStart(e, {guestIndex, tableIndex})}
            onDragEnd={handleDragEnd}
            onDragEnter={isDragging?(e) => { handleDragEnter(e, {guestIndex, tableIndex})}: null}
            className={isDragging?changeStyleOnDrag({guestIndex, tableIndex}): 'dnd-item'}>
            <div>
                <p>{tableGuest}</p>
            </div>
        </div>
    )
}