import { BrowserRouter, Route, Routes, useParams } from "react-router";
import ErrorBoundary from "../components/error-boundary";
import NotFound from "./_not-found";
import MainPage from "./main-page";
import Page1 from "./page1";

const pages = [MainPage, Page1];
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/:pageid"
          element={
            <ErrorBoundary fallback={<NotFound />}>
              <PageById />
            </ErrorBoundary>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function PageById() {
  const { pageid } = useParams();

  const Page = pages[+pageid!];

  return <Page />;
}
