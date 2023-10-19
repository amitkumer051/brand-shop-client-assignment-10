
import Advantage from "../Advantage/Advantage";
import Banner from "../components/Banner/Banner";
import Brand from "../components/Brand/Brand";
import WorkShop from "../components/WorkShop/WorkShop";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brand></Brand>
            <Advantage></Advantage>
            <WorkShop></WorkShop>
        </div>
    );
};

export default Home;