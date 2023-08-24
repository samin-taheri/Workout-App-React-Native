import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import TestScreen from "../screens/TestScreen";
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import WorkoutDetailScreen from "../screens/WorkoutDetailScreen";

export default function Navigation() {
    return (
    <NavigationContainer>
        <RootNavigator/>
    </NavigationContainer>
)}

const Stack = createNativeStackNavigator();
function RootNavigator() {
    return(
    <Stack.Navigator>
         <Stack.Screen
                name="Root"
                component={ButtomTabNavigator}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="WorkoutDetail"
                component={WorkoutDetailScreen}
                options={{title: "Workout Info"}}
            />
            <Stack.Screen
                name="Test"
                component={TestScreen}

            />
        </Stack.Navigator>
    )
}
const BottomTab = createBottomTabNavigator();
function ButtomTabNavigator() {
    return(
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="Home"
                component ={HomeScreen}
                options={{
                    tabBarIcon: ({color,size}) => 
                    <FontAwesome name="home" size={size} color={color} />
                }}
            />
            <BottomTab.Screen
                name="Planner"
                component={PlannerScreen}
                options={{
                    tabBarIcon: ({color,size}) => 
                    <Entypo name="list" size={size} color={color} />
                }}
            />
        </BottomTab.Navigator>
    )
}
