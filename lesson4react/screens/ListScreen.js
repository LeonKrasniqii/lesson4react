import React from 'react';
import {Text,StyleSheet,View,FlatList} from 'react-native';

const studens = [
    {name:'Jon',surname:'Behra',age:'17'},
    {name:'Leon',surname:'Krasniqi',age:'16'},
    {name:'Dion',surname:'Ibrahimi',age:'17'},
    {name:'Germainum',surname:'Morina',age:'26'},
]
const ListScreen = () =>{
    return(
        <View>
            <Text style={styles.textStyle}>List of Screens</Text>
            <FlatList
                data={studens}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={student => student.name}
                renderItem={({item}) => {
                    return <Text style={styles.studentsWrapper}>{item.name} {item.surname} - {item.age}</Text>
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default ListScreen;
