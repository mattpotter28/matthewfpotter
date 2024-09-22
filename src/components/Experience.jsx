import Image from "next/image";
import Card from "./ui/Card";
import CardHeading from "./ui/CardHeading";
import CardContent from "./ui/CardContent";
import Badge from "./ui/Badge";
import InfoItem from "./ui/InfoItem";

import paypal from "@/images/paypal.jpg";
import amazon from "@/images/amazon.jpg";
import amex from "@/images/amex.png";

import { PinIcon } from "./icons/PinIcon";
import { BriefcaseIcon } from "./icons/BriefcaseIcon";
import { CalendarIcon } from "./icons/CalendarIcon";

const jobsList = [
  {
    icon: paypal,
    role: "Software Engineer III",
    company: "PayPal",
    location: "Austin, TX",
    period: "May 2024 - Present",
    description: [
      "Working on the Non-Card Settlement team, developing features that handle transactions using Java, Big Query, Oracle SQL, and Tableau.",
      "Participating in the on-call rotation, diagnosing and mitigating job failures as well as keeping documentation up to date."
    ],
  },
  {
    icon: amazon,
    role: "Software Development Engineer",
    company: "Amazon Web Services, Amazon FSx",
    location: "New York, NY",
    period: "Feb 2022 - Apr 2023",
    type: "Full-time",
    description: [
      "Worked on the Control Plane team for FSx, a highly scalable and robust cloud-based Storage-as-a-Service (SaaS) solution.",
      "Operated service as on-call regularly, monitoring alarms and graphs for problematic trends and working with the on-call team to identify possible future incidents.",
      "Contributed to the continuous improvement of development processes, implementing automation techniques and CI/CD pipelines through CodePipeline to streamline software delivery and enhance team productivity.",
      "Expanded the service into four new regions in record time by adapting service components, cloud infrastructure, and region build processes as needed.",
      "Developed command line tools and shell scripts to be used by on-call operators through Linux, including authorization and authentication services.",
    ],
  },
  {
    icon: amex,
    role: "Software Engineer",
    company: "American Express",
    location: "New York, NY",
    period: "Aug 2019 - Feb 2022",
    type: "Full-time",
    description: [
      "Worked on the Acquisition team as both a Front-End Engineer and later a Back-End Engineer, delivering features using Java, JavaScript and React.",
      "Integrated the Personal Checking Account journey by creating RESTful APIs using Java, JBoss, Couchbase and PostgreSQL.",
      "Participated in multiple buddy programs to help guide incoming interns and colleagues through the onboarding process.",
    ],
  },
];

export default function Experience() {
  return (
    <Card>
      <CardHeading heading="Experience" />

      <div className="mt-4 space-y-1.5">
        {jobsList.map(
          ({ icon, role, company, location, period, type, description }) => (
            <CardContent
              key={role}
              className="flex flex-col gap-4 duration-150 hover:bg-gray-100 sm:flex-row"
            >
              <Image
                src={icon}
                alt=""
                className="size-12 rounded-full border-2 border-white shadow-sm"
              />

              <div className="w-full">
                <div className="flex flex-wrap items-center justify-between gap-y-2">
                  <h3 className="font-medium">{role}</h3>
                </div>

                <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600">
                  <InfoItem icon={BriefcaseIcon} text={company} />
                  <InfoItem icon={PinIcon} text={location} />
                  <InfoItem icon={CalendarIcon} text={period} />
                </div>

                <ul className="mt-4 max-w-lg list-disc list-inside text-gray-600">
                  {description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          ),
        )}
      </div>
    </Card>
  );
}
