import Link from "next/link";
import Image from "next/image";
import { parseDate } from "@/util/date";

import type {
  ISearchstaxParsedResult,
  ISearchstaxSearchMetadata,
} from "@searchstax-inc/searchstudio-ux-js";

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
        className="searchstax-search-results space-y-4 mt-2.5"
        aria-live="polite"
      >
        {searchResults.map(
          ({ uniqueId, thumbnail, title, description, url, date, ribbon }) => (
            <div
              tabIndex={0}
              key={uniqueId}
              data-searchstax-unique-result-id={uniqueId}
              className="relative flex rounded-lg bg-gray-100 dark:bg-dark-300 p-6 shadow-md overflow-hidden gap-6"
            >
              {thumbnail && (
                <div className="w-1/3 flex justify-center items-center">
                  <Image
                    src={thumbnail}
                    alt={title || "Thumbnail"}
                    className="rounded-lg object-cover size-full"
                    width={150}
                    height={150}
                  />
                </div>
              )}

              <div className="w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-blue-500 hover:underline">
                    <Link target="_blank" href={url || ""}>
                      {title}
                    </Link>
                  </h3>
                  {description && (
                    <p className="mt-2 text-gray-600 dark:text-light-200">
                      {description}
                    </p>
                  )}
                </div>

                {date && (
                  <div className="mt-4 text-sm text-gray-500 dark:text-light-200">
                    {parseDate(date)}
                  </div>
                )}
              </div>

              {ribbon && (
                <div className="absolute bottom-0 right-0 flex min-w-28 justify-center bg-[#d63202] p-1 rounded-br-md rounded-tl-[2px]">
                  <small className="text-xs font-medium text-white">
                    {ribbon}
                  </small>
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
    <div className="searchstax-no-results text-dark-200 dark:text-light-200 mt-8">
      Showing <strong>no results</strong> for{" "}
      <strong>&quot;{searchTerm}&quot;</strong>
      <br />
      {metaData?.spellingSuggestion && (
        <span>
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
        </span>
      )}
    </div>
    <ul className="text-dark-200 dark:text-light-200">
      <li>
        Try searching for related terms or topics. We offer a wide variety of
        content to help you find the information you need.
      </li>
      <li>Lost? Click on the ‘X’ in the Search Box to reset your search.</li>
    </ul>
  </div>
);
