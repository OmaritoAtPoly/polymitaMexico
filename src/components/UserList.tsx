import React from 'react';
import ListLayout from './ListLayout';
import { UserItem } from './UserItem';
import { makeStyles } from '@material-ui/styles';

interface Props {
	users: any[]
}

export const UsersList = ({ users }: Props) => {
	const classes = useStyles()
	return (
		<div className={classes.container} >
			<ListLayout>
				{users.map((user: any) => (
					<UserItem key={user.id} name={user.name} job={user.job} />
				))}
			</ListLayout>
		</div>
	)
}

const useStyles = makeStyles({
	container: {
		width: '40%',
		minHeight: '50vp',
		padding: '.5rem',
		border: '1px solid #ccc',
		marginTop: '2rem'
	}
});

