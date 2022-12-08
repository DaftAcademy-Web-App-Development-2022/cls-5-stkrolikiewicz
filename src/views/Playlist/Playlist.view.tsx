import React from "react";
import { Header, Track } from "~/views/Playlist/components";
import { Model } from "~/models/Playlist.model";

import styles from "./Playlist.module.css";

export interface HeaderPlaylist extends Model {
    image?: string;
    url?: string;
}

interface Props {
    playlist: HeaderPlaylist;
    trackList: SpotifyApi.PlaylistTrackObject[];
}

const Playlist = ({ playlist, trackList }: Props) => (
    <>
        <Header {...playlist} />

        <ul>
            <li className={styles.listHeader}>
                <span>#</span>
                <span />
                <span>Tytuł</span>
                <span className={styles.headerDuration}>Czas trwania</span>
                <span />
            </li>

            {trackList.map(
                (item, index) =>
                    item.track && (
                        // <p>{item.track.name}</p>
                        <Track
                            track={item.track}
                            index={index + 1}
                            key={item.track.id}
                        />
                    )
            )}
        </ul>
    </>
);

export default Playlist;
