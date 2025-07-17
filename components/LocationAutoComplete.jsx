"use client";

import React, { useEffect, useState } from "react";
import {
  Command,
  CommandInput,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

const LocationAutoComplete = ({ value, onChange, placeholder, className }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [autocompleteService, setAutocompleteService] = useState(null);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scriptId = "google-maps-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.onload = () => {
        setAutocompleteService(
          new window.google.maps.places.AutocompleteService()
        );
      };
      document.head.appendChild(script);
    } else if (window.google?.maps?.places) {
      setAutocompleteService(
        new window.google.maps.places.AutocompleteService()
      );
    }
  }, [apiKey]);

  useEffect(() => {
    if (query && autocompleteService) {
      autocompleteService.getPlacePredictions(
        {
          input: query,
          componentRestrictions: { country: "KE" },
        },
        (predictions) => {
          setSuggestions(predictions || []);
        }
      );
    } else {
      setSuggestions([]);
    }
  }, [query, autocompleteService]);

  return (
    <Command className={cn("w-full rounded-lg border", className)}>
      <CommandInput
        placeholder={placeholder || "Search location..."}
        value={query}
        onValueChange={setQuery}
      />
      {suggestions.length > 0 && (
        <CommandGroup>
          {suggestions.map((suggestion) => (
            <CommandItem
              key={suggestion.place_id}
              value={suggestion.description}
              onSelect={() => {
                setQuery(suggestion.description);
                onChange(suggestion.description);
                setSuggestions([]);
              }}
            >
              {suggestion.description}
            </CommandItem>
          ))}
        </CommandGroup>
      )}
    </Command>
  );
};

export default LocationAutoComplete;
