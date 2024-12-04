import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import NotFoundPage from "./routes/not-found.tsx";
import ProjectPage from "./routes/project.tsx";
import Root from "./routes/root.tsx";
import SearchPage from "./routes/search.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
    {
        path: "/", // Home page
        element: <Root />,
        errorElement: <NotFoundPage />,
    },
    {
        path: "/search", // Search page
        element: <SearchPage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: "/project/:slug", // Project page
        element: <ProjectPage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: "*", // Not found page
        element: <NotFoundPage />,
    },
]);

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        </QueryClientProvider>
    );
}

createRoot(document.getElementById("root")!).render(<App />);
