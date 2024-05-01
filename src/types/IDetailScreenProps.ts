import { StackScreenProps } from "@react-navigation/stack";
import IModel from "../models/IModel";
import { RootStackNavigatorParamsList } from "./RootStackNavigatorParamsList";

export type IDetailModelProp = { item: IModel }
export type IDetailScreenProp = StackScreenProps<RootStackNavigatorParamsList>
export type IDetailProps = StackScreenProps<RootStackNavigatorParamsList> | IDetailModelProp