import React, { useState } from "react";
import { Button, MenuItem } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";

import { filterFilm, renderFilm, IFilm, TOP_100_FILMS } from "./films";

const FilmSelect = Select.ofType<IFilm>();

export const SelectExample: React.FC = () => {
  const [film, setFilm] = useState<IFilm>(TOP_100_FILMS[0]);
  return (
    <FilmSelect
      fill={true}
      items={TOP_100_FILMS}
      itemPredicate={filterFilm}
      itemRenderer={renderFilm}
      noResults={<MenuItem disabled={true} text="No results." />}
      onItemSelect={setFilm}
    >
      <h4 className="bp4-heading thinnerText">
        Select Filter Option <Button text={film.title} rightIcon="caret-down" />
      </h4>
    </FilmSelect>
  );
};
