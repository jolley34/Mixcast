const Tracklist = [
  {
    title: "Years ft. Matthew Koma",
    artist: "Alesso",
    image:
      "https://i1.sndcdn.com/artworks-0dd6aca7-307f-4122-88b5-b3493d480b4b-0-t500x500.jpg",
    link: "audio/years.mp3",
    id: 1,
  },
  {
    title: "Walking Alone ft. Erik Hecht",
    artist: "Dirty South & Those Usual Suspects",
    image: "https://i.scdn.co/image/ab67616d0000b2735864626657091d5c55757c3f",
    link: "audio/walkingalone.mp3",
    id: 2,
  },
  {
    title: "Titanium ft. Sia (Alesso Remix)",
    artist: "David Guetta",
    image:
      "https://eng4viet.com/wp-content/uploads/2020/11/bai-hat-titanium.jpg",
    link: "audio/titanium.mp3",
    id: 3,
  },
  {
    title: "Drowning ft. LAURA V (Avicii Remix)",
    artist: "Armin van Buuren",
    image: "https://i1.sndcdn.com/artworks-1qRbideVmP1N-0-t500x500.png",
    link: "audio/drowning.mp3",
    id: 4,
  },
  {
    title: "Leave the World Behind ft. Deborah Cox",
    artist: "Axwell, Ingrosso, Angello, Laidback Luke",
    image: "https://i.scdn.co/image/ab67616d0000b2735be2b02a0948b3a6f4dbf087",
    link: "audio/ltwb.mp3",
    id: 5,
  },
  {
    title: "Every Teardrop Is A Waterfall (Avicii 'Tour' Mix)",
    artist: "Coldplay",
    image: "https://i1.sndcdn.com/artworks-000042478557-58gk8j-t500x500.jpg",
    link: "audio/everyteardrop.mp3",
    id: 6,
  },
  {
    title: "City Of Dreams ft. Ruben Haze",
    artist: "Dirty South, Alesso",
    image:
      "https://i.discogs.com/rktQqBOmkVOLVYx-Bn-wkQLACFfkmRrhqMBLpiko5CI/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM4MzYy/NDYtMTM0NjMxNjk1/OC00NTMzLmpwZWc.jpeg",
    link: "audio/cityofdream.mp3",
    id: 7,
  },
  {
    title: "Tokyo By Night (Axwell Remix)",
    artist: "Hook N Sling ft. Karin Park",
    image: "https://i1.sndcdn.com/artworks-000077814674-qcu8h4-t500x500.jpg",
    link: "audio/tokyo.mp3",
    id: 8,
  },
  {
    title: "Echoes",
    artist: "Henrik B, Niklas Gustavsson, Peter Johansson",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/98/fe/5d/98fe5d4d-9cba-4168-6b3d-b71c0a826528/00602537707430.rgb.jpg/1200x1200bb.jpg",
    link: "audio/echoes.mp3",
    id: 9,
  },
  {
    title: "Pressure (Alesso Remix)",
    artist: "Nadia Ali",
    image: "https://i1.sndcdn.com/artworks-000015219519-9t80kw-t500x500.jpg",
    link: "audio/pressure.mp3",
    id: 10,
  },
  {
    title: "The Island (Steve Angello, AN21, Max Vangeli Remix)",
    artist: "Pendulum",
    image: "https://i1.sndcdn.com/artworks-KR3mj7Ko2YLE-0-t500x500.jpg",
    link: "audio/theisland.mp3",
    id: 11,
  },
  {
    title: "In My Mind (Axwell Radio Edit)",
    artist: "Ivan Gough & Feenixpawl ft. Georgi Kay",
    image: "https://i1.sndcdn.com/artworks-000028135929-6r4v8h-t500x500.jpg",
    link: "audio/inmymind.mp3",
    id: 12,
  },
  {
    title: "All you need is love",
    artist: "Avicii",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/63/e5/39/63e53993-0eff-18e2-d756-ce3d56d98270/00602537491377.rgb.jpg/1200x1200bf-60.jpg",
    link: "audio/allyouneedislove.mp3",
    id: 13,
  },
  {
    title: "Everyday Of My Life",
    artist: "Third Party",
    image: "https://i1.sndcdn.com/artworks-000080626822-7wsi97-t500x500.jpg",
    link: "audio/everydayofmylife.mp3",
    id: 14,
  },
];


// Main section
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const gridContainer = document.getElementById("grid-container");
const footer = document.getElementById("footer");
const shuffleButton = document.getElementById("shuffle-array");
const audio = new Audio();

let isPlaying = false;
let currentIndex = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displaySongs(Tracklist) {
  gridContainer.innerHTML = "";

  Tracklist.forEach((song, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const titleElement = document.createElement("p");
    titleElement.textContent = `${song.title}`;

    const artistElement = document.createElement("p");
    artistElement.textContent = `${song.artist}`;

    const imageElement = document.createElement("img");
    imageElement.src = song.image;

    const favoriteButton = document.createElement("button");
    favoriteButton.textContent = isSongInPlaylist(song) ? "Remove from Playlist" : "Add to Playlist";
    favoriteButton.classList.add("favorite-button");
    card.appendChild(titleElement);
    card.appendChild(artistElement);
    card.appendChild(imageElement);
    card.appendChild(favoriteButton);

    favoriteButton.addEventListener("click", () => {
      addToPlaylist(song);
      displaySongs(Tracklist);
      displayPlaylist();
    });

    card.addEventListener("click", () => {
      footer.style.display = "block";
      currentIndex = index;
      playAudio();
    });

    gridContainer.appendChild(card);
  });
}


let playbackPosition = 0;

function playAudio() {
  const currentSong = Tracklist[currentIndex];
  audio.src = currentSong.link;

  if (!isPlaying) {
    audio.currentTime = playbackPosition;
  }

  isPlaying = true;
  playButton.style.display = "none";
  pauseButton.style.display = "block";
  updateTitle();
  audio.play();
}

function pauseAudio() {
  audio.pause();
  isPlaying = false;
  playButton.style.display = "block";
  pauseButton.style.display = "none";
  playbackPosition = audio.currentTime;
}

function nextSong() {
  currentIndex++;
  if (currentIndex >= Tracklist.length) {
    currentIndex = 0;
  }
  playAudio();
  updateTitle();
}

function prevSong() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = Tracklist.length - 1;
  }
  playAudio();
  updateTitle();
}

function updateTitle() {
  const title = document.getElementById("title");
  title.textContent = Tracklist[currentIndex].title;

  const artist = document.getElementById("artist");
  artist.textContent = Tracklist[currentIndex].artist;
}

const progress = document.getElementById("progress");

audio.onloadedmetadata = function () {
  progress.max = audio.duration;

  const updateProgress = setInterval(() => {
    progress.value = audio.currentTime;

    let min = Math.floor(audio.duration / 60);
    let sec = Math.floor(audio.duration % 60);

    let curMin = Math.floor(audio.currentTime / 60);
    let curSec = Math.floor(audio.currentTime % 60);

    if (sec < 10) {
      sec = "0" + sec;
    }
    if (curSec < 10) {
      curSec = "0" + curSec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (curMin < 10) {
      curMin = "0" + curMin;
    }

    document.getElementById("end").innerHTML = min + ":" + sec;
    document.getElementById("start").innerHTML = curMin + ":" + curSec;
  }, 100);

  audio.onended = function () {
    clearInterval(updateProgress);
  };
};

const randomButton = document.getElementById("random");
function playRandomSong() {
  let randomIndex = Math.floor(Math.random() * Tracklist.length);
  while (randomIndex === currentIndex) {
    randomIndex = Math.floor(Math.random() * Tracklist.length);
  }
  currentIndex = randomIndex;
  playAudio();
}

playButton.addEventListener("click", playAudio);
pauseButton.addEventListener("click", pauseAudio);
nextButton.addEventListener("click", nextSong);
prevButton.addEventListener("click", prevSong);
audio.addEventListener("ended", nextSong);
shuffleButton.addEventListener("click", function () {
  shuffleArray(Tracklist);
  displaySongs(Tracklist);
});
randomButton.addEventListener("click", function () {
  playRandomSong();
  footer.style.display = "block";
});

progress.addEventListener("input", function () {
  audio.currentTime = progress.value;
});



// Playlist Section
const playlist = loadPlaylistFromStorage();

function addToPlaylist(song) {
  const indexInPlaylist = playlist.findIndex((playlistSong) => playlistSong.id === song.id);

  if (indexInPlaylist === -1) {
    playlist.push(song);
    alert(`${song.title} added to playlist!`);
  } else {
    playlist.splice(indexInPlaylist, 1);
    alert(`${song.title} removed from playlist!`);
  }

  savePlaylistToStorage();
}

function loadPlaylistFromStorage() {
  const storedPlaylist = localStorage.getItem("playlist");
  return storedPlaylist ? JSON.parse(storedPlaylist) : [];
}

function savePlaylistToStorage() {
  localStorage.setItem("playlist", JSON.stringify(playlist));
}
function displayPlaylist() {
  gridContainer.innerHTML = "";

  playlist.forEach((song, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const titleElement = document.createElement("p");
    titleElement.textContent = `${song.title}`;

    const artistElement = document.createElement("p");
    artistElement.textContent = `${song.artist}`;

    const imageElement = document.createElement("img");
    imageElement.src = song.image;

    const favoriteButton = document.createElement("button");
    favoriteButton.textContent = "Remove from Playlist";
    favoriteButton.classList.add("favorite-button");
    card.appendChild(titleElement);
    card.appendChild(artistElement);
    card.appendChild(imageElement);
    card.appendChild(favoriteButton);

    favoriteButton.addEventListener("click", () => {
      removeFromPlaylist(song);
      displayPlaylist(); 
    });

    card.addEventListener("click", () => {
      footer.style.display = "block";
      currentIndex = Tracklist.findIndex((track) => track.id === song.id);
      playAudio();
    });

    gridContainer.appendChild(card);
  });
}

function removeFromPlaylist(song) {
  const indexInPlaylist = playlist.findIndex((playlistSong) => playlistSong.id === song.id);

  if (indexInPlaylist !== -1) {
    playlist.splice(indexInPlaylist, 1);
    alert(`${song.title} removed from playlist!`);
    savePlaylistToStorage(); 
  }
}

function isSongInPlaylist(song) {
  return playlist.some((playlistSong) => playlistSong.id === song.id);
}

const allSongsButton = document.getElementById("all-songs");
const playlistButton = document.getElementById("playlist");

allSongsButton.addEventListener("click", () => {
  displaySongs(Tracklist);
});

playlistButton.addEventListener("click", () => {
  displayPlaylist();
});

displaySongs(Tracklist);
