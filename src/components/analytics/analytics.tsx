import dynamic from 'next/dynamic'

const OpenPanelAnalytics = dynamic(
  () => import('./open-panel-analytics'),
  { ssr: false }
)
const GoogleAnalytics = dynamic(
  () => import('./google-analytics'),
  { ssr: false }
)
const PlausibleAnalytics = dynamic(
  () => import('./plausible-analytics').then((mod) => ({ default: mod.PlausibleAnalytics })),
  { ssr: false }
)

export function Analytics() {
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  return (
    <>
      <OpenPanelAnalytics />
      <GoogleAnalytics />
      <PlausibleAnalytics />
    </>
  )
}
