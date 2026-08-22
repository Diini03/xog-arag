import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { AuthProvider } from "@/hooks/useAuth";

import Home from "@/pages/Home";
import Today from "@/pages/Today";
import Explore from "@/pages/Explore";
import LabPage, { LabsIndex } from "@/pages/Labs";
import GamePage, { GamesIndex } from "@/pages/Games";
import NewsArticle, { NewsIndex } from "@/pages/News";
import Practice from "@/pages/Practice";
import Saved from "@/pages/Saved";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 30_000, refetchOnWindowFocus: false } },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner richColors position="top-right" />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/today" element={<Today />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/labs" element={<LabsIndex />} />
              <Route path="/lab/:id" element={<LabPage />} />
              <Route path="/games" element={<GamesIndex />} />
              <Route path="/game/:id" element={<GamePage />} />
              <Route path="/news" element={<NewsIndex />} />
              <Route path="/news/:id" element={<NewsArticle />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
