import {
  SET_ALL_POKEMON,
  FILTER,
  SET_FILTER_NAME,
  SET_FILTER_TYPE
} from "../constants";

const initialState = {
  pokemons: [],
  displayedPokemons: [],
  filterName: "",
  filterType: [],
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_POKEMON: {
      return {
        ...state,
        pokemons: action.payload.pokemons,
        displayedPokemons: action.payload.pokemons
      };
    }
    case FILTER: {
      return {
        ...state,
        displayedPokemons: action.payload.displayedPokemons.slice()
      };
    }
    case SET_FILTER_NAME: {
      return {
        ...state,
        filterName: action.payload.filterName
      };
    }
    case SET_FILTER_TYPE: {
      return {
        ...state,
        // https://redux.js.org/faq/react-redux#why-isn-t-my-component-re-rendering-or-my-mapstatetoprops-running
        filterType: action.payload.filterType.slice()
      };
    }
    default: {
      return state;
    }
  }
}
