import React, {Component} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

import { connect } from 'react-redux';
import { searchResults, loading } from "../../actions";
import  HOC  from "../HOC";


const styles = require('./SearchBarStyles');
const apiURL = 'https://itunes.apple.com/search'

const Spinner = HOC(View);


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    }
  }
 
  onSearch = () => {
    this.props.loading(true);

    let URL = apiURL + '?term=' + this.state.searchTerm;
    axios.get(URL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      console.log(JSON.stringify(response))
      this.props.loading(false);
      this.props.searchResults(response.data.results);
    }).catch((error) => {
      console.log(error)
      this.props.loading(false);

    });
  }

  render() {
    return (
     <View style={styles.searchBarContainer}> 
        <TextInput
          placeholder='Enter your search terms'
          style={styles.textInputSearch}
          underlineColorAndroid={'transparent'}
          onChangeText={(searchTerm) => this.setState({ searchTerm })}
          value={this.state.searchTerm}
        />
        <TouchableOpacity
          style={styles.textSearchButton}
          onPress={() => this.onSearch()}
        >
          <FontAwesome name="search" size={16} color="#000"/>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(null, {searchResults, loading})(SearchBar);