import React from "react";
import { withRouter } from 'react-router';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { toJapaneseType } from "../utils";
import { CARD_WIDTH, CARD_HEIGHT } from "../constants/";

const styles = theme => ({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    textAlign: "center",
    marginTop: 5
  },
  media: {
    height: 150
  }
});

class PokemonCard extends React.PureComponent {
  handleCardClick = () => {
    // TODO: withRouterで遷移
    console.log("handleCardClick");
  };

  render() {
    const { classes, pokemon } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea onClick={this.handleCardClick}>
          {/* <CardMedia
            className={classes.media}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.id
            }.png`}
            title={pokemon.name.japanese}
          /> */}
          <CardContent>
            <Typography variant="subtitle1" gutterBottom>
              No. {("00" + pokemon.id).slice(-3)}
            </Typography>
            <Typography gutterBottom variant="h6">
              {pokemon.name.japanese}
            </Typography>
            <Typography gutterBottom variant="subtitle1">
              {toJapaneseType(pokemon.type)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default withStyles(styles)(PokemonCard);
