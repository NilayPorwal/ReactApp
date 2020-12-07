import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import {connect} from 'react-redux';

import  HOC  from "./HOC";


const Spinner = HOC(View);

class HomeScreen extends React.Component {

  render() {
    return (
        <Spinner spinner={this.props.loading} style={styles.container}>
          <SearchBar/>
          <SearchResults/>
        </Spinner>
    );
  }
}

function mapStateToProps(state) {
    return {
      loading: state.results.loading
    };
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default connect(mapStateToProps, null)(HomeScreen);