import { RouterProvider } from "react-router-dom";
import router from "@/router/router.tsx";

import { ThemeProvider } from "@/components/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
