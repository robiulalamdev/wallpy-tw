import FeaturedArtists from "../../components/home/FeaturedArtists/FeaturedArtists";
import FeaturedWallpapers from "../../components/home/FeaturedWallpapers/FeaturedWallpapers";
import Sponsor from "../../components/home/Sponsor/Sponsor";
import WPSStaffPicks from "../../components/home/WPSStaffPicks/WPSStaffPicks";
import Banner from "../../components/home/banner/Banner";
import OfficialWallpapers from "../../components/home/officialWallpapers/OfficialWallpapers";
import MainHeader from "../../components/shared/headers/MainHeader";

const Home = () => {
  return (
    <>
      <MainHeader />
      <Banner />
      <OfficialWallpapers />
      <FeaturedWallpapers />
      <FeaturedArtists />
      <WPSStaffPicks />
      <Sponsor />
    </>
  );
};

export default Home;
