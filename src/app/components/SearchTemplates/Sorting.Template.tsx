import { Typography } from "@/components/Typography";
import { ISearchstaxSearchSortingData } from "@searchstax-inc/searchstudio-ux-js";

export function SortingTemplate(
  sortingData: null | ISearchstaxSearchSortingData,
  orderChange: (value: string) => void,
  selectedSorting: string
) {
  return (
    <div className="flex w-full flex-col items-end">
      {sortingData && sortingData?.searchExecuted && (
        <div className="searchstax-sorting-container w-60 px-3">
          <label
            className="searchstax-sorting-label"
            htmlFor="searchstax-search-order-select"
          >
            <Typography variant="span" size="sm" font="regular">
              Sort By
            </Typography>
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
