import React from 'react';

interface Props {
        // loading: any,
        // error: any,
        users: any,
}



const UsersList = ({ users }: Props) => {


        return (
                // users.data.map((u:any) => (u.first_name))
                users.data.map((u: any) => {
                        return <div key={u.id}>
                                <span>Nombre: {`${u.first_name} `}  </span>
                                <span>Apellido: {`${u.last_name} `}  </span>
                        </div>
                        // <div>
                        // <div></div>
                        //         <div>Nombre: {u.first_name}</div>
                })
                // "hello"

        )
}


export default UsersList;