import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ISearchstaxParsedResult } from "@searchstax-inc/searchstudio-ux-js";

export const ResultsTemplate = (
  searchResults: ISearchstaxParsedResult[]
  // resultClicked: (
  //   results: ISearchstaxParsedResult,
  //   event: any
  // ) => ISearchstaxParsedResult[]
) => (
  <>
    {searchResults && searchResults.length > 0 && (
      <div className="searchstax-search-results space-y-4 mt-2.5" aria-live="polite">
        {searchResults.map((searchResult) => (
          <div
            tabIndex={0}
            key={searchResult.uniqueId}
            data-searchstax-unique-result-id={searchResult.uniqueId}
            className="searchstax-result-item-link searchstax-result-item-link-wrapping rounded-lg bg-gray-100 dark:bg-dark-300 p-6 shadow-md"
          >
            <div className="mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div
                className={cn(searchResult.thumbnail ? "sm:w-2/3" : "w-full")}
              >
                <h3 className="text-lg font-semibold text-blue-500 hover:underline">
                  <Link target="_blank" href={searchResult.url || ""}>
                    {searchResult.title}
                  </Link>
                </h3>
                <p className="text-dark-200 dark:text-light-200">
                  {searchResult.description}
                </p>
              </div>

              {searchResult.thumbnail && (
                <div className="mt-4 flex justify-center sm:ml-4 sm:mt-0 sm:w-1/3">
                  <div className="flex size-full items-center justify-center">
                    <Image
                      src={searchResult.thumbnail}
                      alt={searchResult.title || ""}
                      className="size-full rounded-lg object-contain"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="rounded-bl-md rounded-tr-[1px] absolute bottom-0 left-0 flex min-w-28 justify-center !bg-[#d63202] p-1">
              <small className="text-xs font-medium text-light-100">
                {searchResult.ribbon}
              </small>
            </div>
          </div>
        ))}
      </div>
    )}
  </>
);
