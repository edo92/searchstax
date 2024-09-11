import { useCallback } from "react";
import DOMPurify from "dompurify";
import { cn } from "@/lib/cn";
import { debounce } from "@/util/util";
import type {
  Searchstax,
  ISearchstaxSuggestion,
} from "@searchstax-inc/searchstudio-ux-js";

export const InputTemplate = (
  suggestions: ISearchstaxSuggestion[],
  onMouseLeave: () => void,
  onMouseOver: (suggestion: ISearchstaxSuggestion) => void,
  onMouseClick: () => void,
  instance: Searchstax
) => {
  const executeDebouncedSearch = useCallback(
    debounce((value: string) => {
      instance.executeSearch(value, true);
    }, 300),
    [instance]
  );

  return (
    <div className="searchstax-search-input-wrapper relative mb-9">
      <div className="border-0.5 border-dark-200/30 dark:border-light-200 flex w-full items-center rounded-lg py-3 shadow-md">
        <input
          type="text"
          aria-label="search"
          id="searchstax-search-input"
          placeholder="SEARCH FOR..."
          className="searchstax-search-input text-dark-100 dark:text-light-200 w-full rounded-lg p-3"
          onChange={(e) => {
            const value = (e.target as HTMLInputElement).value;
            executeDebouncedSearch(value);
          }}
        />

        <button
          className="searchstax-spinner-icon"
          aria-label="search"
          role="button"
          id="searchstax-search-input-action-button"
        />
      </div>

      <div
        className={cn(
          "searchstax-autosuggest-container left-0 top-full z-10 !mt-0.5 w-full rounded-md",
          !suggestions.length && "hidden"
        )}
        onMouseLeave={onMouseLeave}
      >
        {suggestions.map((suggestion) => (
          <div
            className="searchstax-autosuggest-item !rounded-md"
            key={suggestion.term}
          >
            <div
              className="searchstax-autosuggest-item-term-container"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(suggestion.term),
              }}
              onMouseOver={() => onMouseOver(suggestion)}
              onClick={onMouseClick}
              tabIndex={0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
