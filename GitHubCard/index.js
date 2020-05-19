/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards');
axios.get('https://api.github.com/users/jladrondeguevara')
.then(response => {
  cards.appendChild(cardMaker(response.data));
})



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


const gitUserCard = (login) => {
  const newCard = document.createElement('div');
  cards.appendChild(newCard);
  return newCard
}

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

followersArray[0] = 'tetondan';
followersArray[1] = 'dustinmyers';
followersArray[2] = 'justsml';
followersArray[3] = 'luishrd';
followersArray[4] = 'bigknell';

followersArray.forEach(url => {
  axios.get(`https://api.github.com/users/${url}`)
  .then(response => {
    cards.appendChild(cardMaker(response.data))
    console.log(response.data);
  })
})


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const cardMaker = (data) => {
  const cardDiv = document.createElement('div')
  const image = document.createElement('img')
  const cardInfoDiv = document.createElement('div')
  const cardTitle = document.createElement('h3')
  const cardUsername = document.createElement('p')
  const cardLocation = document.createElement('p')
  const cardProfileParagraph = document.createElement('p')
  const cardGitLink = document.createElement('a')
  const cardFollowers = document.createElement('p')
  const cardFollowing = document.createElement('p')
  const cardBio = document.createElement('p')

  //adding class names and attributes
  cardDiv.classList.add('card')
  image.setAttribute('src', data.avatar_url)
  cardInfoDiv.classList.add('card-info')
  cardTitle.classList.add('name')
  cardUsername.classList.add('username')
  cardGitLink.setAttribute('href', data.html_url)

  // adding textcontent
  cardLocation.textContent = `Location: ${data.location}`;
  cardProfileParagraph.textContent = `Profile: `;
  cardFollowers.textContent = `Followers: ${data.followers}`;
  cardFollowing.textContent = `Following: ${data.following}`;
  cardGitLink.textContent = data.html_url;
  cardBio.textContent = `Bio: ${data.bio}`



  //defining hierarchy
  cardDiv.appendChild(image);
  cardDiv.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(cardTitle);
  cardInfoDiv.appendChild(cardUsername);
  cardInfoDiv.appendChild(cardLocation);
  cardInfoDiv.appendChild(cardProfileParagraph);
  cardProfileParagraph.appendChild(cardGitLink);
  cardInfoDiv.appendChild(cardFollowers);
  cardInfoDiv.appendChild(cardFollowing);
  cardInfoDiv.appendChild(cardBio);
  return cardDiv;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
