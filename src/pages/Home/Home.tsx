import Download from "../../components/home/Download";
import Header from "../../components/home/Header";
import HowItWorks from "../../components/home/HowItWorks";
import Interview from "../../components/home/Interview";
import PopularJob from "../../components/home/PopularJob";
import Recruiting from "../../components/home/Recruiting";
import TopCompany from "../../components/home/company/TopCompany";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Interview />
      <PopularJob />
      <HowItWorks />
      <TopCompany />
      <Download />
      <Recruiting />
    </div>
  );
};

export default Home;
