import CursorGlow from './components/shared/CursorGlow.jsx'
import Intro from './components/Intro/Intro.jsx'
import LoveLetter from './components/LoveLetter/LoveLetter.jsx'
import Timeline from './components/Timeline/Timeline.jsx'
import ReasonsGrid from './components/ReasonsGrid/ReasonsGrid.jsx'
import DistanceSection from './components/DistanceSection/DistanceSection.jsx'
import HeartCatchGame from './components/MiniGame/HeartCatchGame.jsx'
import PromiseCards from './components/PromiseCards/PromiseCards.jsx'
import FutureCarousel from './components/FutureCarousel/FutureCarousel.jsx'
import Constellation from './components/Constellation/Constellation.jsx'
import VirtualHug from './components/VirtualHug/VirtualHug.jsx'
import Ending from './components/Ending/Ending.jsx'
import SecretFooter from './components/shared/SecretFooter.jsx'

// Personalize here — change once, and it flows through the whole site.
const HER_NAME = 'Dhvanu'

export default function App() {
  return (
    <div className="relative">
      <CursorGlow />
      <Intro name={HER_NAME} />
      <LoveLetter />
      <Timeline />
      <ReasonsGrid />
      <DistanceSection />
      <HeartCatchGame />
      <PromiseCards />
      <FutureCarousel />
      <Constellation />
      <VirtualHug />
      <Ending name={HER_NAME} />
      <SecretFooter />
    </div>
  )
}
