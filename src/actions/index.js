import {
  SET_ALL_POKEMON,
  FILTER,
  SET_FILTER_NAME,
  SET_FILTER_TYPE,
  CHANGE_LANG
} from "../constants";
import { kanaToHira, isJapaneseString } from "../utils";
import pokedex from "../resources/pokemon.json/pokedex.json";

export function setAllPokemon() {
  return {
    type: SET_ALL_POKEMON,
    payload: {
      pokemons: pokedex
    }
  };
}

export function setFilterName(filterName = "") {
  return dispatch => {
    if (filterName !== "" && !isJapaneseString(filterName)) {
      return;
    }
    dispatch({
      type: SET_FILTER_NAME,
      payload: {
        filterName
      }
    });
    dispatch(filterPokemons());
  };
}

export function setFilterType(inputType) {
  return (dispatch, getState) => {
    let filterType = getState().filterType;
    filterType.push(inputType);
    dispatch({
      type: SET_FILTER_TYPE,
      payload: {
        filterType
      }
    });
    dispatch(filterPokemons());
  };
}

export function deleteFromFilterType(inputType) {
  return (dispatch, getState) => {
    const filterType = getState().filterType.filter(t => {
      return t !== inputType;
    });
    dispatch({
      type: SET_FILTER_TYPE,
      payload: {
        filterType
      }
    });
    dispatch(filterPokemons());
  };
}

export function filterPokemons() {
  return (dispatch, getState) => {
    const filterName = getState().filterName;
    const filterType = getState().filterType;
    let displayedPokemons = getState().pokemons;

    if (filterName) {
      displayedPokemons = displayedPokemons.filter(pokemon => {
        const name = kanaToHira(pokemon.name.japanese);
        return name.includes(kanaToHira(filterName));
      });
    }

    if (filterType.length > 0) {
      displayedPokemons = displayedPokemons.filter(pokemon => {
        const matched = filterType.map(ft => {
          return pokemon.type.includes(ft);
        });
        if (matched.length === 1) {
          return matched.includes(true);
        }
        return !matched.includes(false);
      });
    }

    dispatch({
      type: FILTER,
      payload: {
        displayedPokemons
      }
    });
  };
}

export function changeLanguage(language) {
  return {
    type: CHANGE_LANG,
    payload: {
      language
    }
  };
}
