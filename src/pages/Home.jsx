import Popular from "../components/Popular";
import DiscoverTV from "../components/DiscoverTV";
import Discover from "../components/Discover";
import NowPlaying from "../components/NowPlaying";
import TopRated from "../components/TopRated";
function Home() {
  return (
    <div>
      <Discover />
      <Popular />
      <NowPlaying />
      <TopRated />
      <DiscoverTV />
    </div>
  );
}

export default Home;
