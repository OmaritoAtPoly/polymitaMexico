import React, { useEffect, useState } from 'react';
import { AddUserForm, UserInput } from '../AddUserForm';
import { useMutation } from 'react-fetching-library';
import { addUserAction } from '../helpers/fetchUserList';
import { UserItem } from '../components/UserItem';
import Container from '../atoms/Container';
import ListLayout from '../components/ListLayout';
import { margin } from 'polished';
import { UsersList } from '../components/UserList';
import { makeStyles } from '@material-ui/styles';


const CreateUsers = () => {
	const [users, setUser] = useState<any[]>([])
	const { loading, payload, mutate, error, reset, abort } = useMutation(addUserAction)

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
	const classes = useStyles()
	return (
		<Container>
			<div className={classes.row} >
				<UsersList users={users} />
				<AddUserForm loading={loading} error={'error'} handleSubmit={handleSubmit} />
			</div>
		</Container>
	)
}
export default CreateUsers;

const useStyles = makeStyles({
	row: {
		display: 'flex'
	}
});
