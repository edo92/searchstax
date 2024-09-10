"use client";

import { createRef } from "react";
import { cn } from "@/lib/cn";
import {
  IFacet,
  IFacetValue,
  IFacetValueData,
  IFacetsTemplateData,
} from "@searchstax-inc/searchstudio-ux-js";
import { Typography } from "@/components/Typography";

interface IFacetData extends IFacet {
  values: (IFacetValue & IFacetValueData)[];
  showingAllFacets?: boolean;
  hasMoreFacets?: boolean;
}
interface FacetsTemplateData extends IFacetsTemplateData {
  facets: IFacetData[];
}

export const FacetDesktopTemplate = (
  facetsTemplateDataDesktop: IFacetsTemplateData | null,
  facetContainers: {
    [key: string]: React.LegacyRef<HTMLDivElement> | undefined;
  },
  isNotDeactivated: (name: string) => boolean,
  toggleFacetGroup: (name: string) => void,
  selectFacet: (
    index: string,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: IFacetValueData,
    isInput: boolean
  ) => void,
  isChecked: (facetValue: IFacetValueData) => boolean | undefined,
  showMoreLessDesktop: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: IFacetData
  ) => void
) => (
  <div className="searchstax-facets-container-desktop min-w-48 md:min-w-52 xl:min-w-64">
    {(facetsTemplateDataDesktop as FacetsTemplateData)?.facets.map((facet) => (
      <div
        key={`${facet.name}-desktop`}
        className={cn(
          "searchstax-facet-container",
          "dark:bg-dark-300 rounded-lg bg-gray-100 p-3 shadow-lg",
          isNotDeactivated(facet.name) && "active"
        )}
      >
        <div>
          <div
            className="searchstax-facet-title-container"
            onClick={() => {
              toggleFacetGroup(facet.name);
            }}
          >
            <div className="searchstax-facet-title">
              <Typography
                variant="span"
                size="md"
                font="regular"
                className="!capitalize"
              >
                {facet.label}
              </Typography>
            </div>
            <div className="searchstax-facet-title-arrow active after:!right-0 after:!top-[-5px] after:!size-8" />
          </div>
          <div className="searchstax-facet-values-container" aria-live="polite">
            {facet.values.map((facetValue: IFacetValueData, key) => {
              facetContainers[key + facet.name] = createRef();
              return (
                <div
                  ref={facetContainers[key + facet.name]}
                  key={facetValue.value + facetValue.parentName}
                  className={cn(
                    "searchstax-facet-value-container",
                    facetValue.disabled && "searchstax-facet-value-disabled",
                    "text-md font-regular"
                  )}
                >
                  <div
                    className={cn(
                      "searchstax-facet-input",
                      `desktop-${key}${facet.name}`
                    )}
                  >
                    <input
                      type="checkbox"
                      className="searchstax-facet-input-checkbox"
                      checked={isChecked(facetValue)}
                      readOnly={true}
                      aria-label={`${facetValue.value} ${facetValue.count}`}
                      disabled={facetValue.disabled}
                      onClick={(e) => {
                        selectFacet(key + facet.name, e, facetValue, true);
                      }}
                    />
                  </div>

                  <div
                    className="searchstax-facet-value-label"
                    onClick={(e) => {
                      selectFacet(key + facet.name, e, facetValue, false);
                    }}
                  >
                    <Typography
                      variant="span"
                      size="md"
                      font="regular"
                      className="!capitalize"
                    >
                      {facetValue.value}
                    </Typography>
                  </div>
                  <div
                    className="searchstax-facet-value-count text-dark-200 dark:text-light-200"
                    onClick={(e) => {
                      selectFacet(key + facet.name, e, facetValue, false);
                    }}
                  >
                    <Typography
                      variant="span"
                      size="md"
                      font="regular"
                      className="!capitalize"
                    >
                      ({facetValue.count})
                    </Typography>
                  </div>
                </div>
              );
            })}

            {facet.hasMoreFacets && (
              <div className="searchstax-facet-show-more-container">
                <div
                  className="searchstax-facet-show-more-container"
                  onClick={(e) => {
                    showMoreLessDesktop(e, facet);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      showMoreLessDesktop(
                        e as unknown as React.MouseEvent<
                          HTMLDivElement,
                          MouseEvent
                        >,
                        facet
                      );
                    }
                  }}
                  tabIndex={0}
                >
                  {facet.showingAllFacets && (
                    <div className="searchstax-facet-show-less-button searchstax-facet-show-button text-sm font-medium">
                      less
                    </div>
                  )}
                  {!facet.showingAllFacets && (
                    <div className="searchstax-facet-show-more-button searchstax-facet-show-button text-sm font-medium">
                      more
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);
