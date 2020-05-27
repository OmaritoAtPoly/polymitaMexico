import React from 'react';

interface Props {
        users: any,
}

const UsersList = ({ users }: Props) => {

        return <div>
                <span>Nombre: {`${users.first_name} `}  </span>
                <span>Apellido: {`${users.last_name} `}  </span>
                <span>Email: {`${users.email} `}  </span>
        </div>
}

export default UsersList;