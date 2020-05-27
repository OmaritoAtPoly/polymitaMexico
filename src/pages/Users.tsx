import React from 'react';
import { useQuery } from 'react-fetching-library';

import { fetchUsersList } from '../helpers/fetchUserList';
import { User } from '../types/index';
import UsersList from '../components/UserList';
// import UsersList from '.'
// import { UsersList } from './UsersList';



const Users = () => {
        const { loading, payload, error, query } = useQuery(fetchUsersList);
        if (loading) return <div>loading...</div>
        console.log(payload.data[0]);
        return (<UsersList users={payload} />)

        // return (<div>Hello</div>);
        // return (
        //         {loading && "loading"}


        //   <List style={{ padding: '24px', display: 'flex', flexFlow: 'column' }}>
        //     {loading && <CircularProgress style={{ margin: '100px auto' }} />}

        //     {error && (
        //       <Button onClick={onReload} variant="contained" color="secondary">
        //         Error, click to reload
        //       </Button>
        //     )}

        //     {!loading && !error && users && (
        //       <ListItem>
        //         <Typography component="span" color="textPrimary">
        //           You can turn off wi-fi to see errors after fetch :)
        //         </Typography>
        //       </ListItem>
        //     )}

        //     {!loading &&
        //       !error &&
        //       users &&
        //       users.map(user => (
        //         <Fragment key={user.uuid}>
        //           <Divider variant="inset" />
        //           <ListItem>
        //             <ListItemAvatar>
        //               <Avatar alt={user.firstName} src={user.avatar} />
        //             </ListItemAvatar>
        //             <ListItemText
        //               primary={`${user.firstName} ${user.lastName}`}
        //               secondary={
        //                 <Fragment>
        //                   <Typography component="span" color="textPrimary">
        //                     {user.role}
        //                   </Typography>
        //                   {user.description}
        //                 </Fragment>
        //               }
        //             />
        //           </ListItem>
        //         </Fragment>
        //       ))}

        //     {!loading && !error && (
        //       <Button onClick={onReload} variant="contained" color="primary">
        //         Click to reload
        //       </Button>
        //     )}
        //   </List>
        // );
//       };
      

};


export default Users;