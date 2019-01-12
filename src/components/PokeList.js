import React from "react";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import PokeListItem from "./PokeListItem";

const PokeList = props => {
  return (
    <Grid container spacing={8} justify="center">
      <Grid item xs={12} sm={8} md={8}>
        <List dense={true}>
          {props.pokemons.map(pokemon => {
            return (
              <React.Fragment>
                <PokeListItem pokemon={pokemon} />
                <Divider light />
              </React.Fragment>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
};

export default PokeList;