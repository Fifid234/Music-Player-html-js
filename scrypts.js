// Playlist {
//    "Name": "",
//    "Songs": []
// }

// Song {
//     "Date_Added": 0,
//     "Duration": 0,
//     "Path": "",
//     "Name": ""
// }

const MusicListView = document.getElementById("music-list-view");
const LocalStorageKey = "Playlists";

PlayLists = [];


function GetPlaylists() {
    PlaylistsDocument = localStorage.getItem(LocalStorageKey);

    if (PlaylistsDocument === null) {
        console.log("LocalStorageKey is Empty");

        return null;
    }

    PlaylistsDocument = JSON.parse(PlaylistsDocument)

    outPlayLists = []

    for (let i = 0; i < PlaylistsDocument.length; i++) {
        PlayListElement = PlaylistsDocument[i];

        for (let j = 0; j < PlayListElement.length; j++) {
            const element = array[];
            
        }
    }
}

class PlayList {
    Songs = [];
    Id = 0;
    constructor(Songs, Id) {
        this.Songs = Songs;
        this.Id = Id;
    }
}

class Song {
    Date_Added = 0;
    Duration = 0;
    Path = "";
    Name = "";
    Id = 0;
    constructor(Date_Added, Duration, Path, Name, Id) {
        this.Date_Added = Date_Added;
        this.Duration = Duration;
        this.Path = Path;
        this.Name = Name;
        this.Id = Id;
    }
};