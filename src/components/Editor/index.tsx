import { ComponentPropsWithRef } from 'react';
import { FaEyeSlash } from "react-icons/fa";

interface iAccordionProps {
  title: string;
  description: JSX.Element;
  accordionClassName?: string;
  titleClassName?: string;
}

export type AccordionProps = ComponentPropsWithRef<'div'> & iAccordionProps;

import clsx from 'clsx'
import { Button } from '../ui/button';
import Recursive from '../EditorComponents/recursive';

type Props = { editorData: any; handleElementClick?: any; handleUnpreview: any}

export const Editor = ({ editorData, handleElementClick, handleUnpreview }: Props) => {
  return (
    <div
      className={clsx(
        'use-automation-zoom-in h-full overflow-scroll mr-[385px] bg-background transition-all rounded-md',
        {
          '!p-0 !mr-0':
            editorData.editor.previewMode === true || editorData.editor.liveMode === true,
          '!w-[850px]': editorData.editor.device === 'Tablet',
          '!w-[420px]': editorData.editor.device === 'Mobile',
          'w-full': editorData.editor.device === 'Desktop',
        }
      )}
      onClick={handleElementClick}
    >
      {editorData.editor.previewMode && editorData.editor.liveMode && (
        <Button
          variant={'ghost'}
          size={'icon'}
          className="w-6 h-6 bg-slate-600 p-[2px] fixed top-0 left-0 z-[100]"
          onClick={handleUnpreview}
        >
          <FaEyeSlash />
        </Button>
      )}
      {Array.isArray(editorData.editor.elements) &&
        editorData.editor.elements.map((childElement: any) => (
          <Recursive
            key={childElement.id}
            element={childElement}
          />
        ))}
    </div>
  )
}
