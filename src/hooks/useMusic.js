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

export default function useMusic() {
    const [allSongs, setAllSongs] = useState(songs);
    const [currentTrack, setCurrentTrack] = useState(songs[0]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);

    function handlePlaySong(song, index) {
        setCurrentTrack(song);
        setCurrentTrackIndex(index);
        setIsPlaying(false);
    }

    function formatTime(time) {
        if (isNaN(time) || time === undefined) return "0:00";

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }

    function nextTrack() {
        setCurrentTrackIndex((prev) => {
            const nextIndex = (prev + 1) % allSongs.length
            setCurrentTrack(allSongs[nextIndex]);
            return nextIndex;
        });
        setIsPlaying(false);
    }

    function prevTrack() {
        setCurrentTrackIndex((prev) => {
            const prevIndex = prev === 0 ? allSongs.length - 1 : prev - 1;
            setCurrentTrack(allSongs[prevIndex]);
            return prevIndex;
        });
        setIsPlaying(false);
    }

    function play() { setIsPlaying(true) };
    function pause() { setIsPlaying(false) };

    return {
        allSongs, handlePlaySong, currentTrackIndex, currentTrack,
        setCurrentTime, currentTime, formatTime, duration, setDuration,
        nextTrack, prevTrack, play, pause, isPlaying, volume, setVolume
    };
}