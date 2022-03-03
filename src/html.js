function generateHTML(teamArray) {

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="style.css">
      <title>Object Oriented Profiler</title>
  </head>
  
  <body>
      <h1 id="header">
          <div>My team</div>
      </h1>
      
      <div class="cardsContainer">
          ${generateCards(teamArray)}
      </div>
  
  </body>
  
  </html>
`
}

function generateCards(arr) {
  let managerCards =''
  let engCards =''
  let intCards =''
  arr.forEach(employee => {
    if(employee.getRole() == "Manager"){
      managerCards +=  `
      <div class="employeeCard">
        <div class="subCard">
          <div class="employeeName">Name: ${employee.name} </div>
          <div class="employeeRole">Position: ${employee.getRole()} </div>
          <div class="employeeId">Id Number: ${employee.id} </div>
          <div class="employeeEmail">Email: <a href=mailto:${employee.email}> <br> ${employee.email}</a></div>
          <div class="employeeEtc">Office Number: ${employee.officeNumber} </div>
        </div>
      </div>`
    }else if(employee.getRole() == "Engineer"){
      engCards += `
      <div class="employeeCard">
        <div class="subCard">
          <div class="employeeName">Name: ${employee.name} </div>
          <div class="employeeRole">Position: ${employee.getRole()} </div>
          <div class="employeeId">Id Number: ${employee.id} </div>
          <div class="employeeEmail">Email: <a href=mailto:${employee.email}> <br> ${employee.email}</a></div>
          <div class="employeeEtc">GitHub Username:<a href="https://github.com/${employee.github}" target="_blank"> ${employee.github} </div>
        </div>
      </div>`
    }else {
      intCards += `
      <div class="employeeCard">
        <div class="subCard">
          <div class="employeeName">Name: ${employee.name} </div>
          <div class="employeeRole">Position: ${employee.getRole()} </div>
          <div class="employeeId">Id Number: ${employee.id} </div>
          <div class="employeeEmail">Email:  <a href=mailto:${employee.email}> <br> ${employee.email}</a></div>
          <div class="employeeEtc">Intern's School: ${employee.school} </div>
        </div>
      </div>`
    }
  })
  // returning it in this order will arrange manger card 1st, then engineer, then intern
  //regardless of when they are added
  return managerCards + engCards + intCards
}

module.exports = generateHTML;























