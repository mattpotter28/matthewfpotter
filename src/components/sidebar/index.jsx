import User from "./User";
import About from "./About";
import Information from "./Information";

export default function Sidebar({ className }) {
  return (
    <div className="space-y-4">
      <User />
      <About />
      {/* <Information /> */}
    </div>
  );
}
