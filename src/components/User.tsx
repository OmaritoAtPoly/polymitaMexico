import { IconButton } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Card, { CardProps } from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import { Variant } from "../typings";

interface Props {
  id: number;
  title: string;
  subTitle: string;
  avatar?: string;
  onDelete?: () => void;
  variant?: Variant;
}

const User = (props: Props) => {
  const classes = useStyles(props);
  const { id, title, subTitle, avatar, onDelete} = props;
  return (
    <Card className={classes.card} key={id}>
      <Avatar
        alt={title}
        // src={avatar}
        aria-label="recipe"
        className={classes.avatar}
      />
      <CardContent>
        <Typography variant="h4" color="primary" component="h4">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {subTitle}
        </Typography>
      </CardContent>
      {onDelete && (
        <IconButton className={classes.icon} onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      )}
    </Card>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      position: "relative",
      display: "flex",
      maxWidth: 400,
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
    avatar: ({ variant }: Props) => ({
      height: variant === "tiny" ? 70 : 150,
      width: variant === "tiny" ? 70 : 150,
    }),
    icon: {
      position: "absolute",
      top: 0,
      right: 0,
    },
  })
);

export default User;
