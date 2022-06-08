import Popular from "../components/Popular";
import DiscoverTV from "../components/DiscoverTV";
import Discover from "../components/Discover";
import NowPlaying from "../components/NowPlaying";
function Home() {
  return (
    <div>
      <Discover />
      <Popular />
      <NowPlaying />
      <DiscoverTV />
    </div>
  );
}

export default Home;
