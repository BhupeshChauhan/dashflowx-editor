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
import { useEditor } from '../../providers/editor-provider';

type Props = { handleElementClick?: any; handleUnpreview: any}

export const Editor = ({ handleElementClick, handleUnpreview }: Props) => {
  const { state } = useEditor()
  return (
    <div
      className={clsx(
        'use-automation-zoom-in h-full overflow-scroll mr-[385px] bg-background transition-all rounded-md',
        {
          '!p-0 !mr-0':
            state.editor.previewMode === true || state.editor.liveMode === true,
          '!w-[850px]': state.editor.device === 'Tablet',
          '!w-[420px]': state.editor.device === 'Mobile',
          'w-full': state.editor.device === 'Desktop',
        }
      )}
      onClick={handleElementClick}
    >
      {state.editor.previewMode && state.editor.liveMode && (
        <Button
          variant={'ghost'}
          size={'icon'}
          className="w-6 h-6 bg-slate-600 p-[2px] fixed top-0 left-0 z-[100]"
          onClick={handleUnpreview}
        >
          <FaEyeSlash />
        </Button>
      )}
      {Array.isArray(state.editor.elements) &&
        state.editor.elements.map((childElement: any) => (
          <Recursive
            key={childElement.id}
            element={childElement}
          />
        ))}
    </div>
  )
}
