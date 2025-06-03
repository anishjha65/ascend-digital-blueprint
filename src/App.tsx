import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import SocialMediaService from "./pages/SocialMediaService";
import SEOService from "./pages/SEOService";
import WebDevService from "./pages/WebDevService";
import Portfolio from "./pages/Portfolio";
import PortfolioManager from "./pages/admin/PortfolioManager";
import ScrollToTop from "./ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={
              <Layout>
                <Home />
              </Layout>
            } />
            <Route path="/services" element={
              <Layout>
                <Services />
              </Layout>
            } />
            <Route path="/services/social-media" element={
              <Layout>
                <SocialMediaService />
              </Layout>
            } />
            <Route path="/services/seo" element={
              <Layout>
                <SEOService />
              </Layout>
            } />
            <Route path="/services/web-development" element={
              <Layout>
                <WebDevService />
              </Layout>
            } />
            <Route path="/about" element={
              <Layout>
                <About />
              </Layout>
            } />
            <Route path="/blog" element={
              <Layout>
                <Blog />
              </Layout>
            } />
            <Route path="/blog/:slug" element={
              <Layout>
                <BlogPost />
              </Layout>
            } />
            <Route path="/portfolio" element={
              <Layout>
                <Portfolio />
              </Layout>
            } />
            <Route path="/contact" element={
              <Layout>
                <Contact />
              </Layout>
            } />
            <Route path="/thank-you" element={
              <Layout>
                <ThankYou />
              </Layout>
            } />
            <Route path="/admin" element={
              <ProtectedRoute>
                <Layout>
                  <Admin />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/admin/portfolio" element={
              <ProtectedRoute>
                <Layout>
                  <PortfolioManager />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="*" element={
              <Layout>
                <NotFound />
              </Layout>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
