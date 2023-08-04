// Fetching Elements from the HTML and CSS
let inputSearch = document.getElementById('inputSearch');
let body = document.getElementById('main-body');
let search = document.getElementById('search');
let searchOption = document.getElementById('search-option');
let Google = document.getElementById('googleOption');
let Youtube = document.getElementById('youtubeOption');
let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);
let googleColor = rootStyles.getPropertyValue('--google-color')
let youtubeColor = rootStyles.getPropertyValue('--youtube-color')
let twitchColor = rootStyles.getPropertyValue('--twitch-color')
let wikipediaColor = rootStyles.getPropertyValue('--wikipedia-color')
let spotifyColor = rootStyles.getPropertyValue('--spotify-color')

// Creating Function For Google Search
function GoogleSearch(){
    search = "https://www.google.com/search?q=" + inputSearch.value
    window.open(search)
}

// Creating Function For Youtube Search
function YTSearch(){
    search = "https://www.youtube.com/results?search_query=" + inputSearch.value
    window.open(search)
}

// Creating Function For WikiPedia Search
function WikiSearch(){
    search = "https://en.wikipedia.org/w/index.php?search=" + inputSearch.value
    window.open(search)
}

// Creating Function For Twitch Search
function TwitchSearch(){
    search = "https://www.twitch.tv/search?term=" + inputSearch.value
    window.open(search)
}

// Creating Function For Spotify Search
function SpotifySearch(){
    search = "https://open.spotify.com/search/" + inputSearch.value
    window.open(search)
}

// Function to call the Search Function Based on the Option Selected on WebPage
function searchSelector(){
    if(searchOption.value === 'Google'){
        GoogleSearch()
    }else if (searchOption.value === 'Youtube'){
        YTSearch()
        body.style.backgroundImage = youtubeeColor;
    }else if(searchOption.value === 'WikiPedia'){
        WikiSearch()
    }else if(searchOption.value === 'Twitch'){
        TwitchSearch()
    }
    else if(searchOption.value === 'Spotify'){
        SpotifySearch()
    }
}

// Function to Change WebSite backgroud Color and Placeholder For Search Input Based On the Select Option Selected
function siteChange(){
    if(searchOption.value === 'Google'){
        body.style.backgroundImage = googleColor;
        inputSearch.placeholder = 'What You Want To Search On Google?';
    }else if (searchOption.value === 'Youtube'){
        body.style.backgroundImage = youtubeColor;
        inputSearch.placeholder = 'What You Want To Search On Youtube?';
    }else if(searchOption.value === 'WikiPedia'){
        body.style.backgroundImage = wikipediaColor;
        inputSearch.placeholder = 'What You Want To Search On WikiPedia?';
    }else if(searchOption.value === 'Twitch'){
        body.style.backgroundImage = twitchColor;
        inputSearch.placeholder = 'What You Want To Search On Twitch?';
    }else if(searchOption.value === 'Spotify'){
        body.style.backgroundImage = spotifyColor;
        inputSearch.placeholder = 'What You Want To Search On Spotify?';
    }
}




