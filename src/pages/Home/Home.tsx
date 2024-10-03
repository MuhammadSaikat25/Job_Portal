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
    </div>
  );
};

export default Home;
