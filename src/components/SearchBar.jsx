import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import HeaderContainer from "./header/HeaderContainer";
import HeaderSearch from "./header/HeaderSearch";

const SearchBar = () => {
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
      {!open && <HeaderContainer handleToggle={handleToggle} />}

      {open && (
        <div>
          <HeaderSearch handleClose={handleClose} />
        </div>
      )}
      {/* <Stays /> */}
      {/* <StaysRegion /> */}
    </Box>
  );
};

export default SearchBar;