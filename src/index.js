/* @preserve
 * leaflet-color-number-markers
 * (c) 2021 sheiun
 */
"use strict";

import L from "leaflet";

const url =
  "https://raw.githubusercontent.com/sheiun/leaflet-color-number-markers/main/";

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

export default colors.reduce((obj, color) => {
  return {
    ...obj,
    [color]: {
      origin: new L.Icon({
        iconUrl: url + `dist/img/marker-icon-2x-${color}.png`,
        ...options,
      }),
      empty: new L.Icon({
        iconUrl: url + `dist/img/marker-icon-2x-${color}-x.png`,
        ...options,
      }),
      numbers: [...Array(1000).keys()].map(
        (num) =>
          new L.Icon({
            iconUrl:
              url + `dist/img/${color}/marker-icon-2x-${color}-${num}.png`,
            ...options,
          })
      ),
    },
  };
}, {});
