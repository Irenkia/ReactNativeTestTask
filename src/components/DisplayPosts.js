import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const DisplayPosts = ({ posts }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => alert(posts.body)} >
                <Text>{posts.id + ') ' + posts.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DisplayPosts;