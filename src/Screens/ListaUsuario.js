import React from "react";
import { View, Text, FlatList } from "react-native";
import usuarios from "../usuarios/usuarios";
import { Avatar, Button, Icon, ListItem } from "react-native-elements";

export default props => {
    const modificacoes = ({ user }) => {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('FormularioUsuario', user)}
                    type="clear"
                    icon={<Icon name='editar' size={25} color='orange' />}
                />
            </>
        )
    }

    const mostraUsuarios = ({ item }) => {
        return (
            <ListItem key={item.id} bottomDivider>
                <Avatar source={{ uri: item.imgUsuario }} />
                <ListItem.Content>
                    <ListItem.Title>{item.nome}</ListItem.Title>
                    <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={usuarios}
                renderItem={mostraUsuarios}
            />
        </View>
    )
}