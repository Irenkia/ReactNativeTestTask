import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const DisplayPosts = ({ comments }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => alert(comments.id + ') ' + comments.body)} >
                <Text>{comments.id + ') ' + comments.name}</Text>
            </TouchableOpacity>
        </View>
    );
};

DisplayPosts.propTypes = {
    comments: PropTypes.object.isRequired
};

export default DisplayPosts;