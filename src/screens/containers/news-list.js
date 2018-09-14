import React, { Component, Fragment } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import NewsBox from '../../sections/components/news-box';
import Empty from '../components/empty';


class NewsList  extends Component {
  keyExtractor = (item, index) => index.toString();
  renderEmpty = () => <Empty text="No hay noticias selecione una categoria en Home" />
  renderItem = ({item}) => {

      return (
        <NewsBox
          {...item}
        />
      )
    }

  render(){
    return(
    <Fragment>
      <ScrollView >
        <FlatList
          data={this.props.list}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderEmpty}
          renderItem={this.renderItem}
          />
      </ScrollView>
    </Fragment>
    );
  }
}


function mapStateToProps(state) {
  return {
    list: state.news.newsList
  }
}

export default connect(mapStateToProps)(NewsList);
