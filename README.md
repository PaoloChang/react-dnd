# React Drag & Drop

1. Initial state
2. Drag Start
   1. Set current Item being dragged
   2. Initialize DragEnd listener
   3. Style dragged card
   4. Initialize DragEnter listener
3. Drag Enter
   1. Set target item if not itself
   2. Handle no item case; push to group
   3. Re-order state
4. Drag End
   1. Clean up current item, remove DropEnd listener

Credit: asatraitis
