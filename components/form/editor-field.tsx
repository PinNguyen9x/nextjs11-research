import { Box, FormHelperText, Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import { LegacyRef, useRef } from 'react'
import { Control, FieldValues, Path, useController } from 'react-hook-form'
import ReactQuill, { ReactQuillProps } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
// import ReactQuill from 'react-quill'
// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
interface ReactQuillWrapperProps extends ReactQuillProps {
  forwardRef: LegacyRef<ReactQuill>
}
const ReactQuillWrapper = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill')
    const Component = ({ forwardRef, ...props }: ReactQuillWrapperProps) => {
      return <RQ ref={forwardRef} {...props} />
    }
    return Component
  },
  {
    ssr: false,
  },
)

type EditorFieldProps<T extends FieldValues> = {
  name: Path<T>
  control: Control<T>
  label?: string
}

export function EditorField<T extends FieldValues>({ name, label, control }: EditorFieldProps<T>) {
  const {
    field: { onChange, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  })
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, false] }],
        [{ color: [] }, { background: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link', 'image'],
        ['clean'],
      ],
      handlers: {
        // image: imageHandler,
      },
    },
  }

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'color',
    'background',
  ]

  const editorRef = useRef(null)

  return (
    <Box>
      <Typography variant="body2">{label}</Typography>
      <Box>
        <ReactQuillWrapper
          forwardRef={editorRef}
          theme="snow"
          modules={modules}
          formats={formats}
          value={value}
          onChange={(content) => onChange(content)}
        />
      </Box>
      <FormHelperText error={!!error}>{error?.message}</FormHelperText>
    </Box>
  )
}
