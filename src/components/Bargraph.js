import { ResponsiveBar } from "@nivo/bar";
import { makePercentage } from "../helpers/helpers";

const MyResponsiveBar = ({ history }) => {
  const data = history.map((x) => {
    return {
      daysAgo: x.daysAgo,
      PILITIX: makePercentage(x.pilytixProb).replace("%", ""),
      Rep: makePercentage(x.repProb).replace("%", "")
    };
  });

  return (
    <div id="barGraphWrapper">
      <ResponsiveBar
        data={data}
        theme={{
          axis: {
            ticks: {
              text: {
                fill: "#fefefe"
              }
            },
            legend: {
              text: {
                fill: "#fefefe"
              }
            }
          }
        }}
        width={data.length > 10 ? 600 : 375}
        groupMode={"grouped"}
        enableLabel={false}
        colors={({ id }) => (id === "Rep" ? "#EB455F" : "#00C6AE")}
        keys={["PILITIX", "Rep"]}
        indexBy="daysAgo"
        margin={{ top: 30, right: 0, bottom: 50, left: 50 }}
        padding={0.2}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        minValue={0}
        maxValue={100}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Days",
          legendPosition: "middle",
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Percentage",
          legendPosition: "middle",
          legendOffset: -40
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "top-left",
            direction: "row",
            translateX: 0,
            translateY: -30,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            symbolSize: 20,
            itemTextColor: "#fefefe"
          }
        ]}
        role="application"
        isInteractive={false}
        ariaLabel="Nivo bar chart"
      />
    </div>
  );
};

export default MyResponsiveBar;
