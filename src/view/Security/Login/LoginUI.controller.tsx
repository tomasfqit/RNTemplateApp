import { useLoginUIHook } from "./LoginUI.hook";
import { LoginUIView } from "./LoginUI.view"

export const LoginUI = () => {
    const hook = useLoginUIHook();
    return (
        <LoginUIView {...hook} />
    )
}   