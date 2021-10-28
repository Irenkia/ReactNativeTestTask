import React from "react";
import { View, Text, ScrollView } from "react-native";

const DisplayPosts = ({ posts }) => {
    return (
        <View>
            <ScrollView>
                <Text>{posts.name}</Text>
            </ScrollView>
        </View>
    )
}

export default DisplayPosts;
