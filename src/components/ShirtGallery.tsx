"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, Search, X } from "lucide-react";
import type { Shirt } from "@/data/shirts";
import { statusLabels } from "@/data/shirts";
import { uniqueValues } from "@/lib/filters";
import { ShirtCard } from "@/components/ShirtCard";

type Filters = {
  q: string;
  season: string;
  playerName: string;
  classification: string;
  size: string;
  status: string;
};

const emptyFilters: Filters = {
  q: "",
  season: "",
  playerName: "",
  classification: "",
  size: "",
  status: ""
};

export function ShirtGallery({ shirts }: { shirts: Shirt[] }) {
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [showFilters, setShowFilters] = useState(false);

  const options = useMemo(
    () => ({
      seasons: uniqueValues(shirts, "season").reverse(),
      players: uniqueValues(shirts, "playerName"),
      classifications: uniqueValues(shirts, "classification"),
      sizes: uniqueValues(shirts, "size"),
      statuses: uniqueValues(shirts, "status")
    }),
    [shirts]
  );

  const filtered = useMemo(() => {
    const q = filters.q.trim().toLowerCase();

    return shirts.filter((shirt) => {
      const matchesText =
        !q ||
        [shirt.title, shirt.team, shirt.season, shirt.playerName, shirt.description, shirt.manufacturer]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(q);

      return (
        matchesText &&
        (!filters.season || shirt.season === filters.season) &&
        (!filters.playerName || shirt.playerName === filters.playerName) &&
        (!filters.classification || shirt.classification === filters.classification) &&
        (!filters.size || shirt.size === filters.size) &&
        (!filters.status || shirt.status === filters.status)
      );
    });
  }, [filters, shirts]);

  const hasFilters = Object.values(filters).some(Boolean);

  function updateFilter(key: keyof Filters, value: string) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  return (
    <>
      <div className="filter-bar">
        <div className="filter-inner">
          <div className="search-field">
            <Search size={17} aria-hidden="true" />
            <input value={filters.q} onChange={(event) => updateFilter("q", event.target.value)} placeholder="חיפוש חופשי..." />
          </div>
          <button className={`filter-toggle ${showFilters ? "is-open" : ""}`} onClick={() => setShowFilters((value) => !value)}>
            <SlidersHorizontal size={16} aria-hidden="true" />
            {showFilters ? "הסתרת מסננים" : "הוספת מסננים"}
          </button>
          {hasFilters ? (
            <button className="clear-button" onClick={() => setFilters(emptyFilters)}>
              <X size={14} aria-hidden="true" />
              ניקוי
            </button>
          ) : null}
        </div>
        {showFilters ? (
          <div className="filter-selectors">
            <FilterSelect label="עונה" value={filters.season} values={options.seasons} onChange={(value) => updateFilter("season", value)} />
            <FilterSelect label="שחקן" value={filters.playerName} values={options.players} onChange={(value) => updateFilter("playerName", value)} />
            <FilterSelect
              label="סוג"
              value={filters.classification}
              values={options.classifications}
              render={(value) => value}
              onChange={(value) => updateFilter("classification", value)}
            />
            <FilterSelect label="מידה" value={filters.size} values={options.sizes} onChange={(value) => updateFilter("size", value)} />
            <FilterSelect
              label="סטטוס"
              value={filters.status}
              values={options.statuses}
              render={(value) => statusLabels[value as keyof typeof statusLabels] ?? value}
              onChange={(value) => updateFilter("status", value)}
            />
          </div>
        ) : null}
      </div>

      <div className="section-head" style={{ marginTop: 32 }}>
        <span className="mono-tag">
          {filtered.length} / {shirts.length} פריטים
        </span>
      </div>

      {filtered.length ? (
        <div className="gallery-grid">
          {filtered.map((shirt) => (
            <ShirtCard key={shirt.id} shirt={shirt} />
          ))}
        </div>
      ) : (
        <div className="note-box">אין פריטים להצגה. נסו לשנות את הסינון או חזרו מאוחר יותר.</div>
      )}
    </>
  );
}

function FilterSelect({
  label,
  value,
  values,
  render,
  onChange
}: {
  label: string;
  value: string;
  values: string[];
  render?: (value: string) => string;
  onChange: (value: string) => void;
}) {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)} aria-label={label}>
      <option value="">{label}</option>
      {values.map((item) => (
        <option key={item} value={item}>
          {render ? render(item) : item}
        </option>
      ))}
    </select>
  );
}
