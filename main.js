const Tracklist = [
  {
    title: "Years ft. Matthew Koma",
    artist: "Alesso",
    image:
      "https://i1.sndcdn.com/artworks-0dd6aca7-307f-4122-88b5-b3493d480b4b-0-t500x500.jpg",
    link: "audio/years.mp3",
  },
  {
    title: "Walking Alone ft. Erik Hecht",
    artist: "Dirty South & Those Usual Suspects",
    image: "https://i.scdn.co/image/ab67616d0000b2735864626657091d5c55757c3f",
    link: "audio/walkingalone.mp3",
  },
  {
    title: "Titanium ft. Sia (Alesso Remix)",
    artist: "David Guetta",
    image:
      "https://eng4viet.com/wp-content/uploads/2020/11/bai-hat-titanium.jpg",
    link: "audio/titanium.mp3",
  },
  {
    title: "Drowning ft. LAURA V (Avicii Remix)",
    artist: "Armin van Buuren",
    image: "https://i1.sndcdn.com/artworks-1qRbideVmP1N-0-t500x500.png",
    link: "audio/drowning.mp3",
  },
  {
    title: "Leave the World Behind ft. Deborah Cox",
    artist: "Axwell, Ingrosso, Angello, Laidback Luke",
    image: "https://i.scdn.co/image/ab67616d0000b2735be2b02a0948b3a6f4dbf087",
    link: "audio/ltwb.mp3",
  },
  {
    title: "Every Teardrop Is A Waterfall (Avicii 'Tour' Mix)",
    artist: "Coldplay",
    image: "https://i1.sndcdn.com/artworks-000042478557-58gk8j-t500x500.jpg",
    link: "audio/everyteardrop.mp3",
  },
  {
    title: "City Of Dreams ft. Ruben Haze",
    artist: "Dirty South, Alesso",
    image:
      "https://i.discogs.com/rktQqBOmkVOLVYx-Bn-wkQLACFfkmRrhqMBLpiko5CI/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM4MzYy/NDYtMTM0NjMxNjk1/OC00NTMzLmpwZWc.jpeg",
    link: "audio/cityofdream.mp3",
  },
  {
    title: "Tokyo By Night (Axwell Remix)",
    artist: "Hook N Sling ft. Karin Park",
    image: "https://i1.sndcdn.com/artworks-000077814674-qcu8h4-t500x500.jpg",
    link: "audio/tokyo.mp3",
  },
  {
    title: "Echoes",
    artist: "Henrik B, Niklas Gustavsson, Peter Johansson",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/98/fe/5d/98fe5d4d-9cba-4168-6b3d-b71c0a826528/00602537707430.rgb.jpg/1200x1200bb.jpg",
    link: "audio/echoes.mp3",
  },
];

const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const gridContainer = document.getElementById("grid-container");
const footer = document.getElementById("footer");
const audio = new Audio();
let isPlaying = false;
let currentIndex = 0;

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

    card.appendChild(titleElement);
    card.appendChild(artistElement);
    card.appendChild(imageElement);

    card.addEventListener("click", () => {
      footer.style.display = "block";
      currentIndex = index;
      playAudio();
    });

    gridContainer.appendChild(card);
  });
}

function playAudio() {
  const currentSong = Tracklist[currentIndex];
  audio.src = currentSong.link;
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

playButton.addEventListener("click", playAudio);
pauseButton.addEventListener("click", pauseAudio);
nextButton.addEventListener("click", nextSong);
prevButton.addEventListener("click", prevSong);
audio.addEventListener("ended", nextSong);

displaySongs(Tracklist);
