import { useEffect } from "react";
import MyResponsiveBar from "./components/Bargraph";
import CardSection from "./components/CardSection";
import FactorsList from "./components/FactorsList";
import { getTierStars, makePercentage } from "./helpers/helpers";
import * as opportunities from "./opportunities.json";

const Card = ({ selectedRow, setSelectedRow }) => {
  const data = opportunities.default;

  // Handle arrow key clicks, navigates between cards
  const handleEvent = (e) => {
    if (e.code === "ArrowLeft" || e.code === "ArrowRight") {
      const modifier = e.code === "ArrowLeft" ? -1 : +1;
      const newRow = data.find((x) => x.oppId === selectedRow.oppId + modifier);
      setSelectedRow(newRow);
    }
  };

  // Adds listener for arrow keys on mount, removes on dismount
  useEffect(() => {
    document.addEventListener("keydown", handleEvent);

    return () => {
      document.removeEventListener("keydown", handleEvent);
    };
  });

  // Splits up Opp Name into arr
  const oppNameArr = selectedRow.oppName.split("-");
  const cardTitle = (
    <>
      {oppNameArr[2]}{" "}
      <span id="cardTitleSpan">
        {oppNameArr[1]} {oppNameArr[0]}
      </span>
    </>
  );

  // Sorts factors from highest value to lowest
  const sortData = (data) =>
    data.sort((a, b) => b.weight.value - a.weight.value);

  // Destructured props from selectedRow
  const {
    salesRepName,
    amount,
    product,
    stage,
    pilytixTier,
    repProbability,
    pilytixProbability,
    probabilityHistory,
    pilytixFactorsIncreasingWin,
    pilytixFactorsDecreasingWin
  } = selectedRow;

  const sectionOneInfo = [
    { label: "Related Sales Representative", value: salesRepName },
    { label: "Amount", value: amount.toLocaleString() },
    { label: "Product", value: product },
    { label: "Stage", value: stage },
    { label: "Tier", value: getTierStars(pilytixTier[0]) },
    { label: "Rep Probability", value: makePercentage(repProbability) },
    { label: "Pilytix Probability", value: makePercentage(pilytixProbability) }
  ];

  // Holds section info (title and content)
  const sections = [
    {
      title: cardTitle,
      content: sectionOneInfo.map((x, i) => (
        <div key={i} className="opp-info-line">
          <strong>{x.label}:</strong>
          <p className="info-text">{x.value}</p>
        </div>
      )),
      data: true,
      fullHeight: true
    },
    {
      title: "Probability History",
      content: <MyResponsiveBar history={probabilityHistory} />,
      data: probabilityHistory
    },
    {
      title: "Factors Increasing Win",
      content: <FactorsList data={pilytixFactorsIncreasingWin} />,
      data: pilytixFactorsIncreasingWin && sortData(pilytixFactorsIncreasingWin)
    },
    {
      title: "Factors Descreasing Win",
      content: <FactorsList data={pilytixFactorsDecreasingWin} />,
      data:
        pilytixFactorsDecreasingWin &&
        sortData(pilytixFactorsDecreasingWin).reverse()
    }
  ];

  return (
    <div id="modalWrapper">
      <div id="cardContainer">
        {/* Map out sections on card */}
        {sections.map((x, idx) => (
          <CardSection
            key={idx}
            title={x.title}
            content={x.content}
            data={x.data}
            fullHeight={x.fullHeight}
          />
        ))}
      </div>

      {/* This div is used as an opacity layer to dim the table when the card is displayed. */}
      {/* Clicking outside of the card will cause the card to close by setting selectedRow to null */}
      <div onClick={(e) => setSelectedRow(null)} id="opacityShadow"></div>
    </div>
  );
};

export default Card;
