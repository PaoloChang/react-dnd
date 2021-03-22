import React, { useState, useRef } from "react";

function DragNDrop({ data }) {
  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);

  const dragItem = useRef();
  const dragNode = useRef();

  const handleDragStart = (e, item) => {
    console.log("Drag starting...", item);
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    dragItem.current = item;
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, targetItem) => {
    // console.log(e, params);
    const currentItem = dragItem.current;
    if (dragNode.current !== e.target) {
      //   console.log("Drag enter..", targetItem);
      setList((oldList) => {
        let newList = JSON.parse(JSON.stringify(oldList));
        newList[targetItem.grpIdx].items.splice(
          targetItem.itemIdx,
          0,
          newList[currentItem.grpIdx].items.splice(currentItem.itemIdx, 1)[0]
          //   newList[dragItem.current.grpIdx].items.splice(
          //     dragItem.current.itemIdx,
          //     1
          //   )[0]
        );
        dragItem.current = targetItem;
        return newList;
      });
    }
  };

  const handleDragEnd = (e) => {
    console.log("Drag end.");
    setDragging(false);
    dragItem.current = null;
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragNode.current = null;
  };

  const getStyles = (item) => {
    // const currentItem = dragItem.current;
    if (
      dragItem.current.grpIdx === item.grpIdx &&
      dragItem.current.itemIdx === item.itemIdx
    ) {
      return "current dnd-item";
    }
    return "dnd-item";
  };

  if (list) {
    return (
      <div className="drag-n-drop">
        {list.map((grp, grpIdx) => (
          <div
            key={grp.title}
            className="dnd-group"
            onDragEnter={
              dragging && !grp.items.length
                ? (e) => handleDragEnter(e, { grpIdx, itemIdx: 0 })
                : null
            }
          >
            <div className="dnd-group-title">{grp.title}</div>
            {grp.items.map((item, itemIdx) => (
              <div
                key={item}
                className={
                  dragging ? getStyles({ grpIdx, itemIdx }) : "dnd-item"
                }
                onDragStart={(e) => handleDragStart(e, { grpIdx, itemIdx })}
                onDragEnter={
                  dragging
                    ? (e) => handleDragEnter(e, { grpIdx, itemIdx })
                    : null
                }
                draggable
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default DragNDrop;
