import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const DisplayPosts = ({ posts }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => alert(posts.body)} >
                <Text>{posts.id + ') ' + posts.name}</Text>
            </TouchableOpacity>
        </View>
    );
};

DisplayPosts.propTypes = {
    posts: PropTypes.object.isRequired
};

export default DisplayPosts;