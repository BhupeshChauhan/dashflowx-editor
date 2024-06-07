'use client'
import MediaComponent from '@/components/Media'

type Props = {
  data: any
  MediaUploadButton: any
  deleteMedia: any
  loading: any
}

const MediaBucketTab = ({data, MediaUploadButton, deleteMedia, loading}: Props) => {
  return (
    <div className="h-[900px] overflow-scroll p-4">
      <MediaComponent
        data={data}
        MediaUploadButton={MediaUploadButton} deleteMedia={deleteMedia} loading={loading}
      />
    </div>
  )
}

export default MediaBucketTab
