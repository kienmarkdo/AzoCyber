import React from "react";

export default function MultiSelect() {
  return (
    <>
      <div
        aria-autocomplete="list"
        aria-controls="listbox-0"
        aria-haspopup="listbox"
        className="bp4-popover2-target bp4-fill"
        aria-expanded="false"
        role="combobox"
      >
        <div className="bp4-input bp4-tag-input bp4-active bp4-fill bp4-multi-select">
          <div className="bp4-tag-input-values">
            <input
              className="bp4-input-ghost bp4-multi-select-tag-input-input"
              value=""
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
