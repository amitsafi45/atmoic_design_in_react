import { FormControl, FormErrorMessage, FormLabel, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { InputField } from '../atoms/InputField'
import { RequiredSign } from '../atoms/RequiredSign'

interface IProps {
  name: string
  onChange?: () => void,
  value?: string
  register: any
  type: string
  required?: boolean
  label: string
}
export const FormInputField: FC<IProps> = ({ name, onChange, value, register, type, required, label }) => {
  return (
    <FormControl>
      <FormLabel display={'flex'} alignItems={'center'}>
        <Text>{label}</Text>
        {required ? <RequiredSign /> : ''}
      </FormLabel>
      <InputField type={type} register={register} name={name} value={value} onChange={onChange} />
      <FormErrorMessage>{name} is required.</FormErrorMessage>
    </FormControl>
  )
}
