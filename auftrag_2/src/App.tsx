import React, { useState, useEffect } from "react";
import "./App.css";
import { MediaItem } from "./types";
import { MediaCard } from "./components/MediaCard";
import { AddMediaForm } from "./components/AddMediaForm";
import { FilterBar } from "./components/FilterBar";

const initialMedia: MediaItem[] = [
  {
    id: "1",
    title: "Inception",
    type: "Film",
    creator: "Christopher Nolan",
    year: "2010",
    rating: 9.0,
    description: "Ein wegweisender Science-Fiction-Thriller über das Eindringen in Träume und Spionage.",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=80",
    linkUrl: "https://www.netflix.com/title/70131314"
  },
  {
    id: "2",
    title: "Random Access Memories",
    type: "Album",
    creator: "Daft Punk",
    year: "2013",
    rating: 9.5,
    description: "Ein meisterhaftes Elektronik-Album, das den Geist des späten 70er-Disco wiederbelebt.",
    imageUrl: "https://images.unsplash.com/photo-1487180142328-0c4e37023af5?w=500&auto=format&fit=crop&q=80",
    linkUrl: "https://open.spotify.com/album/4m28wbYF64jTyRLmITXaZg"
  },
  {
    id: "3",
    title: "The Legend of Zelda: Breath of the Wild",
    type: "Game",
    creator: "Nintendo",
    year: "2017",
    rating: 9.8,
    description: "Ein revolutionäres Open-World-Abenteuer mit beispielloser Freiheit in Hyrule.",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop&q=80",
    linkUrl: "https://www.nintendo.com/store/products/the-legend-of-zelda-breath-of-the-wild-switch/"
  }
];

function App() {
  const [collection, setCollection] = useState<MediaItem[]>(() => {
    const saved = localStorage.getItem("mediasammlung");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed.map((item: any) => {
            const initialMatch = initialMedia.find(init => init.id === item.id);
            return initialMatch ? initialMatch : item;
          });
        }
      } catch (e) {
        console.error(e);
      }
    }
    return initialMedia;
  });

  const [filterType, setFilterType] = useState<string>("Alle");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [layoutMode, setLayoutMode] = useState<"grid" | "flex">("grid");

  useEffect(() => {
    localStorage.setItem("mediasammlung", JSON.stringify(collection));
  }, [collection]);

  const handleAddItem = (item: Omit<MediaItem, "id">) => {
    const newItem: MediaItem = {
      id: Date.now().toString(),
      ...item
    };
    setCollection([newItem, ...collection]);
    setShowAddForm(false);
  };

  const handleDeleteItem = (id: string) => {
    setCollection(collection.filter(item => item.id !== id));
  };

  const filteredCollection = collection.filter(item => {
    const matchesFilter = filterType === "Alle" || item.type === filterType;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.creator.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="container">
      <header className="header">
        <h1>Mediensammlung</h1>
        <p>Deine persönliche Bibliothek für Filme, Alben und Spiele</p>
      </header>

      <FilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterType={filterType}
        setFilterType={setFilterType}
        showAddForm={showAddForm}
        setShowAddForm={setShowAddForm}
        layoutMode={layoutMode}
        setLayoutMode={setLayoutMode}
      />

      {showAddForm && (
        <AddMediaForm
          onAdd={handleAddItem}
          onClose={() => setShowAddForm(false)}
        />
      )}

      <section className={layoutMode === "grid" ? "media-grid" : "media-flex"} aria-label="Mediensammlung Einträge">
        {filteredCollection.length > 0 ? (
          filteredCollection.map((item) => (
            <MediaCard
              key={item.id}
              item={item}
              onDelete={handleDeleteItem}
            />
          ))
        ) : (
          <section className="empty-state">
            <h3>Keine Einträge gefunden</h3>
            <p>Es gibt keine Medien, die deiner Suche oder deinem Filter entsprechen.</p>
            <button 
              className="btn-primary"
              onClick={() => {
                setSearchQuery("");
                setFilterType("Alle");
                setShowAddForm(true);
              }}
            >
              Neues Medium hinzufügen
            </button>
          </section>
        )}
      </section>
    </main>
  );
}

export default App;
