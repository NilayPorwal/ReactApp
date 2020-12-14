const React = require('react-native');
const { Dimensions, StyleSheet } = React;

module.exports = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    borderColor: 'lightgray',
    padding:10
  },
  textInputSearch: {
    flex: 8,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    height: 40,
    paddingLeft: 10,
    color:"#fff"
  },
  textSearchButton: {
    flex: 1,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 40
  }
})