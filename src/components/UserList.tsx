import React from 'react';
import ListLayout from './ListLayout';
import { UserItem } from './UserItem';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

interface Props {
	users: any[]
}

export const UsersList = ({ users }: Props) => {
	const classes = useStyles()
	return (
		<div className={classes.container}>
			<Typography variant="h4" color="primary" component="h4">
				User List
			</Typography>
			<div className={classes.list} >
				<ListLayout>
					{users.map((user: any) => (
						<UserItem key={user.id} id={user.id} name={user.name} job={user.job} />
					))}
				</ListLayout>
			</div>
		</div>
	)
}

const useStyles = makeStyles({
	container: {
		width: '40%',
		height: '20rem',
		marginTop: '2rem'
	},
	list: {
		border: '1px solid #ccc',
		height: 'inherit',
		padding: '.5rem',
		marginTop: '1rem'
	}
});

