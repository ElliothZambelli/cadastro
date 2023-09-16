import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Button } from "react-native";

export default ({ route, navigation }) => {
    const [usuario, setUsuario] = useState(route.params ? route.params : {})
    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <Text style={styles.title}>Nome</Text>
                <TextInput
                    onChangeText={nome => setUsuario({ ...usuario, nome })}
                    placeholder="Insira o Nome"
                    value={usuario.nome}
                    style={styles.input}
                />
            </View>
            <View style={styles.containerInput}>
                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    onChangeText={nome => setUsuario({ ...usuario, email })}
                    placeholder="Insira o E-mail"
                    value={usuario.email}
                    style={styles.input}
                />
            </View>
            <View style={styles.containerInput}>
                <Text style={styles.title}>URL da imagem</Text>
                <TextInput
                    onChangeText={nome => setUsuario({ ...usuario, imgUsuario })}
                    placeholder="Insira neste campo a URL da imagem"
                    value={usuario.imgUsuario}
                    style={styles.input}
                />
            </View>
            <View style={styles.containerBtn}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btn}>
                    <Text style={styles.txtBtn}>
                        {usuario === route.params ? "Salvar Alterações" : 'Criar usuário'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start'
    },
    containerInput: {
        marginHorizontal: '2%',
        marginVertical: '2%',
        width: '95%',
    },
    title: {
        fontSize: 18
    },
    input: {
        borderWidth: 1,
        borderRadius: 8.5,
        marginVertical: '1%',
        paddingLeft: '1.5%',
    },
    containerBtn: {
        alignItems: 'center',
        marginHorizontal: '2.5%',
        width: '95%',
        height: '6%',
        backgroundColor: '#3e579e',
        justifyContent: 'center',
        borderRadius: 10
    },
    txtBtn: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold'
    }
})