import React, {Component} from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';
import Films from '../Helpers/filmsData';
import FilmItem from './FilmItem';

class Search extends React.Component {
    render() { 
        return ( 
            <View style={styles.main}>
                <TextInput style={styles.textinput}placeholder="Titre du Film"/>
                <Button style={styles.button} title="Rechercher" onClick={() => {}}/>
                <FlatList
                    data={Films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem Films={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        marginTop: 40,
        flex: 1
    },
    textinput: {
        marginBottom: 5, 
        marginLeft: 5, 
        marginRight: 5, 
        height: 50, 
        borderColor: '#FF00FF', 
        borderWidth: 1, 
        paddingLeft: 5
    },
    button: {
        height: 50
    }
})

export default Search