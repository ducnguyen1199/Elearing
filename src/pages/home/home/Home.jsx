import React from "react";
import Intro from "../../../components/Intro";
import Category from "../../../components/Category";
import StepBuyCourse from "../../../components/StepBuyCourse";
import ListCourse from "../../../components/ListCourse";
import InfoElearning from "../../../components/InfoElearning";
import Feel from "../../../components/Feel";
import Loading from "../../../components/Loading";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  return (
    <>
      <Loading />
      <div className="home">
        <Intro />
        <Category />
        <ListCourse history={history} />
        <InfoElearning />
        <StepBuyCourse />
        <Feel />
      </div>
    </>
  );
};

export default Home;
