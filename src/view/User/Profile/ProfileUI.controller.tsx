import { useProfileUIHook } from './ProfileUI.hook';
import { ProfileUIView } from './ProfileUI.view';

export const ProfileUI = () => {
  const hook = useProfileUIHook();
  return <ProfileUIView {...hook} />;
};
