import About from "../../components/home-two/about";
import BrandLogo from "../../components/home-two/brand-logo";
import CallToAction from "../../components/home-two/call-to-action";
import Faq from "../../components/home-two/faq";
import Features from "../../components/home-two/features";
import Hero from "../../components/home-two/hero";
import Pricing from "../../components/home-two/pricing";
import Services from "../../components/home-two/services";
import Testimonials from "../../components/home-two/testimonials";
import Video from "../../components/home-two/video";
import Teams from "../../components/home-one/teams";
// Teams images
import Team1Img from "../../assets/images/team/team1.png";
import Team2Img from "../../assets/images/team/team2.png";
import Team3Img from "../../assets/images/team/team3.png";
import Team4Img from "../../assets/images/team/team4.png";

const teamsData = [
  {
    id: crypto.randomUUID(),
    name: "Andrew Mark",
    designation: "Creative Director",
    img: Team1Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Jack Taylor",
    designation: "Senior Designer",
    img: Team2Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Martine Joy",
    designation: "Project Manager",
    img: Team3Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Adam Straw",
    designation: "Web Developer",
    img: Team4Img,
  },
];
function HomeTwo() {
  return (
    <>
      <div className="aximo-all-section bg-light2">
        <Hero />
        <BrandLogo />
        <Teams teams={teamsData} />
        <About />
        <Services />
        <Testimonials />
        <Faq />
        <CallToAction />
      </div>
    </>
  );
}

export default HomeTwo;
