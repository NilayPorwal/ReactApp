const React = require('react-native');
const {  StyleSheet } = React;

module.exports = StyleSheet.create({
  searchResultsContainer: {
    flex: 1,
    padding:10,
    width:"100%",
  },
  resultLink: {
    display: 'flex',
    borderRadius: 5,
    marginVertical: 5,
    padding: 5,
    borderBottomWidth:0.5
  }
})