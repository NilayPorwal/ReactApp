import React, {Component} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { searchResults, loading, typing } from "../../actions";
import  ApiController  from "../../controllers/ApiController";
import  HOC  from "../HOC";
const styles = require('./SearchBarStyles');
const Spinner = HOC(View);


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit:20
    }
  }
 
  onSearch = () => {
    this.props.loading(true);
    ApiController.onSearch(this.props.searchTerm, this.state.limit,  (response)=>{
      console.log(JSON.stringify(response))
      this.props.loading(false);
      this.props.searchResults(response.data.results);
    }, (error)=>{
        console.log(error)
        this.props.loading(false);
    })
  }

  render() {
    return (
     <View style={styles.searchBarContainer}> 
        <TextInput
          placeholder='Enter your search terms'
          style={styles.textInputSearch}
          underlineColorAndroid={'transparent'}
          onChangeText={(searchTerm) => this.props.typing(searchTerm)}
          value={this.props.searchTerm}
          placeholderTextColor="#fff"
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

function mapStateToProps(state) {
  return {
    searchTerm: state.results.searchTerm
  };
}

export default connect(mapStateToProps, {searchResults, loading, typing})(SearchBar);