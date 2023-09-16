import React from "react";
import { View, FlatList, Alert } from "react-native";
import usuarios from "../usuarios/usuarios";
import { Avatar, Button, ListItem, Icon } from "react-native-elements";

export default props => {
    const confirmaAcao = (item) => {
        Alert.alert('Excluir Usuário', 'Realmente deseja excluir este usuário?', [
            {
                text: 'Sim',
                onPress () {
                    console.log('Botão sim clicado com sucesso!', item.nome)
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    const mostraUsuarios = ({ item }) => {
        return (
            <ListItem key={item.id} bottomDivider>
                <Avatar source={{ uri: item.imgUsuario }} />
                <ListItem.Content>
                    <ListItem.Title>{item.nome}</ListItem.Title>
                    <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Button
                    onPress={() => props.navigation.navigate('FormularioUsuario', item)}
                    type="clear"
                    icon={<Icon name='edit' size={25} color='orange' />}
                />
                <Button
                    onPress={() => confirmaAcao(item)}
                    type="clear"
                    icon={<Icon name='delete' size={25} color='red' />}
                />
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