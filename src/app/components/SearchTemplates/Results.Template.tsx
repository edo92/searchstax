import Link from "next/link";
import Image from "next/image";
import { parseDate } from "@/util/date";

import type {
  ISearchstaxParsedResult,
  ISearchstaxSearchMetadata,
} from "@searchstax-inc/searchstudio-ux-js";
import { Typography } from "@/components/Typography";

export const ResultsTemplate = (
  searchResults: ISearchstaxParsedResult[]
  // resultClicked: (
  //   results: ISearchstaxParsedResult,
  //   event: any
  // ) => ISearchstaxParsedResult[]
) => (
  <>
    {searchResults?.length > 0 && (
      <div
        className="searchstax-search-results mt-2.5 space-y-4"
        aria-live="polite"
      >
        {searchResults.map(
          ({ uniqueId, thumbnail, title, description, url, date, ribbon }) => (
            <div
              tabIndex={0}
              key={uniqueId}
              data-searchstax-unique-result-id={uniqueId}
              className="dark:bg-dark-300 relative flex gap-6 overflow-hidden rounded-lg bg-gray-100 p-6 shadow-md"
            >
              {thumbnail && (
                <div className="flex w-1/3 items-center justify-center">
                  <Image
                    src={thumbnail}
                    alt={title || "Thumbnail"}
                    className="size-full rounded-lg object-cover"
                    width={150}
                    height={150}
                  />
                </div>
              )}

              <div className="flex w-2/3 flex-col justify-between">
                <div>
                  <h3 className="text-primary-100/80 text-xl font-semibold hover:underline">
                    <Link target="_blank" href={url || ""}>
                      {title}
                    </Link>
                  </h3>
                  {description && (
                    <Typography
                      variant="p"
                      size="sm"
                      font="regular"
                      className="text-gray-100"
                    >
                      {description}
                    </Typography>
                  )}
                </div>

                {date && (
                  <Typography
                    variant="p"
                    size="xs"
                    font="light"
                    className="mt-4 !text-gray-600 dark:!text-gray-300"
                  >
                    {parseDate(date)}
                  </Typography>
                )}
              </div>

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
          )
        )}
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
