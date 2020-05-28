import React from 'react'
import Button from './Button'

interface Props{
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