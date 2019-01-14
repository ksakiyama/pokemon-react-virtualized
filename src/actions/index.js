import {
  SET_ALL_POKEMON,
  GET_ALL_POKEMON_REQUEST,
  GET_ALL_POKEMON_FAILURE,
  GET_ALL_POKEMON_SUCCESS,
  FILTER,
  SET_FILTER_NAME,
  SET_FILTER_TYPE
} from "../constants";
import { kanaToHira, isJapaneseString } from "../utils";

export function getAllPokemon() {
  return dispatch => {
    dispatch({
      type: GET_ALL_POKEMON_REQUEST
    });

    return fetch("http://localhost:5000/pokemon/all")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`${response.status}: ${response.statusText}`);
      })
      .then(data => {
        dispatch({
          type: GET_ALL_POKEMON_SUCCESS
        });
        dispatch(setAllPokemon(data));
      })
      .catch(error => {
        dispatch({
          type: GET_ALL_POKEMON_FAILURE,
          payload: {
            error
          }
        });
      });
  };
}

export function setAllPokemon(data) {
  return {
    type: SET_ALL_POKEMON,
    payload: {
      pokemons: data
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

    // 名前でフィルタリング
    if (filterName) {
      displayedPokemons = displayedPokemons.filter(pokemon => {
        const name = kanaToHira(pokemon.name.japanese);
        return name.includes(kanaToHira(filterName));
      });
    }

    // タイプでフィルタリング
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
