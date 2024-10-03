import Download from "../../components/home/Download";
import Header from "../../components/home/Header";
import HowItWorks from "../../components/home/HowItWorks";
import PopularJob from "../../components/home/PopularJob";
import TopCompany from "../../components/home/company/TopCompany";

const Home = () => {
  return (
    <div className="">
      <Header />
      <PopularJob />
      <HowItWorks />
      <TopCompany />
      <Download />
    </div>
  );
};

export default Home;
