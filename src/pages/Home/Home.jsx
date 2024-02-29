import FeaturedArtists from "../../components/FeaturedArtists/FeaturedArtists";
import FeaturedWallpapers from "../../components/home/FeaturedWallpapers/FeaturedWallpapers";
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
    </>
  );
};

export default Home;
