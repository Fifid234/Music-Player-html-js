// Playlist {
//  "Name": "",
//  "Songs": [],
//  "Id": 0
// }

// Song {
//     "Date_Added": 0,
//     "Duration": 0,
//     "Path": "",
//     "Name": "",
//     "Id": 0
// }

const MusicList = document.getElementById("Music-List");

PlayLists = []

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
}

for (let i = 0; i < 30; i++) {
    MusicList.innerHTML += '<div class="music-list-item"></div>';
}