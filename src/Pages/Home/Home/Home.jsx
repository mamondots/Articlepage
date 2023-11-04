import Informa from "../../../Informa/Informa";
import Banner from "../Banner/Banner";
import OutdoorResearch from "../OutdoorResearch/OutdoorResearch";
import Research from "../Research/Research";
import SubLink from "../SubLink/SubLink";
import Support from "../Support/Support";

const Home = () => {
    return (
        <div>
           <Informa></Informa>
           <Banner></Banner>
           <SubLink></SubLink>
           <Support></Support>
           <Research></Research>
           <OutdoorResearch></OutdoorResearch>
        </div>
    );
};

export default Home;