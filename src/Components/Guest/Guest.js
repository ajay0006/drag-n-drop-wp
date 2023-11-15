export default function Guest({name, handleDragStart}) {
    return (
        <div onDragStart={handleDragStart} draggable className='dnd-item'>
            <div>
                <p>{name}</p>
            </div>
        </div>
    )
}