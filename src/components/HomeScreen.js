import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { Api } from "../api/Api";
import DisplayPosts from "./DisplayPosts";
class HomeScreen extends Component {

    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch(Api)
            .then(response => response.json())
            .then(json => this.setState({ posts: json }))
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => {
                        return <DisplayPosts posts={item} />
                    }}
                />
            </View>
        )
    }
}
export default HomeScreen;