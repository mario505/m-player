import { useState } from "react";
import { useMusic } from "../contexts/MusicContext";

export default function Playlists() {
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const { playlists, createPlaylist } = useMusic();

  const handleCreatePlaylist = () => {
    if (newPlaylistName.trim()) {
      createPlaylist(newPlaylistName.trim());
      setNewPlaylistName("");
    }
  };

  return (
    <div className="playlists">
      <h2>Playlists</h2>

      {/* create new playlists */}
      <div className="create-playlist">
        <h3>Create New Playlist</h3>
        <div className="playlist-form">
          <input
            type="text"
            placeholder="Playlist name..."
            className="playlist-input"
            onChange={(e) => setNewPlaylistName(e.target.value)}
            value={newPlaylistName}
          />
          <button className="create-btn" onClick={handleCreatePlaylist}>
            Create
          </button>
        </div>
      </div>

      {/* Playlist List */}
      <div className="playlist-list">
        {playlists.length === 0 ? (
          <p className="empty-message">No Playlists created yet</p>
        ) : (
          playlists.map((playlist, key) => (
            <div className="playlist-item" key={key}>
              <div className="playlist-header">
                <h3>{playlist.name}</h3>
                <div className="playlist-actions">
                  <button className="delete-playlist-btn">Delete</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
