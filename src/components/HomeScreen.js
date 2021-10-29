import React, { Component } from "react";
import { View, FlatList, TextInput, StyleSheet } from "react-native";
import { Api } from "../api/Api";
import DisplayPosts from "./DisplayPosts";

class HomeScreen extends Component {

    constructor() {
        super();
        this.state = {
            posts: [],
            isLoading: true,
            searchComment: ""
        }
    }

    componentDidMount() {
        fetch(Api)
            .then(response => response.json())
            .then(json => this.setState({ posts: json }))
            .catch(err => this.setState({ posts: err }));
        this.setState({ isLoading: false })
    }

    handlerInput = (event) => {
        this.setState({ searchComment: event })
    }

    render() {
        return (
            <View>
                <TextInput
                    value={this.state.searchComment}
                    style={styles.input} placeholder={'Search...'}
                    onChangeText={this.handlerInput} />
                <FlatList
                    data={this.state.posts.filter(({ name }) => {
                        if (name.toLowerCase().includes(this.state.searchComment.toLowerCase())) {
                            return name;
                        }
                    })}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => {
                        return <DisplayPosts posts={item} />
                    }}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        fontSize: 17,
    }
})

export default HomeScreen;