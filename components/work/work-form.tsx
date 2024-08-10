import { useTagList } from '@/hooks'
import { WorkPayload } from '@/models'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { AutocompleteField, InputField, PhotoField } from '../form'

export interface WorkFormProps {
  initialValues?: Partial<WorkPayload>
  onSubmit?: (values: Partial<WorkPayload>) => void
}

export function WorkForm({ initialValues, onSubmit }: WorkFormProps) {
  const { data } = useTagList({})
  const tagList = data?.data || []

  const schema = yup.object().shape({
    title: yup.string().required('Please enter work title'),
    shortDescription: yup.string().required('Please enter work short description'),
    tagList: yup.array().of(yup.string()).min(1, 'Please select at least one category'),
  })

  const { control, handleSubmit } = useForm<Partial<WorkPayload>>({
    defaultValues: {
      title: '',
      shortDescription: '',
      tagList: [],
      thumbnail: null,
      ...initialValues,
    },
    resolver: yupResolver(schema) as any,
  })
  const handleSearchSubmit = async (payload: Partial<WorkPayload>) => {
    console.log('value: ', payload)
    // await onSubmit?.(payload)
  }

  return (
    <Box component="form" onSubmit={handleSubmit(handleSearchSubmit)}>
      <InputField name="title" label="Title" placeholder="Input work title" control={control} />
      <InputField
        name="shortDescription"
        label="Short description"
        placeholder="Input short description"
        control={control}
        InputProps={{
          multiline: true,
          rows: 3,
        }}
      />
      <AutocompleteField
        name="tagList"
        control={control}
        label="Filter by category"
        options={tagList}
        getOptionLabel={(option) => option}
        isOptionEqualToValue={(option, value) => option === value}
      />
      <PhotoField name="thumbnail" control={control} label="Thumbnail" />
      <Button variant="contained" type="submit">
        {!!initialValues?.id ? 'Save' : 'Submit'}
      </Button>
    </Box>
  )
}
