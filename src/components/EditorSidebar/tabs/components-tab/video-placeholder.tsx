import React from 'react'
import { EditorBtns } from '@/providers/editor-provider'
import { LuYoutube } from 'react-icons/lu'

const VideoPlaceholder = () => {
  const handleDragStart = (e: React.DragEvent, type: EditorBtns) => {
    if (type === null) return
    e.dataTransfer.setData('componentType', type)
  }
  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, 'video')}
      className="h-14 w-14 bg-muted rounded-lg flex items-center justify-center"
    >
      <LuYoutube
        size={40}
        className="text-muted-foreground"
      />
    </div>
  )
}

export default VideoPlaceholder
