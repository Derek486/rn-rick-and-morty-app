import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackNavigatorParamsList } from "../types/RootStackNavigatorParamsList";

const Stack = createStackNavigator<RootStackNavigatorParamsList>()

interface IStackNavigationProps {
    ListComponent: React.ComponentType,
    DetailComponent: React.ComponentType
}

const StackNavigation = ({ ListComponent, DetailComponent }: IStackNavigationProps) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" options={{
                title: "List"
            }} component={ListComponent} />
            <Stack.Screen name="Detail" options={{
                title: "Detail"
            }} component={DetailComponent} />
        </Stack.Navigator>
    )
}

export default StackNavigation