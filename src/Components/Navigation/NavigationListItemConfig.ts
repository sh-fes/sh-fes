export type TNavigationConfig = {
    to: string
    title: string;
}
const NavigationConfig: TNavigationConfig[] = [
    { title: 'Top', to: '/' },
    { title: 'Index', to: '/index' },
    { title: 'Article', to: '/article' },
    { title: 'Article-0', to: '/article/0' },
    { title: 'Article-1', to: '/article/1' }
]
export default NavigationConfig;