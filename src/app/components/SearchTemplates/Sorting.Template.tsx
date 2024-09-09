import { ISearchstaxSearchSortingData } from "@searchstax-inc/searchstudio-ux-js";

export function SortingTemplate(
  sortingData: null | ISearchstaxSearchSortingData,
  orderChange: (value: string) => void,
  selectedSorting: string
) {
  return (
    <div className="flex w-full flex-col items-end">
      {sortingData && sortingData?.searchExecuted && (
        <div className="searchstax-sorting-container w-60">
          <label
            className="searchstax-sorting-label text-dark-200 dark:text-light-200"
            htmlFor="searchstax-search-order-select"
          >
            Sort By
          </label>
          <select
            id="searchstax-search-order-select"
            className="searchstax-search-order-select"
            value={selectedSorting}
            onChange={(e) => {
              orderChange(e.target.value);
            }}
          >
            {sortingData.sortOptions.map(function (sortOption) {
              return (
                <option key={sortOption.key} value={sortOption.key}>
                  {sortOption.value}
                </option>
              );
            })}
          </select>
        </div>
      )}
    </div>
  );
}
