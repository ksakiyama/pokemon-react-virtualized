import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import { toJapaneseType } from "../utils";

const styles = theme => ({
  listitem: {
    // height: 200
  },
  avator: {
    width: 140,
    height: 140
  },
  text: {
    fontSize: 16
  }
});

class PokeList extends React.PureComponent {
  render() {
    const { classes, pokemon } = this.props;
    return (
      <ListItem className={classes.listitem}>
        <ListItemAvatar>
          <Avatar
            className={classes.avator}
            alt={pokemon.name.japanese}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.id
            }.png`}
          />
        </ListItemAvatar>
        <ListItemText
          className={classes.text}
          primary={pokemon.name.japanese}
          secondary={toJapaneseType(pokemon.type)}
        />
      </ListItem>
    );
  }
}

export default withStyles(styles)(PokeList);
