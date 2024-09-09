"use client";

import {
  SearchstaxWrapper,
  SearchstaxInputWidget,
  SearchstaxOverviewWidget,
  SearchstaxFacetsWidget,
} from "@searchstax-inc/searchstudio-ux-react";
import type { Searchstax } from "@searchstax-inc/searchstudio-ux-js";
import { env } from "@/env";

import { renderConfig } from "./config";
import { InputTemplate } from "./components/SearchTemplates/Input.Template";
import { useRef } from "react";
import { OverviewTemplate } from "./components/SearchTemplates/Overview.Template";
import { FacetDesktopTemplate } from "./components/SearchTemplates/Facet.Template";

export default function Home() {
  const instanceRef = useRef<Searchstax>();

  const handleInitialized = (instance: Searchstax) => {
    console.log("Searchstax initialized");
    instanceRef.current = instance;
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

          <div className="search-details-container">
            <SearchstaxOverviewWidget
              searchOverviewTemplate={OverviewTemplate}
            />
          </div>

          <div className="flex flex-row gap-5">
            <SearchstaxFacetsWidget
              facetingType={renderConfig.facetsWidget.facetingType}
              itemsPerPageMobile={renderConfig.facetsWidget.itemsPerPageMobile}
              itemsPerPageDesktop={
                renderConfig.facetsWidget.itemsPerPageDesktop
              }
              facetsTemplateDesktop={FacetDesktopTemplate}
              // facetsTemplateMobile={facetsTemplateMobile}
              specificFacets={undefined}
            />
          </div>
        </div>
      </div>
    </SearchstaxWrapper>
  );
}
