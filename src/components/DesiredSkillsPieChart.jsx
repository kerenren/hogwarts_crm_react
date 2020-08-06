import React from "react";

import { ResponsivePie } from "@nivo/pie";

const DesiredSkillsPieChart = ({ data}) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    startAngle={-180}
    innerRadius={0.45}
    cornerRadius={6}
    colors={{ scheme: "nivo" }}
    borderWidth={2}
    borderColor={{ from: "color", modifiers: [["brighter", 0.2]] }}
    radialLabel={function (e) {
      return e.id + " (" + e.value + ")";
    }}
    radialLabelsSkipAngle={0}
    radialLabelsTextXOffset={6}
    radialLabelsTextColor={{ from: "color", modifiers: [] }}
    radialLabelsLinkOffset={0}
    radialLabelsLinkDiagonalLength={16}
    radialLabelsLinkHorizontalLength={28}
    radialLabelsLinkStrokeWidth={1}
    radialLabelsLinkColor={{ from: "color" }}
    slicesLabelsSkipAngle={10}
    slicesLabelsTextColor={{ from: "color", modifiers: [] }}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "Spells",
        },
        id: "lines",
      },
      {
        match: {
          id: "Quidditch",
        },
        id: "dots",
      },
      {
        match: {
          id: "Apparate",
        },
        id: "dots",
      },
      {
        match: {
          id: "Potion making",
        },
        id: "lines",
      },
      {
        match: {
          id: "Metamorphmagi",
        },
        id: "lines",
      },
      {
        match: {
          id: "Parseltongue (talking with snakes)",
        },
        id: "dots",
      },
      {
        match: {
          id: "Animagus",
        },
        id: "lines",
      },
    ]}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        translateY: 56,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: "#999",
        symbolSize: 18,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);

export default DesiredSkillsPieChart;
