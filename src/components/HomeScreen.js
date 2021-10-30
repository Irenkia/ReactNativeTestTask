import React, { Component } from 'react';
import { View, FlatList, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import { Api } from '../api/Api';
import DisplayPosts from './DisplayPosts';

class HomeScreen extends Component {

    constructor() {
        super();
        this.state = {
            comments: [],
            isLoading: false,
            searchComment: '',
            page: 1
        };

        this.handlerInput = this.handlerInput.bind(this);
        this.getComments = this.getComments.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.renderIndicator = this.renderIndicator.bind(this);
    }

    componentDidMount() {
        this.setState({ isLoading: true }, this.getComments);
    }

    getComments = async () => {
        fetch(Api + this.state.page)
            .then(response => response.json())
            .then(json => this.setState({ comments: this.state.comments.concat(json), isLoading: false }));
    };

    handlerInput = (event) => {
        this.setState({ searchComment: event });
    };

    loadMore = () => {
        this.setState({ page: this.state.page + 1, isLoading: true }, this.getComments);
    };

    renderIndicator = () => {
        return (
            this.state.isLoading ? <View style={styles.indicator}>
                <ActivityIndicator size={'large'} color={'#0000ff'} />
            </View> : null
        );
    };

    render() {
        return (
            <View>
                <TextInput
                    value={this.state.searchComment}
                    style={styles.input} placeholder={'Search comments...'}
                    onChangeText={this.handlerInput} />
                <FlatList
                    data={this.state.comments.filter(({ name }) => {
                        if (name.toLowerCase().includes(this.state.searchComment.toLowerCase())) {
                            return name;
                        }
                    })}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => {
                        return <DisplayPosts comments={item} />;
                    }}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0}
                    ListFooterComponent={this.renderIndicator}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        fontSize: 21,
        margin: 5
    },
    indicator: {
        marginTop: 10,
        alignItems: 'center'
    }
});

export default HomeScreen;