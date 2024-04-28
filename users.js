async function displayInformation(){

    let information;

    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        information = await  response.json();
        console.log(information)
  

        let cardElement ="";

        cardElement = document.createElement("div");
        cardElement. classList.add("row");
        document.body.appendChild(cardElement);

        for (const data of information){
            cardElement.innerHTML+=
                `
                <div class="card col-lg-3">
                  <div class="card-body">
                    <h4><i class="fa-regular fa-user"></i> Kişisel Bilgiler</h4>
                    <p>Id: ${data.id}</p>
                    <p>Name: ${data.name}</p>
                    <p>Username: ${data.username}</p>
            
                    <h4><i class="fa-regular fa-map"></i> Adres Bilgileri</h4>
                    <p>Street: ${data.address.street}</p>
                    <p>Suite: ${data.address.suite}</p>
                    <p>City: ${data.address.city}</p>
                    <p>Zipcode: ${data.address.zipcode}</p>
            
                    <h4><i class="fa-regular fa-building"></i> Şirket Bilgileri</h4>
                    <p>Copmany Name: ${data.company.name}</p>
                    <p>Company Catch Phrase: ${data.company.catchPhrase}</p>
                    <p>Company BS: ${data.company.bs}</p>
            
                    <h4><i class="fa-regular fa-comments"></i> İletişim Bilgileri</h4>
                    <p>Email: ${data.email}</p>
                    <p>Phone Number: ${data.phone}</p>
                    <p>Web Site: ${data.website}</p>
                  </div>
                  <a href ="posts.html?id=${data.id}" target="_blank" class= "btn btn-outline-dark mb-4 mt-4 ">View Profile</a>
                </div>
              `
            }

    }
    catch(err){
        console.log("Bir hata oluştu: " + err)
    }
    return information;
}

displayInformation();






