export type TNavigationConfig = {
    to: string
    title: string;
}
const NavigationConfig: TNavigationConfig[] = [
    { title: 'Top', to: '/' },
    { title: 'Musics', to: '/products' },
    { title: 'Videos', to: '/reports' },
    { title: 'Notify', to: '/' },
    { title: 'Privacy', to: '/' }
]
export default NavigationConfig;