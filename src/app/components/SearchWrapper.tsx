"use client";

import { env } from "@/env";
import { Searchstax } from "@searchstax-inc/searchstudio-ux-js";
import { SearchstaxWrapper } from "@searchstax-inc/searchstudio-ux-react";

type SearchWrapperProps = {
  initialized?: (searchstax: Searchstax) => void;
};

export const SearchWrapper: React.FC<
  React.PropsWithChildren<SearchWrapperProps>
> = ({ children, initialized }) => {
  const handleInitialized = (searchstax: Searchstax) => {
    initialized?.(searchstax);
    console.log("Searchstax initialized");
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
      {children}
    </SearchstaxWrapper>
  );
};
