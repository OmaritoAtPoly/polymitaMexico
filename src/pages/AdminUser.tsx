import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-fetching-library';
import { UserInput } from '../AddUserForm';
import { AdminUserView } from '../components/AdminUserView';
import { addUserAction, deleteUserAction } from '../helpers/fetchUserList';


export const AdminUser = () => {
	const [users, setUser] = useState<any[]>([])
	const { loading, payload, mutate, } = useMutation(addUserAction)
	const { mutate: delMutation } = useMutation(deleteUserAction);

	const handleUserDelete = async (userId: number) => {
		await delMutation(userId).then(() => {
			const index = users.findIndex((user) => compare(user, userId))
			deleteUser(index)
		}).catch((err) => err);
	}

	const deleteUser = (index: number) => {
		let usersList = [...users]
		usersList.splice(index, 1)
		setUser([...usersList])
	}

	const compare = (user: any, userId: number) => {
		return (user.id === userId)
	}

	const addUser = async () => {
		if (payload) {
			setUser([...users, { id: payload.name, name: payload.name, job: payload.job }])
		}
	}

	useEffect(() => {
		addUser()
	}, [payload]);

	const handleSubmit = async (formValues: UserInput) => {
		await mutate(formValues);
	}

	return (
		<AdminUserView
			createUser={handleSubmit}
			deleteUser={handleUserDelete}
			onCreateUserLoading={loading}
			users={users}
		/>
	)
}
