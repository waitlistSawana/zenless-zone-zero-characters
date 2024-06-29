"use client";

import Image from "next/image";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import SectionWrapper from "../wrappers/SectionWrapper";
import HeadshotCardWrapper from "../wrappers/character/HeadshotCardWrapper";
import FilterComponent from "./FilterComponent";
import { ActiveFiltersT } from "@/lib/types";
import { useEffect, useMemo, useState } from "react";
import { characterCardsData } from "@/data/characters";
import { partiesData } from "@/data/characters";
import { characterTypesData } from "@/data/characters";

export default function CharactersList() {
  const [activeFilters, setActiveFilters] = useState<ActiveFiltersT>();

  const allFilters = {
    stars: characterTypesData.stars.map((item) => item.name),
    types: characterTypesData.types.map((item) => item.name),
    attacks: characterTypesData.attack.map((item) => item.name),
    parties: partiesData.map((item) => item.name),
  };

  const filters = useMemo(() => {
    // check activeFilters
    if (!activeFilters) return allFilters;
    // 检查是否所有筛选条件都为空
    const isAllEmpty = Object.values(activeFilters).every(
      (arr) => !arr || arr.length === 0,
    );
    // 如果所有筛选条件都为空 return all
    if (isAllEmpty) {
      return allFilters;
    }
    // 否则，return active filter
    return activeFilters;
  }, [activeFilters]);

  return (
    <SectionWrapper className="bg-zinc-800">
      <MaxWidthWrapper className="max-w-screen-xl">
        {/* Filter Section */}
        <FilterComponent
          onFilterChange={(activeFilters: ActiveFiltersT) => {
            setActiveFilters(activeFilters);
          }}
        />
        {/* Characters List */}
        <div className="my-4 rounded-3xl bg-zinc-700 p-4 sm:p-8 lg:p-12">
          <div className="flex flex-wrap justify-center gap-1">
            {characterCardsData.map((character, index) => (
              <div key={index} className="reletive">
                <HeadshotCardWrapper>
                  <Image
                    src={character.headshotUrl}
                    alt={character.name + "headshot"}
                    width={150}
                    height={150}
                  />
                </HeadshotCardWrapper>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </SectionWrapper>
  );
}
