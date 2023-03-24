import { Collapse } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";

import HeaderContainer from "./header/HeaderContainer";
import HeaderSearch from "./header/HeaderSearch";

const SearchBar = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const containerRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  // state to determine if the search bar is open or not
  return (
    <Box ref={containerRef}>
      {<HeaderContainer handleToggle={handleToggle} setValue={setValue} />}
      <div
        style={{
          position: "absolute",
          top: 0,
          width: "90%",
          zIndex: "99",
          paddingTop: "0.5rem",
        }}
      >
        <Collapse in={open}>
          <HeaderSearch
            handleClose={handleClose}
            setValue={setValue}
            value={value}
          />
        </Collapse>
      </div>
    </Box>
  );
};

export default SearchBar;
