# React Modal Component

The `Modal` component is a reusable and customizable modal dialog for React applications, providing an easy way to display overlay content such as forms, notifications, or any other information that needs to grab the user's attention.

# Usage

```typescript

import React, { useState } from "react";
import Modal from "./Modal/Modal";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open modal</button>
      <Modal open={isOpen} onClose={closeModal} width="500px" height="300px">
        <h1>Hi</h1>
      </Modal>
    </div>
  );
}

export default App;
```

## Props

The `Modal` component accepts the following props:

- `open: boolean`: Determines whether the modal is open or closed. If true, the modal is displayed; if false, it is hidden.
- `onClose: () => void`: A callback function that is triggered when the modal should be closed. This can be used to update the `open` state in the parent component.
- `children: ReactNode`: The content to be displayed inside the modal.
- `width?: string` (Optional): The width of the modal. Default is based on your CSS or inline styles.
- `height?: string` (Optional): The height of the modal. Default is based on your CSS or inline styles.

## Features

- **Close on Escape Key**: The modal can be closed by pressing the `Escape` key.
- **Close on Outside Click**: Clicking outside the modal content will close the modal.
- **Customizable Size**: You can set the modal's width and height via props.
