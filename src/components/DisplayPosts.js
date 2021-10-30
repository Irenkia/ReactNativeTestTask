import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const DisplayPosts = ({ comments }) => {
    return (
        <View>
            <TouchableOpacity style={styles.comment} onPress={() => alert(comments.id + ') ' + comments.body)} >
                <Text style={styles.text}>{comments.id + ') ' + comments.name}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    comment: {
        margin: 5,
        backgroundColor: 'skyblue',
        borderRadius: 30
    },
    text: {
        padding: 12,
        fontSize: 16,
    }
});

DisplayPosts.propTypes = {
    comments: PropTypes.object.isRequired
};

export default DisplayPosts;