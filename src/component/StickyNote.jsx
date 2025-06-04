import React, { useState } from "react";
import { RiPushpin2Fill, RiEdit2Line, RiUnpinLine } from "react-icons/ri";
import { MdSave } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";

const StickyNote = ({
  id,
  content,
  isPinned,
  onDelete,
  onDoubleClick,
  onPin,
  position,
  color = "#FEF08A",
  onColorChange = () => {},
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);
  const [isHovered, setIsHovered] = useState(false);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleEdit = () => {
    onDoubleClick(id, editedContent);
    setIsEditing(false);
  };

  const handleTextareaChange = (e) => {
    if (e.target.value.length <= 150) {
      setEditedContent(e.target.value);
    }
  };

  const noteStyles = {
    position: "absolute",
    backgroundColor: color,
    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.12)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    top: position?.y || 0,
    left: position?.x || 0,
    transition: "all 0.2s ease",
    width: "220px",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    transform: isHovered ? "translateY(-2px)" : "none",
  };

  const textStyles = {
    width: "100%",
    overflowWrap: "break-word",
    maxHeight: "180px",
    marginBottom: "12px",
    height: "180px",
    lineHeight: "1.5",
    color: "rgba(0, 0, 0, 0.8)",
    fontSize: "14px",
    overflowY: "auto",
    paddingRight: "4px",
  };

  const handleDragStart = (e) => {
    const offsetX = e.clientX - position.x;
    const offsetY = e.clientY - position.y;
    e.dataTransfer.setData("offsetX", offsetX);
    e.dataTransfer.setData("offsetY", offsetY);
    e.dataTransfer.setData("notesId", id);
  };

  return (
    <div
      style={noteStyles}
      draggable={!isPinned}
      onDoubleClick={handleDoubleClick}
      onDragStart={handleDragStart}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isEditing ? (
        <>
          <textarea
            value={editedContent}
            onChange={handleTextareaChange}
            maxLength={150}
            style={{
              width: "100%",
              resize: "none",
              marginBottom: "12px",
              outline: "none",
              border: "none",
              backgroundColor: "transparent",
              maxHeight: "180px",
              height: "180px",
              lineHeight: "1.5",
              fontSize: "14px",
              color: "rgba(0, 0, 0, 0.8)",
              fontFamily: "inherit",
            }}
            autoFocus
          />
          <button
            className="save-button"
            onClick={handleEdit}
            style={{
              alignSelf: "flex-end",
              background: "rgba(0, 0, 0, 0.08)",
              padding: "6px 12px",
              borderRadius: "6px",
              border: "none",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "13px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <MdSave size={16} />
            Save
          </button>
        </>
      ) : (
        <>
          <div style={textStyles}>{content}</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              width: "100%",
              justifyContent: "flex-end",
              paddingTop: "8px",
              borderTop: "1px solid rgba(0, 0, 0, 0.05)",
            }}
          >
            <input
              type="color"
              value={color}
              onChange={(e) => onColorChange(id, e.target.value)}
              title="Change color"
              style={{
                cursor: "pointer",
                width: "20px",
                height: "20px",
                border: "none",
                background: "transparent",
              }}
            />
            <button
              className="icon-button"
              onClick={() => setIsEditing(true)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                borderRadius: "4px",
              }}
            >
              <RiEdit2Line size={16} color="rgba(0, 0, 0, 0.6)" />
            </button>
            <button
              className="icon-button"
              onClick={() => onPin(id)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                borderRadius: "4px",
              }}
            >
              {isPinned ? (
                <RiUnpinLine size={16} color="rgba(0, 0, 0, 0.6)" />
              ) : (
                <RiPushpin2Fill size={16} color="rgba(0, 0, 0, 0.6)" />
              )}
            </button>
            <button
              className="icon-button"
              onClick={() => onDelete(id)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                borderRadius: "4px",
              }}
            >
              <TiDeleteOutline size={18} color="rgba(0, 0, 0, 0.6)" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default StickyNote;