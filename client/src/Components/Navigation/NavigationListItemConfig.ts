export type TNavigationConfig = {
    to: string
    title: string;
}
const NavigationConfig: TNavigationConfig[] = [
    { title: 'Top', to: '/' },
    { title: 'Index', to: '/index' },
    { title: 'Article', to: '/article' },
    { title: 'Index', to: '/index' },
    { title: 'Article', to: '/article' }
]
export default NavigationConfig;