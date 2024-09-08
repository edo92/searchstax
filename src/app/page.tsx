"use client";

import { SearchstaxInputWidget } from "@searchstax-inc/searchstudio-ux-react";
import { renderConfig } from "./config";

import { SearchWrapper } from "./components/SearchWrapper";
import { InputTemplate } from "./components/SearchTemplates/Input.Template";

export default function Home() {
  return (
    <SearchWrapper>
      <div className="searchstax-page-layout-container">
        <SearchstaxInputWidget
          inputTemplate={InputTemplate}
          suggestAfterMinChars={renderConfig.inputWidget.suggestAfterMinChars}
        />
      </div>
    </SearchWrapper>
  );
}
