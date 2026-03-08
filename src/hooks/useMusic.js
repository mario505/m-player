import { use, useState } from "react";

const songs = [
    {
        id: 1,
        title: "Breaching",
        artist: "EchoBR",
        url: "/songs/Breaching.wav",
        duration: "3:45",
    },
    {
        id: 2,
        title: "Forgotten Memories",
        artist: "EchoBR",
        url: "/songs/Forgotten Memories.wav",
        duration: "3:12",
    },
    {
        id: 3,
        title: "Glacier Blue",
        artist: "EchoBR",
        url: "/songs/Glacier Blue.wav",
        duration: "3:28",
    }
];

export default function useMusic(){
    const [allSongs, setAllSongs] = useState(songs);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

    function handlePlaySong(song, index){
        setCurrentTrack(song);
        setCurrentTrackIndex(index);
    }

    return {allSongs, handlePlaySong, currentTrackIndex, currentTrack};
}