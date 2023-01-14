import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
    {
        id: 1,
        label: 'Boleto conta luz',
        value: '300,00',
        date: '17/09/2022',
        type: 0 //gastos
    },
    {
        id: 2,
        label: 'Pix Cliente',
        value: '2.500,00',
        date: '02/09/2022',
        type: 1 //proventos
    },
    {
        id: 3,
        label: 'Salário',
        value: '2.500,00',
        date: '22/03/2022',
        type: 1 //proventos
    }
]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Marcos Almeida" />
            <Balance saldo="9.250.90" gastos="-527,00"/>
            <Actions/>
            <Text style={styles.title}>Últimas Movimentações</Text>
            <FlatList style={styles.list} data={list} keyExtractor={(item) => String(item.id)} showsVerticalScrollIndicator={false} 
            renderItem={({item}) => <Moviments data={item}/>}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14
    },
    list: {
        marginStart: 14,
        marginEnd: 14
    }
})