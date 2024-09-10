import { Typography } from "@/components/Typography";
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
          <Typography variant="small" size="xs" font="regular">
            {"Showing "}
            <b>{`${startResultIndex} - ${endResultIndex} `}</b>
            {"of for "}
            {searchTerm && <b>&quot;{searchTerm}&quot;</b>}{" "}
            <b>{totalResults}</b>
            {"results"}
          </Typography>
        </div>

        {autoCorrectedQuery && (
          <Typography
            size="xs"
            font="regular"
            className="searchstax-feedback-container-suggested"
          >
            Search instead for{" "}
            <a
              href="#"
              onClick={onOriginalQueryClick}
              className="searchstax-feedback-original-query"
            >
              {originalQuery}
            </a>
          </Typography>
        )}
      </div>
    </div>
  );
}
