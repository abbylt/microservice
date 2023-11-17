# Project Name
USDA ARMS Data Fetch

# Project Description
Oregon State University
CS 361 Software Engineering I
Fall 2023

USDA ARMS Data Fetch is a simple microservice that fetches survey data from the USDA ARMS API. It is designed to specifically integrate into my partner's application, a data visualization app for agricultural data. The microservice will return streamlined data that will be used to populate the filters available to the user as well as the actual data displayed in the dashboard.

# Installation
* Clone this repository [here] (https://github.com/abbylt/microservice).
* Run npm install to install all dependencies.

# Usage
* Run npm start to start the application on localhost:8080.
* This API can also be accessed directly from https://cs361-microservice-405022.uc.r.appspot.com.

## Get survey data

### POST /api/survey

**Request Body**: Required

**Request Body Format**: JSON 

**Request Body Attributes**:

| Attribute | Description | Required |
| --- | --- | --- |
| year | The years that relate to the data pulled (Integer or an Array of Integers) | Yes |
| report | The name of a report (String or Array of Strings) | No* | 
| variable | Variable related to different reports (String or Array of Strings) | No* | 
| report | The name of a report (String or Array of Strings) | No | 
| sub_report | The name of a sub-report (String or Array of Strings) | No | 
| category | The name of a category (String or Array of Strings) | No | 
| category_value | The value for a category (String or Array of Strings) | No | 
| category2 | The name of a category (String or Array of Strings) | No | 
| category2_value | The value of a category (String or Array of Strings) | No | 
| state | The name of a U.S. state (String or Array of Strings) | No | 
| farmtype | A type of farm (String or Array of Strings) | No |

* Request **MUST** contain either the report or variable attributes

### Author
Abby Thornton 

### License
This project is available under the MIT License.