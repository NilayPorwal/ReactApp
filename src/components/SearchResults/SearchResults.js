import React, {Component} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import { searchResults, loading, typing } from "../../actions";
import {connect} from 'react-redux';
import  ApiController  from "../../controllers/ApiController";

const styles = require('./SearchResultsStyles');

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state={
      isShow:false
    }
  }

  loadMore(){
    this.setState({isShow:false})
    this.props.loading(true);
    ApiController.onSearch(this.props.searchTerm, "20",  (response)=>{
      console.log(JSON.stringify(response))
      this.props.loading(false);
      this.props.searchResults([...this.props.results, ...response.data.results]);
    }, (error)=>{
        console.log(error)
        this.props.loading(false);
    })
  }

   ItemView = ({item}) => {
    return (
      // Flat List Item
      <View style={styles.itemContainer}>
             <Image 
              source = {{uri:item.image_url}}
              style ={styles.image}
            /> 
            <Text style={styles.title}  numberOfLines={1}>{item.title}</Text>
      </View>
    );
  };

  render() {
    return(
      <>
          <FlatList
            data={this.props.results}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.ItemView}
            numColumns={3}
            columnWrapperStyle={{justifyContent: 'space-between'}} 
            onEndReached={()=>this.setState({isShow:true})}
            onEndThreshold={0}
          />
          {(this.state.isShow == true)&&
          <TouchableOpacity onPress={()=>this.loadMore()} style={{margin:10}}> 
            <Text style={{color:"#fff"}}>Load More</Text>
          </TouchableOpacity> }
       </>  
    )
  }
}

function mapStateToProps(state) {
  return {
    results: state.results.searchResults,
    searchTerm: state.results.searchTerm
  };
}

export default connect(mapStateToProps, {searchResults, loading})(SearchResults);