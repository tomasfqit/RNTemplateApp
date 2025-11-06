import { useAuthStore } from "../../../store/auth.store";

export interface IProfileUIHook {
    logout: () => void;
}
export const useProfileUIHook = (): IProfileUIHook => {
    const { logout } = useAuthStore();
    return {
        logout,
    };
};