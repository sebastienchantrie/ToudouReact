import { useDrag, useDrop } from 'react-dnd'

function DraggableComponent(props) {
    const [collectedProps, drag] = useDrag({
      item: { id, type },
    })
    return <div ref={drag}>...</div>
  }

  

function myDropTarget(props) {
  const [collectedProps, drop] = useDrop({
    accept,
  })

  return <div ref={drop}>Drop Target</div>
}