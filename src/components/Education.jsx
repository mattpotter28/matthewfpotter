import Image from "next/image";
import Card from "./ui/Card";
import CardHeading from "./ui/CardHeading";
import CardContent from "./ui/CardContent";
import InfoItem from "./ui/InfoItem";

import univeristyofhouston from "@/images/universityofhouston.png";

import { GraduationCapIcon } from "./icons/GraduationCapIcon";
import { PinIcon } from "./icons/PinIcon";
import { CalendarIcon } from "./icons/CalendarIcon";

const educationList = [
  {
    icon: univeristyofhouston,
    degree: "Bachelor's Degree, Computer Science",
    university: "Univeristy of Houston",
    location: "Houston, TX",
    period: "2016 - 2019",
    description:
      "Degree specialized in Software Design. Acted as President of CougarCS, the largest Computer Science club at the University of Houston.",
  },
];

export default function Education() {
  return (
    <Card>
      <CardHeading heading="Education" />

      <div className="mt-4 space-y-1.5">
        {educationList.map(
          ({ icon, degree, university, location, period, description }) => (
            <CardContent
              key={degree}
              className="flex flex-col gap-4 duration-150 hover:bg-gray-100 sm:flex-row"
            >
              <Image
                src={icon}
                alt=""
                className="size-12 rounded-full border-2 border-white shadow-sm"
              />

              <div className="w-full">
                <h3 className="font-medium">{degree}</h3>

                <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600">
                  <InfoItem icon={GraduationCapIcon} text={university} />
                  <InfoItem icon={PinIcon} text={location} />
                  <InfoItem icon={CalendarIcon} text={period} />
                </div>

                <p className="mt-4 max-w-lg text-gray-600">{description}</p>
              </div>
            </CardContent>
          ),
        )}
      </div>
    </Card>
  );
}
