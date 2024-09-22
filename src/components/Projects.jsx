import Image from "next/image";
import Card from "./ui/Card";
import CardHeading from "./ui/CardHeading";
import CardContent from "./ui/CardContent";
import InfoItem from "./ui/InfoItem";

import codecrafthub from "@/images/codecrafthub.jpg";
import ecommerceboost from "@/images/ecommerceboost.jpg";
import cloudsnip from "@/images/cloudsnip.jpg";
import healthtrackr from "@/images/healthtrackr.jpg";

import { LinkIcon } from "./icons/LinkIcon";
import { FolderIcon } from "./icons/FolderIcon";
import { UserIcon } from "./icons/UserIcon";
import { CalendarIcon } from "./icons/CalendarIcon";

const projectsList = [
  {
    icon: codecrafthub,
    name: "CodeCraftHub",
    category: "Developer Tools",
    role: "Co-Founder",
    date: "Jun 2021",
    description:
      "CodeCraftHub is a collaborative platform for developers, streamlining code review and project management. Enhance your team's productivity with our intuitive tools.",
    website: "https://codecrafthub.com",
  },
  {
    icon: ecommerceboost,
    name: "E-commerceBoost",
    category: "E-commerce",
    role: "Lead Developer",
    date: "Dec 2022",
    description:
      "E-commerceBoost is a full-stack solution for online retailers, offering seamless inventory management, secure payment gateways, and a user-friendly shopping experience.",
    website: "https://ecommerceboost.io",
  },
  {
    icon: cloudsnip,
    name: "CloudSnip",
    category: "Cloud Services",
    role: "Technical Lead",
    date: "May 2020",
    description:
      "CloudSnip is a versatile cloud storage service, providing users with secure file storage, sharing, and synchronization across devices. Experience the next level of cloud convenience.",
    website: "https://cloudsnip.net",
  },
  {
    icon: healthtrackr,
    name: "HealthTrackr",
    category: "HealthTech",
    role: "Founder",
    date: "Oct 2023",
    description:
      "HealthTrackr revolutionizes personal health management, offering a comprehensive platform for tracking fitness, nutrition, and health metrics. Take control of your well-being.",
    website: "https://healthtrackr.app",
  },
];

export default function Projects() {
  return (
    <Card>
      <CardHeading heading="Projects" />

      <div className="mt-4 space-y-1.5">
        {projectsList.map(
          ({ icon, name, category, role, date, description, website }) => (
            <CardContent
              key={name}
              className="flex flex-col gap-4 duration-150 hover:bg-gray-100 sm:flex-row"
            >
              <Image
                src={icon}
                alt=""
                className="size-12 rounded-full border-2 border-white shadow-sm"
              />

              <div className="w-full">
                <h3 className="font-medium">{name}</h3>

                <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600">
                  <InfoItem icon={FolderIcon} text={category} />
                  <InfoItem icon={UserIcon} text={role} />
                  <InfoItem icon={CalendarIcon} text={date} />
                </div>

                <p className="mt-4 max-w-lg text-gray-600">{description}</p>
                <a
                  href={website}
                  className="group mt-4 inline-flex items-center gap-x-2 text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon className="size-4" />
                  <span className="font-medium group-hover:underline group-hover:underline-offset-4">
                    {website.replace(/^https?:\/\//, "")}
                  </span>
                </a>
              </div>
            </CardContent>
          ),
        )}
      </div>
    </Card>
  );
}
