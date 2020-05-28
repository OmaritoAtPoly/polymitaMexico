import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-fetching-library';
import { AddUserForm, UserInput } from '../AddUserForm';
import Container from '../atoms/Container';
import { UsersList } from '../components/UserList';
import { addUserAction, deleteUserAction } from '../helpers/fetchUserList';


const CreateUsers = () => {
	const classes = useStyles()
	const [users, setUser] = useState<any[]>([])
	const { loading, payload, mutate, error, reset, abort } = useMutation(addUserAction)
	const { loading: delLoading, payload: delPayload, mutate: delMutation } = useMutation(deleteUserAction);

	const handleDelete = async (userId: number) => {
		await mutate(userId);
	}

	const addUser = async () => {
		if (payload) {
			setUser([...users, { name: payload.name, job: payload.job }])
		}
	}

	useEffect(() => {
		addUser()
	}, [payload]);

	const handleSubmit = async (formValues: UserInput) => {
		await mutate(formValues);
	}

	return (
		<Container>
			<div className={classes.row} >
				<UsersList users={users} />
				<AddUserForm loading={loading} handleSubmit={handleSubmit} />
			</div>
		</Container>
	)
}
export default CreateUsers;

const useStyles = makeStyles({
	row: {
		display: 'flex',
		justifyContent: 'center'
	}
});
