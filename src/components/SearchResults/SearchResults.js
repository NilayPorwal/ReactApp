import React, {Component} from 'react';
import {Linking, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';

import {connect} from 'react-redux';

const styles = require('./SearchResultsStyles');

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

   ItemView = ({item}) => {
    return (
      // Flat List Item
      <TouchableOpacity 
            onPress={() => { Linking.openURL(item.trackViewUrl) }}
            style={styles.resultLink}
          >
            <Text>Artist : {item.artistName}</Text>
            <Text style={{paddingTop:5}}>Track : {item.trackName}</Text>

      </TouchableOpacity>
    );
  };

  render() {
    return(
      <ScrollView style={styles.searchResultsContainer}>
          <FlatList
            data={this.props.results}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.ItemView}
          />
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    results: state.results.searchResults
  };
}

export default connect(mapStateToProps, null)(SearchResults);