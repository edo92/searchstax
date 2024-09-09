import { ISearchstaxSearchFeedbackData } from "@searchstax-inc/searchstudio-ux-js";

export function OverviewTemplate(
  searchFeedbackData: null | ISearchstaxSearchFeedbackData,
  onOriginalQueryClick: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void
) {
  if (
    !searchFeedbackData ||
    !searchFeedbackData.searchExecuted ||
    searchFeedbackData.totalResults <= 0
  ) {
    return <></>;
  }

  const {
    startResultIndex,
    endResultIndex,
    totalResults,
    searchTerm,
    autoCorrectedQuery,
    originalQuery,
  } = searchFeedbackData;

  return (
    <div className="mb-3">
      <div className="text-dark-200 dark:text-light-200 flex flex-col">
        <div className="flex flex-row gap-x-1 text-nowrap">
          <small>Showing</small>
          <small>
            <b>{`${startResultIndex} - ${endResultIndex}`}</b>
          </small>
          <small>of</small>
          <small>
            <b>{totalResults}</b> results
          </small>
          {searchTerm && (
            <small>
              for <b>&quot;{searchTerm}&quot;</b>
            </small>
          )}
        </div>

        {autoCorrectedQuery && (
          <div className="searchstax-feedback-container-suggested">
            Search instead for{" "}
            <a
              href="#"
              onClick={onOriginalQueryClick}
              className="searchstax-feedback-original-query"
            >
              {originalQuery}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
