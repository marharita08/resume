import { Summary } from "./summary/Summary";
import { Education } from "./education/Education";
import { Certificates } from "./certificates/Certificates";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";

export const Main = () => {
  return (
    <main className="main-container">
      <Summary />
      <Experience />
      <Projects />
      <Education />
      <Certificates />
    </main>
  );
};
