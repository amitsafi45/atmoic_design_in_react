import { Input } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
interface IProps {
  onChange?: () => void,
  value?: string
  name: string
  register: any
  type:string,
 
}
export const InputField: FC<IProps> = ({ value, onChange, name, register ,type}) => {

  const { watch } = useForm<any>()

  return (
    <Input {...register(name)} type={type} value={value ?? watch(name)} onChange={onChange} />
  )
}
