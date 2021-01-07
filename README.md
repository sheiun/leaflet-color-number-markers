# leaflet-color-number-markers

color and **number** variations of the standard leaflet markers:

| Color |                                                                Marker 2x                                                                |                                                            Marker                                                            |
| ----- | :-------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
| Blue  | ![Marker Blue 2x  777](https://raw.githubusercontent.com/sheiun/leaflet-color-number-markers/main/img/blue/marker-icon-2x-blue-777.png) | ![Marker Blue](https://raw.githubusercontent.com/sheiun/leaflet-color-number-markers/main/img/blue/marker-icon-blue-777.png) |

## Usage

```js
let blackIcon0 = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/sheiun/leaflet-color-number-markers/main/img/black/marker-icon-2x-black-0.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.marker([51.5, -0.09], { icon: blackIcon0 }).addTo(map);
```
