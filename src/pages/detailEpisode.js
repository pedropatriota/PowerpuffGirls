import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEpisode } from "../redux/ducks/episodeDetailSlice";
import Template from "../template";
import ShowInformations from "../organisms/ShowInfo";
import ExtraInformations from "../molecules/EpisodeInfo";

export default function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEpisode(id));
  }, [dispatch, id]);

  const episodeDetail = useSelector((state) => state.episode);

  useEffect(() => {
    if (!!episodeDetail) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  });
  console.log(episodeDetail);

  const breadcrumb = [
    { name: "Home", goTo: "/" },
    { name: "Detail", goTo: `/episode/${id}` },
  ];

  return (
    <Template list={breadcrumb} loading={loading}>
      <ShowInformations
        src={episodeDetail.image?.original}
        childrenLink={episodeDetail.url}
        childrenHeading={episodeDetail.name}
        htmlNode={episodeDetail.summary}
      />
      <ExtraInformations
        airDate={episodeDetail.airdate}
        airTime={episodeDetail.airtime}
        season={episodeDetail.season}
        number={episodeDetail.number}
      />
    </Template>
  );
}
