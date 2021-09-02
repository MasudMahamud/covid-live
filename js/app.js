
document.getElementById("search-button").addEventListener("click", function () {
   const userInput = document.getElementById("user-input").value;

   userCountry(userInput);
   document.getElementById('user-input').value = "";

})
function userCountry(countryName) {
   fetch(`https://api.covid19api.com/total/country/${countryName}`)
      .then(res => res.json())
      .then(result => {
         const country = result.reverse()[0];
         document.getElementById('show-details').innerText = ""
         const p = document.createElement("p");
         p.innerHTML = `
      <strong>Date: ${country.Date} </strong> <br/><br/>
       <h1> Name: ${country.Country} </h1> 
       <h2>Total Case: ${country.Confirmed} </h2> 
       <h3>Total Death: ${country.Deaths} </h3> <br/>
       <h4>Total Recoverd: ${country.Active} </h4>  `

         document.getElementById('show-details').appendChild((p));
         document.getElementById('show-details').style.display = "block"
      })
}
