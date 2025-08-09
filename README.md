# Bohusleden

A small webapp to view and plan hikes along [Bohusleden](https://www.westswedentrails.com/en/delled/bohusleden).

## Updating the source data

The source data is stored in `src/data/trail.json`, the data is fetched from [OpenStreetMap](https://openstreetmap.org/) using [Overpass Turbo](https://overpass-turbo.eu/).

This is the query used to get the GeoJSON:

```
[out:json][timeout:25];
rel(280016);
(._;>>;);
out;
```
