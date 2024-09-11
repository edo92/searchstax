import Image from "next/image";
import { cn } from "@/lib/cn";
import { parseDate } from "@/util/date";
import { Typography } from "@/components/Typography";
import type {
  ISearchstaxParsedResult,
  ISearchstaxSearchMetadata,
} from "@searchstax-inc/searchstudio-ux-js";

export const ResultsTemplate = (
  searchResults: ISearchstaxParsedResult[],
  resultClicked: (
    results: ISearchstaxParsedResult,
    event: unknown
  ) => ISearchstaxParsedResult[]
) => (
  <>
    {searchResults?.length > 0 && (
      <div
        className="searchstax-search-results mt-2.5 space-y-4"
        aria-live="polite"
      >
        {searchResults.map((searchResult) => {
          const {
            uniqueId,
            thumbnail,
            title,
            description,
            snippet,
            date,
            ribbon,
          } = searchResult;
          const hasImage = Boolean(thumbnail);

          return (
            <div
              tabIndex={0}
              key={uniqueId}
              data-searchstax-unique-result-id={uniqueId}
              className="container mx-auto p-3"
            >
              <div className="mx-auto w-full">
                <div className="relative mx-auto shadow-md">
                  <div
                    className={cn(
                      "flex overflow-hidden rounded-lg",
                      "dark:bg-dark-300 bg-gray-100",
                      !hasImage && "flex-col justify-between p-6"
                    )}
                  >
                    {thumbnail && (
                      <div className="w-1/3 sm:flex sm:justify-between sm:items-center">
                        <Image
                          src={thumbnail}
                          alt={title || "Article thumbnail"}
                          className="max-h-[300px] object-cover"
                          width={350}
                          height={350}
                        />
                      </div>
                    )}

                    <div
                      className={cn(
                        hasImage && "flex w-2/3 flex-col justify-between p-6"
                      )}
                    >
                      <div className="relative">
                        {title && (
                          <h2
                            onClick={(e) => resultClicked(searchResult, e)}
                            className="text-primary-100/80 cursor-pointer text-xl font-semibold hover:underline"
                          >
                            {title}
                          </h2>
                        )}

                        {description && (
                          <Typography
                            variant="p"
                            size="sm"
                            font="regular"
                            className="mb-4"
                          >
                            {description}
                          </Typography>
                        )}

                        {snippet && (
                          <Typography
                            variant="p"
                            size="sm"
                            font="regular"
                            className="mb-4"
                          >
                            {snippet}
                          </Typography>
                        )}
                      </div>

                      {date && (
                        <Typography
                          variant="span"
                          size="sm"
                          font="light"
                          className="!text-gray-600 dark:!text-gray-300"
                        >
                          {parseDate(date)}
                        </Typography>
                      )}

                      {ribbon && (
                        <div className="absolute bottom-0 right-0 flex min-w-28 justify-center rounded-br-md rounded-tl-[2px] bg-[#d63202] p-1">
                          <Typography
                            variant="small"
                            size="xs"
                            font="medium"
                            className="text-light-100"
                          >
                            {ribbon}
                          </Typography>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )}
  </>
);

export const NoResultsTemplate = (
  searchTerm: string,
  metaData: ISearchstaxSearchMetadata | null,
  executeSearch: (searchTerm: string) => void
) => (
  <div>
    <div className="searchstax-no-results mt-8">
      <Typography variant="span" font="regular" size="md">
        Showing <strong>no results</strong> for{" "}
        <strong>&quot;{searchTerm}&quot;</strong>
      </Typography>
      {metaData?.spellingSuggestion && (
        <Typography variant="span" font="regular" size="md">
          &nbsp;Did you mean{" "}
          <a
            href="#"
            className="searchstax-suggestion-term"
            onClick={(e) => {
              e.preventDefault();
              executeSearch(metaData.spellingSuggestion);
            }}
          >
            {metaData.spellingSuggestion}
          </a>
          ?
        </Typography>
      )}
    </div>
    <ul className="text-dark-200 dark:text-light-200">
      <li>
        <Typography variant="p" font="regular" size="md">
          {"Try searching for related terms or topics."}
          <br />
          {
            "We offer a wide variety of content to help you find the information you need."
          }
        </Typography>
      </li>
      <li>
        <Typography variant="p" font="regular" size="md">
          {"Lost? Click on the ‘X’ in the Search Box to reset your search."}
        </Typography>
      </li>
    </ul>
  </div>
);
