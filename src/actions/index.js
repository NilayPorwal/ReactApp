export const SEARCH_RESULTS = 'SEARCH_RESULTS';
export const LOADING = 'LOADING';

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