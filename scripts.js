class PlayList {
    Songs = null;
    Id = null;
    constructor(Songs, Id) {
        this.Songs = Songs;
        this.Id = Id;
    }
}

class Song {
    Date_Added = null;
    Duration = null;
    Path = null;
    Name = null;
    Id = null;
    constructor(Date_Added, Duration, Path, Name, Id) {
        this.Date_Added = Date_Added;
        this.Duration = Duration;
        this.Path = Path;
        this.Name = Name;
        this.Id = Id;
    }
};


const MusicListView = document.getElementById("music-list");
const LocalStorageKey = "Playlists";

for (let i = 1; i <= 20; i++) {
    MusicList.innerHTML += 
    `
            <div class="list-item">
                <img class="list-item-icon" src="Assets/Playlist-Icon.png">
                <div class="list-item-text-container">
                    <div class="list-item-text-name">Song Title - Artist Name</div>
                    <div class="list-item-text-duration">3:30</div>
                </div>
            </div>
        `;
}


function GetPlaylists() {
    let outPlayLists = [];
    let localStorageData = null;

    try {
        localStorageData = JSON.parse(localStorage.getItem(LocalStorageKey));
    } catch (err) {
        console.log("Local storage is", localStorageData)

        return null;
    }

    for (let i = 0; i < localStorageData.length - 1; i++) {
        let rawSongs = localStorageData[i];
        let songs = [];
        
        for (let j = 0; j < rawSongs.Songs.length - 1; j++) {
            let rawSong = rawSongs.Songs[i];

            let mainSong = new Song(
                rawSong.Date_Added,
                rawSong.Duration,
                rawSong.Path,
                rawSong.Name,
                j
            );
            
            songs.push(mainSong);
        }

        let mainPlayList = new PlayList(songs, i);
        outPlayLists.push(mainPlayList);
    }

    return outPlayLists;
}

function SaveToLocalStorage() {
    let strPlayLists = JSON.stringify(this.Playlists);

    localStorage.setItem(LocalStorageKey, strPlayLists);
}