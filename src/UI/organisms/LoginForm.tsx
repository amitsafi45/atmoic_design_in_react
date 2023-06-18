import { Box, Button, FormControl, FormLabel, Grid, GridItem, Input } from '@chakra-ui/react'
import React from 'react'
import { FormInputField } from '../molecules/FormInputField'
import { useForm } from 'react-hook-form'


export const LoginForm = () => {

    const { register, handleSubmit, watch } = useForm<any>(
        {
            defaultValues: {
                email: '',
                name:{
                    first:"",
                    middle:"",
                    last:""
                }
            }
        }
    )

    const onSubmit = (data: any) => {
        console.log(data);


    }



    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid templateColumns={'repeat(4,1fr)'} gap={6}>
                    <GridItem >
                        <FormInputField type={'email'} register={register} name='email' required label='email'/>
   
                    </GridItem>
                    <GridItem>
                        <FormInputField type={'password'} register={register} name='password' required label='password' />

                    </GridItem>
                    <GridItem>

                        <FormInputField type={'text'} register={register} name='name.first' required label='first Name'/>
                    </GridItem>
                    <GridItem>



                        <FormInputField type={'password'} register={register} name='confirmPassword' required label='confirm Password'/>
                    </GridItem>

                    <GridItem>

                        <FormInputField type={'number'} register={register} name='age'required label='age' />
                    </GridItem>
                    <GridItem>

                        <FormInputField type={'text'} register={register} name='name.last' required label='last name' />
                    </GridItem>

                    <GridItem>
                        <FormInputField type={'text'} register={register} name='name.middle' label='middle Name'/>

                    </GridItem>



                </Grid>




                <Button type='submit'> Submit</Button>
            </form>

        </Box >
    )
}
