"use client";

import Image from "next/image";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import SectionWrapper from "../wrappers/SectionWrapper";
import HeadshotCardWrapper from "../wrappers/character/HeadshotCardWrapper";
import FilterComponent from "./FilterComponent";
import { ActiveFiltersT, CharacterCardT } from "@/lib/types";
import { useEffect, useMemo, useState } from "react";
import { characterCardsData } from "@/data/characters";
import { partiesData } from "@/data/characters";
import { characterTypesData } from "@/data/characters";
import Link from "next/link";

export default function CharactersList() {
  const [activeFilters, setActiveFilters] = useState<ActiveFiltersT>();
  const [filteredCharacters, setFilteredCharacters] =
    useState<CharacterCardT[]>();

  const handleFilterData = (
    data: CharacterCardT[],
    filter: any,
  ): CharacterCardT[] => {
    const { parties = [], roles = [], stars = [], types = [] } = filter;

    return data.filter((character) => {
      const matchParty =
        parties.length === 0 || parties.includes(character.party);
      const matchType = types.length === 0 || types.includes(character.type);
      const matchRole = roles.length === 0 || roles.includes(character.role);
      const matchStar = stars.length === 0 || stars.includes(character.star);

      return matchParty && matchType && matchRole && matchStar;
    });
  };

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

  // 筛选展示的内容
  useEffect(() => {
    const filteredData = handleFilterData(characterCardsData, filters);
    console.log(filteredData, filters);

    if (filteredData.length === 0) {
      setFilteredCharacters(characterCardsData);
    }
    setFilteredCharacters(filteredData);
  }, [filters]);

  return (
    <SectionWrapper className="bg-zinc-900">
      <MaxWidthWrapper className="max-w-screen-xl">
        {/* Filter Section */}
        <FilterComponent
          onFilterChange={(activeFilters: ActiveFiltersT) => {
            setActiveFilters(activeFilters);
          }}
        />
        {/* Characters List */}
        <div className="my-4 rounded-3xl bg-zinc-800 p-4 sm:p-8 lg:p-12">
          <div className="flex flex-wrap justify-center">
            {filteredCharacters &&
              filteredCharacters.map((character, index) => (
                <div key={index}>
                  {/* <Link
                    className="reletive"
                    href={character.destailLink}
                    target="_blank"
                  > */}
                  <HeadshotCardWrapper star={character.star}>
                    <Image
                      src={character.headshotUrl}
                      alt={character.name + "headshot"}
                      width={150}
                      height={150}
                    />
                  </HeadshotCardWrapper>
                  {/* </Link> */}
                </div>
              ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </SectionWrapper>
  );
}
