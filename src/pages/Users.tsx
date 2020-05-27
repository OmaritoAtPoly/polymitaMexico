import React from 'react';
import { useQuery } from 'react-fetching-library';
import UsersList from '../components/UserList';
import { fetchUsersList } from '../helpers/fetchUserList';

const Users = () => {

        const { loading, payload, error, query } = useQuery(fetchUsersList);

        if (loading) return <div>loading...</div>
        if (error) return <div>Error on {error}</div>

        const { data: users } = payload;
        return users.map((u: any) => <UsersList key={u.id} users={u} />);
};


export default Users;