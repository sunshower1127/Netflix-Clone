import reactLogo from "@/assets/react-logo.svg";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center gap-10">
      <div className="font-serif text-8xl text-center">Not Found 404</div>
      <img className="w-50 animate-spin" src={reactLogo} />
    </main>
  );
}
