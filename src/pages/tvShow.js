import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShow } from "../redux/ducks/showSlice";
import { getSeason } from "../redux/ducks/seasonSlice";
import Template from "../template";
import Accordion from "../organisms/Accordion";
import ShowInformations from "../organisms/ShowInfo";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShow());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getSeason());
  }, [dispatch]);

  const showInfo = useSelector((state) => state.showInfo);
  const season = useSelector((state) => state.season);

  const episodes = useSelector((state) => state.episodes);
  console.log(episodes);

  const breadcrumb = [{ name: "TV Show", goTo: "/" }];

  return (
    <Template list={breadcrumb}>
      <ShowInformations
        src={showInfo.image?.original}
        childrenLink={showInfo.officialSite}
        childrenHeading={showInfo.name}
        htmlNode={showInfo.summary}
      />

      <Accordion seasons={season} episodes={episodes} />
    </Template>
  );
}
