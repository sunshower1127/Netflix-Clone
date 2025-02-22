import classes from "./page1.module.css";

export default function Page1() {
  return (
    <main>
      <title>Page1</title>

      <div className={"px-10 relative " + classes["parent"]}>
        <div className="hover:bg-cyan-300 relative transition-colors duration-(--duration)">A</div>
        <div className="hover:bg-green-400 absolute">B</div>
      </div>
    </main>
  );
}
