import { EditorBtns } from '@/providers/editor-provider'
import React from 'react'
import { LuLink2 } from 'react-icons/lu'

const LinkPlaceholder = () => {
  const handleDragStart = (e: React.DragEvent, type: EditorBtns) => {
    if (type === null) return
    e.dataTransfer.setData('componentType', type)
  }
  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, 'link')}
      className=" h-14 w-14 bg-muted rounded-lg flex items-center justify-center"
    >
      <LuLink2
        size={40}
        className="text-muted-foreground"
      />
    </div>
  )
}

export default LinkPlaceholder
