import useWindowWidth from '../hooks/useWindowWidth'

export default function LayoutComponent() {
  const onSmallScreen = useWindowWidth(600)
  return (
    <div>
      <h1>You are on a {onSmallScreen ? 'small' : 'large'} screen</h1>
    </div>
  )
}
