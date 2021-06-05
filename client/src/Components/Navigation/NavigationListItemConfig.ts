export type TNavigationConfig = {
    to: string
    title: string;
}
const NavigationConfig: TNavigationConfig[] = [
    { title: 'Top', to: '/' },
    { title: 'Musics', to: '/index' },
    { title: 'Videos', to: '/index' },
    { title: 'Notify', to: '/' },
    { title: 'Privacy', to: '/' }
]
export default NavigationConfig;