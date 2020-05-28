import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useMemo } from "react";

interface Props {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

const User = ({ id, firstName, lastName, email, avatar }: Props) => {
  const classes = useStyles();
  const fullName = useMemo(() => `${firstName} ${lastName}`, [
    firstName,
    lastName,
  ]);

  return (
    <Card className={classes.card} key={id}>
      <Avatar
        alt={fullName}
        src={avatar}
        aria-label="recipe"
        className={classes.avatar}
      />
      <CardContent>
        <Typography variant="h4" color="primary" component="h4">
          {fullName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {email}
        </Typography>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      paddingTop: theme.spacing(2),
      [theme.breakpoints.only("xs")]: {
        flexDirection: "column",
        textAlign: "center",
      },
      [theme.breakpoints.up("sm")]: {
        paddingBottom: theme.spacing(3),
        paddingLeft: theme.spacing(2),
      },
    },
    avatar: {
      height: 150,
      width: 150,
    },
  })
);

export default User;
