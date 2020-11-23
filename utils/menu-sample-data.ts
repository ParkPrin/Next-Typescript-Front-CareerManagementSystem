import { PageMenuItem } from '../interfaces/menuitem'

/** Dummy Menu data. */
export const sampleUserData: PageMenuItem[] = [
    { id: 101, name: '메인', iconName: 'Home', url: '/', isAdmin: false, isLogin: false },
    { id: 102, name: '프로필 관리', iconName: 'Profile', url: '/profile', isAdmin: false, isLogin: true },
    { id: 103, name: '프로필 포탈', iconName: 'Portal', url: '/profile_portal', isAdmin: false, isLogin: true },
]