import Card from "../ui/Card";
import CardHeading from "../ui/CardHeading";
import CardContent from "../ui/CardContent";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MailIcon } from "../icons/MailIcon";

export default function About() {
  return (
    <Card>
      <CardHeading heading="About me" />
      <CardContent className="mt-4 space-y-4">
        <div className="prose prose-sm prose-gray text-gray-600">
          <p>
            Hi! My name is Matthew Potter, and I'm a software engineer based
            in Austin, TX. My career has allowed me to work with a variety of
            technologies and disciplines, including Java, React, and DevOps.
            I'm passionate about learning and collaborating with others, and
            I'm always looking for new challenges and opportunities to grow.
          </p>
        </div>

        <hr className="border-gray-200" />

        <div className="flex flex-wrap gap-4">
          <a href="mailto:mattpotter28@gmail.com" className="group inline-flex items-center gap-x-2">
            <MailIcon className="size-4" />
            <span className="font-medium group-hover:underline group-hover:underline-offset-4">
              mattpotter28@gmail.com
            </span>
          </a>

          <a href="https://www.linkedin.com/in/matthew-potter-dev" className="group inline-flex items-center gap-x-2">
            <FaLinkedin size={24} />
            <span className="font-medium group-hover:underline group-hover:underline-offset-4">
              LinkedIn
            </span>
          </a>

          <a href="https://github.com/mattpotter28" className="group inline-flex items-center gap-x-2">
            <FaGithub size={24} />
            <span className="font-medium group-hover:underline group-hover:underline-offset-4">
              GitHub
            </span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
