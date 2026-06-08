import React from "react";

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterType: string;
  setFilterType: (type: string) => void;
  showAddForm: boolean;
  setShowAddForm: (show: boolean) => void;
  layoutMode: "grid" | "flex";
  setLayoutMode: (mode: "grid" | "flex") => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  setSearchQuery,
  filterType,
  setFilterType,
  showAddForm,
  setShowAddForm,
  layoutMode,
  setLayoutMode,
}) => {
  return (
  <section className="action-bar" aria-label="Sammlungsaktionen">
      <nav className="search-filter-group" aria-label="Mediensuche und Filter">
        <input
          type="search"
          className="search-input"
          placeholder="Suchen..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <menu className="filter-buttons">
          {["Alle", "Film", "Album", "Game"].map((type) => (
            <li key={type}>
              <button
                className={`filter-btn ${filterType === type ? "active" : ""}`}
                onClick={() => setFilterType(type)}
              >
                {type}
              </button>
            </li>
          ))}

          <li style={{ marginLeft: "auto" }}>
            <button
              className="filter-btn"
              onClick={() =>
                setLayoutMode(layoutMode === "grid" ? "flex" : "grid")
              }
              title="Darstellung wechseln"
            >
              Ansicht: {layoutMode === "grid" ? "Grid" : "Flex"}
            </button>
          </li>
        </menu>
      </nav>

      <button
        className="add-toggle-btn"
        onClick={() => setShowAddForm(!showAddForm)}
        aria-expanded={showAddForm}
      >
        {showAddForm ? "Schließen" : "Neues Medium"}
      </button>
    </section>
  );
};
