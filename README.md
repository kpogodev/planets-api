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

## Query Params (optional)

| param | value | options | description |
|--|--|--|--|
| limit  | number | | Limits the number of results returned in a single response. |
| skip | number || Allows to specify the number of records to be omitted  |
| sort | string || Sorts the results based on a specified field, such as the planet's name, its size, etc. ||
| order | string |asc, desc| Specifies the order of the sorted results, such as ascending or descending. |
| name  | string || Search by name. |
| include | string |facts, details| Populates the response with additional information, such as details and facts. |

## Request Example

    GET /api/v1/planets?include=facts

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
			"facts": [
				{
					"id": "clhc1at2u0002obywkhcyn97l",
					"planetId": "clhc19fb30000obywkpn1y825",
					"fact": "Mercury is the smallest planet in our solar system"
				},
				{
					"id": "clhc1bl690004obywhh55qeav",
					"planetId": "clhc19fb30000obywkpn1y825",
					"fact": "It has the most extreme temperature swings of any planet in our solar system"
				},
				{
					"id": "clhc1c02d0006obyw48703yd7",
					"planetId": "clhc19fb30000obywkpn1y825",
					"fact": "A day on Mercury (the time it takes for one rotation) is longer than its year (the time it takes to complete one orbit around the Sun)"
				}
			]
	    }
    ]
