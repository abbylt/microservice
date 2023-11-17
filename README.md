# Project Name
USDA ARMS Data Fetch

# Project Description
Oregon State University  
CS 361 Software Engineering I  
Fall 2023

USDA ARMS Data Fetch is a simple microservice that fetches survey data from the USDA ARMS API. It is designed to specifically integrate into my partner's application, a data visualization app for agricultural data. The microservice will return streamlined data that will be used to populate the filters available to the user as well as the actual data displayed in the dashboard.

# Installation
* Clone this repository [here](https://github.com/abbylt/microservice).
* Run npm install to install all dependencies.

# Usage
* Run npm start to start the application on localhost:8080.
* This API can also be accessed directly from https://cs361-microservice-405022.uc.r.appspot.com.

# POST /surveydata
Get survey data

## Request
**Request Body**: Required  
**Request Body Format**: JSON  
**Request Body Attributes**:  
> [!IMPORTANT] 
> Request body **MUST** contain either the report or variable attributes

| Attribute | Description | Data Type | Required |
| --- | --- | --- | --- |
| year | The years that relate to the data pulled | Integer or Array of Integers | Yes |
| report | The name of a report | String or Array of Strings | No* | 
| variable | Variable related to different reports | String or Array of Strings | No* | 
| report | The name of a report | String or Array of Strings | No | 
| sub_report | The name of a sub-report | String or Array of Strings | No | 
| category | The name of a category | String or Array of Strings | No | 
| category_value | The value for a category | String or Array of Strings | No | 
| category2 | The name of a category | String or Array of Strings | No | 
| category2_value | The value of a category | String or Array of Strings | No | 
| state | The name of a U.S. state | String or Array of Strings | No | 
| farmtype | A type of farm | String or Array of Strings | No |

**Sample Request**:

`POST https://cs361-microservice-405022.uc.r.appspot.com/surveydata`

Request body: 
```
{
    "year": [2020, 2021],
    "variable": "Acres operated per farm",
    "state": "Washington",
    "farmtype": "Farm Operator Household"
}
```

## Response 

**Response Body Format**: JSON 

**Sample Response**:  

Response body:  
```
{
    "status": "ok",
    "info": {
        "timing": {
            "executing": 362,
            "unit": "ms"
        },
        "result_coverage": "total",
        "total": {
            "record_count": 1
        }
    },
    "data": [
        {
            "year": 2020,
            "state": "Washington",
            "report": "Structural Characteristics",
            "farmtype": "Farm Operator Households",
            "category": "Operator Age",
            "category_value": "34 years or younger",
            "category2": "All Farms",
            "category2_value": "TOTAL",
            "variable_id": "acres",
            "variable_name": "Acres operated per farm",
            "variable_sequence": 40,
            "variable_level": 1,
            "variable_group": null,
            "variable_group_id": null,
            "variable_unit": "Acres",
            "variable_description": "The number of acres owned by the operation plus the number of acres rented from others minus the number of acres rented to others.",
            "variable_is_invalid": false,
            "estimate": 475,
            "median": null,
            "statistic": "MEAN",
            "rse": 70.4,
            "unreliable_estimate": 0,
            "decimal_display": 0
        },
    ]
}
```

### Author
Abby Thornton 

### License
This project is available under the MIT License.
