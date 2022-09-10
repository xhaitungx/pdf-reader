import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleChangeReadMode } from "../../store/actions";
import { stateType } from "../../store";
import { Box, Fab, Tooltip } from "@mui/material";
import { Translate, Notes, Visibility, Cancel } from "@mui/icons-material";
import "./style.css";
const MultiButton = () => {
  const [isHover, setIsHover] = useState(false);
  const readMode = useSelector((state: stateType) => state.viewArea.readMode);
  const dispatch = useDispatch();

  const onChangeReadMode = (readModeNumber) => {
    dispatch(handleChangeReadMode(readModeNumber));
    setIsHover(false);
  };

  const onHover = (e) => {
    setIsHover(true);
  };

  const ButtonWithTooltip = ({ title, element, background, readMode }) => (
    <Tooltip title={title} placement="left" disableInteractive>
      <Fab
        onMouseEnter={onHover}
        onClick={(e) => onChangeReadMode(readMode)}
        sx={{ mb: 1, background: background }}
      >
        {element}
      </Fab>
    </Tooltip>
  );

  return (
    <div className="multi-button" onMouseLeave={(e) => setIsHover(false)}>
      {isHover && (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <ButtonWithTooltip
            title="Ghi chú"
            element={<Notes />}
            readMode={2}
            background="#00cbfe"
          />
          <ButtonWithTooltip
            title="Dịch nghĩa"
            element={<Translate />}
            readMode={1}
            background="#d8f2ff"
          />
        </Box>
      )}
      {!isHover && readMode === 0 && (
        <ButtonWithTooltip
          title="Mặc định"
          element={<Visibility />}
          readMode={0}
          background="white"
        />
      )}
      {!isHover && readMode === 1 && (
        <ButtonWithTooltip
          title="Mặc định"
          element={<Translate />}
          readMode={0}
          background="white"
        />
      )}
      {!isHover && readMode === 2 && (
        <ButtonWithTooltip
          title="Mặc định"
          element={<Notes />}
          readMode={0}
          background="white"
        />
      )}
      {isHover && readMode !== 0 && (
        <ButtonWithTooltip
          title="Mặc định"
          element={<Cancel />}
          readMode={0}
          background="white"
        />
      )}
    </div>
  );
};

export default MultiButton;
