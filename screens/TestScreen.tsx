import { useEffect } from "react";
import { View,Text, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function TestScreen({navigation}: NativeStackHeaderProps) {

    useEffect(()=> {
        // unmounted
        return () => console.log("Unmounting Planner Screen")
    }, [])
    return(
        <View>
            <Text>I am Test Screen!</Text>
            <Button 
                title="Go to Home"
                onPress={()=> navigation.push("Root")}/>
        </View>
    )
}