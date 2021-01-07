"use strict";

import L from "leaflet";

const colors = [
  "blue",
  "gold",
  "red",
  "green",
  "orange",
  "yellow",
  "violet",
  "grey",
  "black",
  "white",
];

const options = {
  shadowUrl: "img/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
};

exports.icons = colors.reduce((obj, color) => {
  return {
    ...obj,
    [color]: {
      origin: new L.Icon({
        iconUrl: `img/marker-icon-2x-${color}.png`,
        ...options,
      }),
      empty: new L.Icon({
        iconUrl: `img/marker-icon-2x-${color}-x.png`,
        ...options,
      }),
      numbers: [...Array(1000).keys()].map(
        (num) => `img/${color}/marker-icon-2x-${color}-${num}.png`
      ),
    },
  };
}, {});
