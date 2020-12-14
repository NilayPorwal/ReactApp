export const SEARCH_RESULTS = 'SEARCH_RESULTS';
export const LOADING = 'LOADING';
export const LOAD_MORE = 'LOAD_MORE';
export const TYPING = 'TYPING';


export function searchResults(results) {
  return {
    type: SEARCH_RESULTS,
    results
  }
}

export function loading(value) {
  return {
    type: LOADING,
    value
  }
}

export function typing(value) {
  return {
    type: TYPING,
    value
  }
}

export function loadMore(value) {
  return {
    type: LOAD_MORE,
    value
  }
}