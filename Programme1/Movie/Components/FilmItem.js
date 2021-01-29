import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Films from '../Helpers/filmsData';

class FilmItem extends React.Component {
    render() {
        const film = this.props.Films
        return (
            <View style={styles.main}>
                <Image
                    style={styles.image_view}
                    source={{uri: "image"}}
                />
                <View style={styles.content_contains}>
                    <View style={styles.header_contains}>
                        <Text style={styles.titre_text}>{film.title}</Text>
                        <Text style={styles.vote_text}>{film.vote_average}</Text>
                    </View>
                    <View style={styles.description_view}>
                        <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
                    </View>
                    <View style={styles.sorti_view}>
                        <Text style={styles.sortie_text}>Sorti le {film.release_date}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    main: {
        flexDirection: 'row',
        height: 190
    },
    image_view: {
        width: 120,
        margin: 5,
        height: 180,
        backgroundColor: 'gray'
    },
    content_contains: {
        flex: 1,
        margin: 5
    },
    header_contains: {
        flex: 3,
        flexDirection: 'row'
    },
    titre_text: {
        fontWeight: 'bold',
        flex: 1,
        fontSize: 20,
        paddingRight: 5,
        flexWrap: 'wrap',
        color: '#008000'
    },
    vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#FFA500'
    },
    description_view: {
        flex: 7,
    },
    description_text: {
        fontStyle: 'italic',
        color: '#ff0000'
    },
    sortie_view: {
        flex: 1
    },
    sortie_text: {
        textAlign: 'right',
        fontSize: 14,
        color: '#EE82EE'
    }
})

export default FilmItem