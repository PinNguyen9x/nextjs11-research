import { WorkFilterPayload } from '@/models'
import { Search } from '@mui/icons-material'
import { Box, debounce, InputAdornment } from '@mui/material'
import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from '../form'

export interface WorkFilterProps {
  initialFilter?: WorkFilterPayload
  onSubmit?: (values: WorkFilterPayload) => void
}

export function WorkFilterForm({ initialFilter, onSubmit }: WorkFilterProps) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<WorkFilterPayload>({
    defaultValues: {
      search: '',
      ...initialFilter,
    },
  })
  const handleSearchSubmit = async (values: WorkFilterPayload) => {
    await onSubmit?.(values)
  }

  const debounceSearchChange = debounce(handleSubmit(handleSearchSubmit), 350)
  return (
    <Box component="form" onSubmit={handleSubmit(handleSearchSubmit)}>
      <InputField
        name="search"
        placeholder="Search work by title"
        control={control}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        }}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          debounceSearchChange()
        }}
      />
    </Box>
  )
}
