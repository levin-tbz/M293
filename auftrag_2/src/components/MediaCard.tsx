import React from "react";
import { MediaItem } from "../types";

interface MediaCardProps {
  item: MediaItem;
  onDelete: (id: string) => void;
}

export const MediaCard: React.FC<MediaCardProps> = ({ item, onDelete }) => {
  return (
    <article className="media-card">
      {item.imageUrl && (
        <img src={item.imageUrl} alt={item.title} className="card-image" />
      )}
      
      <header className="card-header">
        <data value={item.type} className={`badge badge-${item.type.toLowerCase()}`}>
          {item.type}
        </data>
        <output className="rating-display" aria-label={`Bewertung: ${item.rating} von 10`}>
          {Number(item.rating).toFixed(1)} / 10
        </output>
      </header>
      
      <h3 className="card-title">
        <a href={item.linkUrl} target="_blank" rel="noopener noreferrer" className="card-title-link">
          {item.title}
        </a>
      </h3>
      <p className="card-creator">{item.creator}</p>
      <time className="card-year" dateTime={item.year}>Erschienen: {item.year}</time>
      
      <p className="card-description">{item.description}</p>
      
      <footer className="card-footer">
        <button 
          className="delete-btn"
          onClick={() => onDelete(item.id)}
          title="Eintrag entfernen"
        >
          Löschen
        </button>
      </footer>
    </article>
  );
};
