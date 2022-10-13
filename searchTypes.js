const url = "https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=";
const results = document.querySelector(".results");

const fetchPlayers = async (searchValue) => {
  const response = await fetch(`${url}${searchValue}`);
  const data = await response.json();
  const players = data.player;
  const list = players
    .map((item) => {
      const {
        dateBorn: born,
        strBirthLocation: birthPlace,
        strPlayer: name,
        strHeight: height,
        strWeight: weight,
        strThumb: image,
        idPlayer: ID,
        strDescriptionEN: description,
      } = item;
      if (!image || !height || !weight || !description) {
        console.log("no image");
      } else {
        return `<div class="card">
            <a href="player.html?id=${ID}" target="__blank">
            <img src="${image}" class="player-img">
            </a>
            <div class="card-info">
                <p>${name}</p>
                
                
            </div>
        </div>`;
      }
    })
    .join("");
  results.innerHTML = list;
};

const fetchBasketBall = async (searchValue) => {
  const response = await fetch(`${url}${searchValue}`);
  const data = await response.json();
  const players = data.player;
  console.log(players);
  const list = players
    .map((item) => {
      const {
        dateBorn: born,
        strBirthLocation: birthPlace,
        strPlayer: name,
        strHeight: height,
        strWeight: weight,
        strThumb: image,
        idPlayer: ID,
        strDescriptionEN: description,
        strSport: sport,
      } = item;
      if (
        !image ||
        !height ||
        !weight ||
        !description ||
        sport != "Basketball"
      ) {
        console.log("no image");
        return;
      } else {
        return `<div class="card">
            <a href="player.html?id=${ID}" target="__blank">
            <img src="${image}" class="player-img">
            </a>
            <div class="card-info">
                <p>${name}</p>
                
                
            </div>
        </div>`;
      }
    })
    .join("");
  results.innerHTML = list;
};

const fetchFootBall = async (searchValue) => {
  const response = await fetch(`${url}${searchValue}`);
  const data = await response.json();
  const players = data.player;
  console.log(players);
  const list = players
    .map((item) => {
      const {
        dateBorn: born,
        strBirthLocation: birthPlace,
        strPlayer: name,
        strHeight: height,
        strWeight: weight,
        strThumb: image,
        idPlayer: ID,
        strDescriptionEN: description,
        strSport: sport,
      } = item;
      if (
        !image ||
        !height ||
        !weight ||
        !description ||
        sport != "American Football"
      ) {
        console.log("no image");
        return;
      } else {
        return `<div class="card">
            <a href="player.html?id=${ID}" target="__blank">
            <img src="${image}" class="player-img">
            </a>
            <div class="card-info">
                <p>${name}</p>
                
                
            </div>
        </div>`;
      }
    })
    .join("");
  results.innerHTML = list;
};

export { fetchBasketBall, fetchFootBall, fetchPlayers };
