import { useEffect } from "react";
import { View,Text, StyleSheet, Pressable } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import data from "../data.json";
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";

type DetailParams = {
    route: {
        params: {
            slug: string
        }
    }
}
type navigation = NativeStackHeaderProps & DetailParams;

export default function WorkoutDetailScreen({route}: navigation) {

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Slug - {route.params.slug}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    header: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',
    }
});