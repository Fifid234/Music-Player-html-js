// Playlist {
//    "Name": "",
//    "Id": 0
//    "Songs": []
// }

// Song {
//     "Date_Added": 0,
//     "Duration": 0,
//     "Path": "",
//     "Name": ""
//     "Id": 0
// }

// b = [
// new PlayList([
//     new Song(
//     12123,
//     4,
//     "erer",
//     "Hell",
//     131 
// ), new Song(
//     12123,
//     4,
//     "erer",
//     "Hell",
//     131 
// ),
// new Song(
//     12123,
//     4,
//     "erer",
//     "Hell",
//     131 )
// ], 123),
// new PlayList([
//     new Song(
//     12123,
//     4,
//     "erer",
//     "Hell",
//     131 ), 
// new Song(
//     12123,
//     4,
//     "erer",
//     "Hell",
//     131 
// ),
// new Song(
//     12123,
//     4,
//     "erer",
//     "Hell",
//     131 
// )
// ], 123), 
// new PlayList([
//     new Song(
//     12123,
//     4,
//     "erer",
//     "Hell",
//     131 
// ), new Song(
//     12123,
//     4,
//     "erer",
//     "Hell",
//     131 
// ),
// new Song(
//     12123,
//     4,
//     "erer",
//     "Hell",
//     131 
// )
// ], 123)]


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


const MusicListView = document.getElementById("music-list-view");
const LocalStorageKey = "Playlists";

let Playlists = GetPlaylists();

SaveToLocalStorage();

console.log(Playlists);

function GetPlaylists() {
    let localStorageData = JSON.parse(localStorage.getItem(LocalStorageKey));
    let outPlayLists = [];

    if (localStorageData === null) {
        console.log("Local storage is", localStorageData);
        
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