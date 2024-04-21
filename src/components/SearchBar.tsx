"use client"; // marking as a client component , because we need to interact with frontend

import React, { useRef, useState, useTransition } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2, Search } from "lucide-react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearching, startTransistion] = useTransition(); //This hook is commonly used in React applications to control transitions, such as animations or state changes.
  const router = useRouter();

  const [query, setQuery] = useState<string>("");

  const search = () => {
    startTransistion(() => {
      router.push(`/searchs?query=${query}`);
    });
  };

  //blur()-->By calling blur(), you're essentially deselecting the input field, removing the cursor from it, and triggering any related events that may occur when focus is lost.
  return (
    <div className="w-full relative h-14 flex flex-col bg-white ">
      <div className="relative h-14 z-10 rounded-md">
        <Input
          disabled={isSearching}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              search();
            }
            if (e.key === "Escape") {
              inputRef?.current?.blur();
            }
          }}
          ref={inputRef}
          className="absolute inset-0 h-full"
        />

        <Button
          disabled={isSearching}
          size="sm"
          onClick={search}
          className="absolute right-0 inset-y-0 h-full rounded-l-none"
        >
          {isSearching ? (
            <Loader2 className="w-6 h-6 animate-spin " />
          ) : (
            <Search className="w-6 h-6" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
