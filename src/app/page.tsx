"use client";

import "./styles/searchstax.css";
import { useRef } from "react";
import {
  SearchstaxWrapper,
  SearchstaxInputWidget,
  SearchstaxOverviewWidget,
  SearchstaxFacetsWidget,
  SearchstaxSortingWidget,
  SearchstaxResultWidget,
  SearchstaxPaginationWidget,
} from "@searchstax-inc/searchstudio-ux-react";
import type {
  Searchstax,
  ISearchstaxParsedResult,
} from "@searchstax-inc/searchstudio-ux-js";

import { env } from "@/env";
import { renderConfig } from "./config";
import { InputTemplate } from "./components/SearchTemplates/Input.Template";
import { OverviewTemplate } from "./components/SearchTemplates/Overview.Template";
import { FacetDesktopTemplate } from "./components/SearchTemplates/Facet.Template";
import { SortingTemplate } from "./components/SearchTemplates/Sorting.Template";
import {
  NoResultsTemplate,
  ResultsTemplate,
} from "./components/SearchTemplates/Results.Template";
import { PaginationTemplate } from "./components/SearchTemplates/Pagination.Template";

export default function Home() {
  const instanceRef = useRef<Searchstax>();

  const handleInitialized = (instance: Searchstax) => {
    console.log("Searchstax initialized");
    instanceRef.current = instance;
  };

  const handleLinkClick = (result: ISearchstaxParsedResult) => {
    return { ...result };
  };

  return (
    <SearchstaxWrapper
      searchURL={env.NEXT_PUBLIC_SEARCH_URL}
      suggesterURL={env.NEXT_PUBLIC_SUGGESTER_URL}
      trackApiKey={env.NEXT_PUBLIC_TRACK_API_KEY}
      searchAuth={env.NEXT_PUBLIC_SEARCH_AUTH}
      authType={env.NEXT_PUBLIC_AUTH_TYPE}
      initialized={handleInitialized}
    >
      <div className="searchstax-page-layout-container">
        <div className="px-7 py-5">
          <SearchstaxInputWidget
            inputTemplate={(sugg, leave, over, click) =>
              InputTemplate(sugg, leave, over, click, instanceRef.current!)
            }
            suggestAfterMinChars={renderConfig.inputWidget.suggestAfterMinChars}
          />

          <div className="flex flex-col gap-5 md:flex-row mt-3">
            <div className="flex flex-col">
              <div className="search-details-container">
                <SearchstaxOverviewWidget
                  searchOverviewTemplate={OverviewTemplate}
                />
              </div>
              <SearchstaxFacetsWidget
                facetingType={renderConfig.facetsWidget.facetingType}
                itemsPerPageMobile={
                  renderConfig.facetsWidget.itemsPerPageMobile
                }
                itemsPerPageDesktop={
                  renderConfig.facetsWidget.itemsPerPageDesktop
                }
                facetsTemplateDesktop={FacetDesktopTemplate}
                specificFacets={undefined}
              />
            </div>

            <div className="flex w-full flex-col gap-3">
              <SearchstaxSortingWidget
                searchSortingTemplate={SortingTemplate}
              />
              <SearchstaxResultWidget
                afterLinkClick={handleLinkClick}
                resultsPerPage={renderConfig.resultsWidget.itemsPerPage}
                renderMethod={renderConfig.resultsWidget.renderMethod}
                resultsTemplate={ResultsTemplate}
                noResultTemplate={NoResultsTemplate}
              />
            </div>
          </div>

          <div className="md:pl-60 py-5">
            <SearchstaxPaginationWidget
              paginationTemplate={PaginationTemplate}
            />
          </div>
        </div>
      </div>
    </SearchstaxWrapper>
  );
}
