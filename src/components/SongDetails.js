"use client";
import React, { useState, useEffect } from "react";
import SongArtist from "./SongArtist";
import SongLyrics from "./SongLyrics";
import Message from "./Message";

const SongDetails = ({ search, lyrics, bio }) => {
  if (!lyrics || !bio) return null;

  return (
    <>
      {lyrics.error || lyrics.err || lyrics.name === "AbortError" ? (
        <Message
          msg={`Error: Song ${search.song} doesn't exist`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyrics title={search.song} lyrics={lyrics.lyrics}/>
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]}/>
      ) : (
        <Message
          msg={`Error: Artist ${search.artist} doesn't exist`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;
