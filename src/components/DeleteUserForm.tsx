import React from 'react'
import Button from './Button'
import { DeleteUserFormContainer } from '../pages/DeleteUser'

interface Props{
   // loading:boolean
    onSubmit:(selectedUsers: any) => Promise<void>
}
const DeleteUserForm=({onSubmit}:Props)=>{
    return (
        <div>
            <Button fullWidth={true} label="delete" typeVariant="primary" onClick={onSubmit}/>
        </div>


    )
}

export default DeleteUserForm