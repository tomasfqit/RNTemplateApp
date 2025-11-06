import { Text, View } from "react-native"
import { IProfileUIHook } from "./ProfileUI.hook";
import { Button } from "../../../components/UI/Button";

export const ProfileUIView = ({ logout }: IProfileUIHook) => {
    return (
        <View>
            <Text>Profile</Text>
            <Button title="Logout" onPress={logout} />
        </View>
    )
}   