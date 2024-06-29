"use client";
import { partiesData } from "@/data/characters";
import { characterTypesData } from "@/data/characters";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { characterTypesDataT } from "@/lib/types";

type FilterCategories = "stars" | "types" | "attacks" | "parties";
interface ActiveFiltersT {
  stars: string[];
  types: string[];
  attacks: string[];
  parties: string[];
}

export default function FilterComponent({
  onFilterChange,
}: {
  onFilterChange: (activeFilters: ActiveFiltersT) => void;
}) {
  const [activeFilters, setActiveFilters] = useState<ActiveFiltersT>({
    stars: [],
    types: [],
    attacks: [],
    parties: [],
  });

  const toggleFilter = useCallback(
    (category: FilterCategories, item: string) => {
      // update active filters
      setActiveFilters((prev) => {
        const newFilters = { ...prev };
        if (newFilters[category].includes(item)) {
          newFilters[category] = newFilters[category].filter((i) => i !== item);
        } else {
          newFilters[category] = [...newFilters[category], item];
        }
        return newFilters;
      });
    },
    [],
  );

  useEffect(() => {
    // if change pass active filters to parent components
    onFilterChange(activeFilters);
  }, [activeFilters, onFilterChange]);

  const isActive = useCallback(
    // if icludes return ture and bg-zinc-600
    (category: FilterCategories, item: string) => {
      return activeFilters[category].includes(item);
    },
    [activeFilters],
  );

  const renderButtons = useCallback(
    (data: { name: string; iconUrl: string }[], category: FilterCategories) => {
      return data.map((item, index) => (
        <Button
          key={index}
          variant={"ghost"}
          size={"icon"}
          className={`size-16 ${category === "parties" ? "" : "p-3"} ${isActive(category, item.name) ? "bg-zinc-800/90" : ""}`}
          onClick={() => {
            toggleFilter(category, item.name);
          }}
        >
          <Image src={item.iconUrl} alt={item.name} width={80} height={80} />
        </Button>
      ));
    },
    [toggleFilter, isActive],
  );

  return (
    <div className="my-4 rounded-3xl bg-zinc-700 p-5">
      <div className="flex flex-wrap items-center justify-around">
        {/* Stars */}
        <div className="flex flex-wrap justify-center gap-1 p-1">
          {renderButtons(characterTypesData.stars, "stars")}
        </div>
        {/* Types */}
        <div className="flex flex-wrap justify-center gap-1 p-1">
          {renderButtons(characterTypesData.types, "types")}
        </div>
        {/* Attack */}
        <div className="flex flex-wrap justify-center gap-1 p-1">
          {renderButtons(characterTypesData.attack, "attacks")}
        </div>
        {/* Parties */}
        <div className="flex flex-wrap justify-center gap-1 p-1">
          {renderButtons(partiesData, "parties")}
        </div>
      </div>
    </div>
  );
}
