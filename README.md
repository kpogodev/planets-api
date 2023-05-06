# Planets API

The Planets API provides data about the planets in our solar system, including their names, orbital characteristics, physical properties, and more. With this API, you can explore the fascinating worlds that orbit our sun, from the scorching hot surface of Mercury to the frigid expanse of Neptune.

## Basic Information
**Production Domain**:  https://planets-api-production.up.railway.app
**Response Type:** JSON
**Authentication:** TBD

## Endpoints
| method | url| description  |
|--|--|--|
| **GET** | /api/v1/planets | Returns a list of all planets in the solar system, including their names, mass and other basic information. |
| **GET** | /api/v1/planets/{id} | Returns detailed information about a specific planet |

## Query Params

| param | value | options | description |
|--|--|--|--|
| limit  | number | | Limits the number of results returned in a single response. |
| skip | number || Allows to specify the number of records to be omitted  |
| sort | string || Sorts the results based on a specified field, such as the planet's name, its size, etc. ||
| order | string |asc, desc| Specifies the order of the sorted results, such as ascending or descending. |
| name  | string || Search by name. |
| include | string |facts, details| Search by name. |

## Response Example

    [
	    {
		  "id": "clhc19fb30000obywkpn1y825",
		  "name": "Mercury",
		  "distanceFromStar": "57.91",
		  "oribitalPeriod": 87.97,
		  "diameter": 4879,
		  "mass": "0.055",
		  "moons": 0,
		  "hasRings": false,
		  "minTemperature": -173,
		  "maxTemperature": 427,
		  "atmosphere": "Virtually no atmosphere"
	    }
    ]
