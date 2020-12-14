const React = require('react-native');
const {  StyleSheet, Dimensions } = React;
const {height, width} = Dimensions.get('window');


module.exports = StyleSheet.create({
  searchResultsContainer: {
    flex: 1,
    padding:10,
  },
  itemContainer:{
    elevation:5,
    borderRadius:5,
    backgroundColor:"#fff",
    margin:5,
    width:"30%"
  },
  title: {
    textAlign:"center", 
    padding:5
  },
  image:{
    height:height*0.2,
    width:"100%",
    resizeMode:"stretch",
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  }
})