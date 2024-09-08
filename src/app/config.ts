type RenderConfig = {
  inputWidget: {
    suggestAfterMinChars: number;
  };
  facetsWidget: {
    itemsPerPageDesktop: number;
    itemsPerPageMobile: number;
    facetingType: "and" | "or" | "showUnavailable" | "tabs";
  };
  resultsWidget: {
    renderMethod: "infiniteScroll" | "pagination";
    itemsPerPage: number;
  };
};

export const renderConfig: RenderConfig = {
  inputWidget: {
    suggestAfterMinChars: 3,
  },
  facetsWidget: {
    itemsPerPageDesktop: 3,
    itemsPerPageMobile: 99,
    facetingType: "and",
  },
  resultsWidget: {
    renderMethod: "pagination",
    itemsPerPage: 10,
  },
};
