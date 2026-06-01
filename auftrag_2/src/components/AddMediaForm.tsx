import React, { useState } from "react";
import { MediaType, MediaItem } from "../types";

interface AddMediaFormProps {
  onAdd: (item: Omit<MediaItem, "id">) => void;
  onClose: () => void;
}

const creatorLabels: Record<MediaType, string> = {
  Film: "Regisseur",
  Album: "Künstler",
  Game: "Entwickler"
};

const creatorPlaceholders: Record<MediaType, string> = {
  Film: "z.B. Christopher Nolan",
  Album: "z.B. Daft Punk",
  Game: "z.B. Nintendo"
};

export const AddMediaForm: React.FC<AddMediaFormProps> = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState<MediaType>("Film");
  const [creator, setCreator] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("10.0");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({
      title: title.trim(),
      type,
      creator: creator.trim() || "Unbekannt",
      year: year.trim() || new Date().getFullYear().toString(),
      rating: parseFloat(rating) || 10.0,
      description: description.trim() || "Keine Beschreibung vorhanden.",
      imageUrl: imageUrl.trim() || undefined
    });

    setTitle("");
    setType("Film");
    setCreator("");
    setYear("");
    setRating("10.0");
    setDescription("");
    setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <fieldset className="form-grid">
        <legend className="form-title">Neues Medium hinzufügen</legend>
        
        <section className="form-group">
          <label className="form-label" htmlFor="title">Titel *</label>
          <input
            id="title"
            type="text"
            className="form-input"
            placeholder="z.B. Inception"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </section>

        <section className="form-group">
          <label className="form-label" htmlFor="type">Typ</label>
          <select
            id="type"
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value as MediaType)}
          >
            <option value="Film">Film</option>
            <option value="Album">Album</option>
            <option value="Game">Game</option>
          </select>
        </section>

        <section className="form-group">
          <label className="form-label" htmlFor="creator">{creatorLabels[type]}</label>
          <input
            id="creator"
            type="text"
            className="form-input"
            placeholder={creatorPlaceholders[type]}
            value={creator}
            onChange={(e) => setCreator(e.target.value)}
          />
        </section>

        <section className="form-group">
          <fieldset className="form-row-grid">
            <legend style={{ display: "none" }}>Jahr und Bewertung</legend>
            <section className="form-group">
              <label className="form-label" htmlFor="year">Jahr</label>
              <input
                id="year"
                type="number"
                min="1800"
                max="2100"
                className="form-input"
                placeholder={new Date().getFullYear().toString()}
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </section>
            <section className="form-group">
              <label className="form-label" htmlFor="rating">Bewertung (von 10) *</label>
              <input
                id="rating"
                type="number"
                min="0"
                max="10"
                step="0.1"
                className="form-input"
                placeholder="10.0"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              />
            </section>
          </fieldset>
        </section>

        <section className="form-group form-group-full">
          <label className="form-label" htmlFor="imageUrl">Bild-URL (optional)</label>
          <input
            id="imageUrl"
            type="url"
            className="form-input"
            placeholder="z.B. https://example.com/bild.jpg"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </section>

        <section className="form-group form-group-full">
          <label className="form-label" htmlFor="description">Beschreibung</label>
          <textarea
            id="description"
            className="form-textarea"
            placeholder="Kurze Zusammenfassung..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </section>
      </fieldset>

      <footer className="form-actions">
        <button 
          type="button" 
          className="btn-secondary" 
          onClick={onClose}
        >
          Abbrechen
        </button>
        <button type="submit" className="btn-primary">Hinzufügen</button>
      </footer>
    </form>
  );
};
