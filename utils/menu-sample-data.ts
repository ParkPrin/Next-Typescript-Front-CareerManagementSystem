import { PageMenuItem } from '../interfaces/menuitem'

/** Dummy Menu data. */
export const sampleUserData: PageMenuItem[] = [
    { id: 101, name: '메인', iconName: 'Home', url: '/', isAdminCheck: false, isLoginCheck: false },
    { id: 102, name: '프로필 관리', iconName: 'Profile', url: '/profile', isAdminCheck: false, isLoginCheck: false },
    { id: 103, name: '프로필 포탈', iconName: 'Portal', url: '/profile_portal', isAdminCheck: false, isLoginCheck: true },
]