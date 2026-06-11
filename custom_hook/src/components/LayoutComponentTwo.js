import useWindowWidth from '../hooks/useWindowWidth';

export default function LayoutComponent() {
    const onSmallScreen = useWindowWidth(768);

    return (
        <div className={onSmallScreen ? 'small-screen' : 'large-screen'}>
             <h1>This is another components</h1>
        </div>
    )
}
