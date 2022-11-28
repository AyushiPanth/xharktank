# xharktank

## Objective
SharkTank is a panel of potential investors, termed as "Sharks", who listen to entrepreneurs pitch ideas for a business or product they wish to develop. These self-made multi-millionaires judge the business concepts and products pitched and then decide whether to invest their own money to help market and mentor each contestant.

## xharktank Backend
This is backend for the application XharkTank, where entrepreneurs from all around can pitch their unique ideas and investors can offer them an investment in exchange of some equity of their company.
- Pitch your one in a million idea to the panel of sharks.
- Invest in the company which is going to be the next Big thing.


## Tech Stack
- Backend: NodeJs 14
- IDE: VS Code
- API Testing & Documentation: Postman
- Version Control: Git and GitHub
- Database:MongoDB 4.2

## Installation

* XharkTank requires [Node.js](https://nodejs.org/) v14+ and [MongoDB](https://www.mongodb.com) v4+ to run.

### Install the dependencies
```sh
cd lit2019073-iiitl-ac-ME_BUILDOUT_XHARKTANK/
npm install

```
### Start the server
```sh
npm start
```
## File Structure
```sh
.
├── _CRIO_
	      ├── metadata.json
├── assessment
	      ├── main.py
	      ├── requirements.txt
├── controller 
│             ├── pitches
├── models                        
│             ├── pitch.js
├── routes                        
│             ├── router.js
├── utilities                       
│             ├── renameId.js
├── app.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── server_run.sh
├── setup.sh
```
## Endpoints
- ### Post A Pitch

```sh
  POST /pitches
```
Endpoint to create a new pitch and post it to backend

| Body Parameters | Type     | Description                                                                                      |
| :-------------- | :------- | :----------------------------------------------------------------------------------------------- |
| `entrepreneur`  | `string` | **Required**. Name of the entrepreneur posting the pitch                                   |
| `pitchTitle`    | `string` | **Required**. Title of the pitch                                    |
| `pitchIdea`     | `string` | **Required**. Business Idea for the Product they wish to develop                                               |
| `askAmount`     | `float`  | **Required**. Ask Expected Amount for investment                     |
| `equity`        | `float`  | **Required**. Percentage of Equity to be diluted <br> **Min Value:** 0 <br> **Max Value:** 100 |

| Status Code | Description |
| :--- | :--- |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 500 | `INTERNAL SERVER ERROR` |
---

- ### Make a Counter Offer for a Pitch

```sh
  POST /pitches/${pitchId}/makeOffer
```
Endpoint to make a counter offer for a pitch to the backend

| URL Parameter | Type     | Description                                                              |
| :------------ | :------- | :----------------------------------------------------------------------- |
| `pitchId`     | `string` | **Required**. Unique Id of the Pitch made by the entrepreneur |

| Body Parameters | Type     | Description                                                                                        |
| :-------------- | :------- | :------------------------------------------------------------------------------------------------- |
| `investor`      | `string` | **Required**. Name of the investor making a counteroffer                                |
| `comment`       | `string` | **Required**. A comment from the investorr         |
| `amount`        | `float`  | **Required**. Amount ready to invest in the idea                       |
| `equity`        | `float`  | **Required**.Ask Percentage of Equity for a company <br> **Min Value:** 0 <br> **Max Value:** 100 |

| Status Code | Description |
| :--- | :--- |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |
---

- ### Get All Pitches

```sh
  GET /pitches
```
Endpoint to fetch the all the pitches in the reverse chronological order ( i.e. last created one first ) from the backend

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 500 | `INTERNAL SERVER ERROR` |
---

- ### Get Pitch

```sh
  GET /pitches/${pitchId}
```

Endpoint to specify a particular id (identifying the pitch) to fetch a single Pitch.

| URL Parameter | Type     | Description                                        |
| :------------ | :------- | :------------------------------------------------- |
| `pitchId`     | `string` | **Required**. Unique id of the pitch to be fetched |

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |
---

