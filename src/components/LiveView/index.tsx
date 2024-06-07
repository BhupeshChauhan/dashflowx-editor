import { EditorProvider, useEditor } from '@/providers/editor-provider';
import { useEffect } from 'react';
import { Editor } from '../Editor';

export const EditorLiveView = ({
  pageId,
  pageDetails,
  editorData,
  handleElementClick,
  handleUnpreview,
}: any) => {
  const { dispatch } = useEditor();

  useEffect(() => {
    dispatch({
      type: 'TOGGLE_LIVE_MODE',
      payload: { value: true },
    });
  }, []);
  
  return (
    <EditorProvider pageId={pageId} pageDetails={pageDetails}>
      <Editor
        editorData={editorData}
        handleElementClick={handleElementClick}
        handleUnpreview={handleUnpreview}
      />
    </EditorProvider>
  );
};
