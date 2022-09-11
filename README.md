# server scripts
npm start - command to start a server
npm run server - command to start server whit nodemon (for developing)

# url for fetch requests
localhost:3000/get-people - get request for a complete list of people
localhost:3000/get-people/:id - get request for data of a specific person
localhost:3000/update-people-list - post request to replace the old list with the new one
localhost:3000/add-human - post request to add a new person's data to the list

# human data object template
{ 
    name: 'Oleg', 
    surname: 'Oziava', 
    salary: '1000', 
    promotion: false, 
    id: '0' 
}