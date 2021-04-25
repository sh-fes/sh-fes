export type TNavigationConfig = {
    id: number;
    to: string
    title: string;
    color?: string;
}
const NavigationConfig: TNavigationConfig[] = [
    { id: 0, title: '1', to: '/' },
    { id: 1, title: '2', to: '/reports' },
    { id: 2, title: '3', to: '/products' },
    { id: 3, title: '4', to: '/' }
]
export default NavigationConfig;