import { Typography } from "@/components/Typography";
import type { IPaginationData } from "@searchstax-inc/searchstudio-ux-js";

export const PaginationTemplate = (
  paginationData: IPaginationData | null,
  nextPage: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void,
  previousPage: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
) => (
  <>
    {paginationData?.totalResults !== 0 && (
      <div className="searchstax-pagination-container">
        <div className="searchstax-pagination-content">
          <button
            className="searchstax-pagination-previous"
            style={{
              pointerEvents: paginationData?.isFirstPage ? "none" : "auto",
            }}
            onClick={(e) =>
              previousPage(
                e as unknown as React.MouseEvent<HTMLAnchorElement, MouseEvent>
              )
            }
            onKeyDown={(e) =>
              e.key === "Enter" || e.key === " "
                ? previousPage(
                    e as unknown as React.MouseEvent<
                      HTMLAnchorElement,
                      MouseEvent
                    >
                  )
                : null
            }
            tabIndex={0}
            id="searchstax-pagination-previous"
            aria-disabled={paginationData?.isFirstPage}
          >
            &lt; Previous
          </button>

          <Typography
            variant="span"
            font="medium"
            size="sm"
            className="searchstax-pagination-details"
          >
            {paginationData?.startResultIndex} -{" "}
            {paginationData?.endResultIndex} of {paginationData?.totalResults}
          </Typography>

          <button
            className="searchstax-pagination-next"
            style={{
              pointerEvents: paginationData?.isLastPage ? "none" : "auto",
            }}
            onClick={(e) =>
              nextPage(
                e as unknown as React.MouseEvent<HTMLAnchorElement, MouseEvent>
              )
            }
            onKeyDown={(e) =>
              e.key === "Enter" || e.key === " "
                ? nextPage(
                    e as unknown as React.MouseEvent<
                      HTMLAnchorElement,
                      MouseEvent
                    >
                  )
                : null
            }
            tabIndex={0}
            id="searchstax-pagination-next"
            aria-disabled={paginationData?.isLastPage}
          >
            Next &gt;
          </button>
        </div>
      </div>
    )}
  </>
);
