import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MAXHUB LED Calculator" },
      { name: "description", content: "Kalkulator Videotron & Surat Penawaran" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/calculator.html"
      title="LED Calculator"
      style={{ width: "100vw", height: "100vh", border: 0, display: "block" }}
    />
  );
}
