import { cn } from "@/lib/cn";
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
  return (
    <div className="searchstax-search-input-wrapper mb-4">
      <div className="border-0.5 border-dark-200/30 dark:border-light-200 flex w-full items-center rounded-lg py-3 shadow-md dark:border">
        <input
          type="text"
          aria-label="search"
          id="searchstax-search-input"
          placeholder="SEARCH FOR..."
          className="searchstax-search-input text-dark-100 dark:text-light-200 w-full rounded-lg p-3"
          onChange={(e) => {
            instance.executeSearch(e.target.value);
          }}
        />

        <div
          className={cn(
            "searchstax-autosuggest-container",
            !suggestions.length && "hedden"
          )}
          onMouseLeave={onMouseLeave}
        >
          {suggestions.map((suggestion) => (
            <div className="searchstax-autosuggest-item" key={suggestion.term}>
              <div
                className="searchstax-autosuggest-item-term-container"
                dangerouslySetInnerHTML={{ __html: suggestion.term }}
                onMouseOver={() => onMouseOver(suggestion)}
                onClick={onMouseClick}
                tabIndex={0}
              />
            </div>
          ))}
        </div>

        <button
          className="searchstax-spinner-icon"
          aria-label="search"
          role="button"
          id="searchstax-search-input-action-button"
        />
      </div>
    </div>
  );
};
