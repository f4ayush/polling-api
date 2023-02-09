# polling-api

This is a polling api which can be  used to ask questions and cast votes.

Users can add their own options also

There are 5 apis in this app,
- /questions/create (To create a question)
- /questions/:id/options/create (To add options to a specific question)
- /questions/:id/delete (To delete a question)
- /options/:id/delete (To delete an option)
- /options/:id/add_vote (To increment the count of votes)
- /questions/:id (To view a question and it’s options)


## Local setup:

Run command `npm install` to install the dependencies

and `node index.js` to run the project

You can use the postman collection for reference, click [here](https://api.postman.com/collections/13754116-b7f21859-fbf0-4f11-a60a-fc25fb353212?access_key=PMAT-01GRTJ1QSBJ515JW7PBN46A1G0)