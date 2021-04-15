import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

const Accordion = ({ seasons, episodes }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setClicked(0);
  }, []);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <S.AccordionSection>
      {seasons.map((season, index) => {
        return (
          <React.Fragment key={season.id}>
            <S.Wrap onClick={() => toggle(index)}>
              <h1>{`Season ${season.number}`}</h1>
              <span>{clicked === index ? "-" : "+"}</span>
            </S.Wrap>
            {clicked === index ? (
              <S.Dropdown>
                {episodes.map((episode) => {
                  const { data } = episode;
                  console.log(data);
                  return data.map(
                    (item) =>
                      item.season === season.number && (
                        <Link to={`/episode/${item.id}`}>
                          {item.number} - {item.name}
                        </Link>
                      )
                  );
                })}
              </S.Dropdown>
            ) : null}
          </React.Fragment>
        );
      })}
    </S.AccordionSection>
  );
};

export default Accordion;
