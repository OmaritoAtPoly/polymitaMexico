export type User = {
        id: number,
        email: string,
        first_name: string,
        last_name: string,
}


export type UsersListProps = {
        loading: boolean;
        error: boolean;
        users: User[] | undefined;
        onReload: () => void;
};