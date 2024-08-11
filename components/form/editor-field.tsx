import { Box, FormHelperText, Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import { Control, FieldValues, Path, useController } from 'react-hook-form'
// import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

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

  return (
    <Box>
      <Typography variant="body2">{label}</Typography>
      <Box>
        <ReactQuill theme="snow" value={value} />
      </Box>
      <FormHelperText error={!!error}>{error?.message}</FormHelperText>
    </Box>
  )
}
