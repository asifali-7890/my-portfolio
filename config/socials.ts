import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@asifali-7890",
    icon: Icons.gitHub,
    link: "https://github.com/asifali-7890",
  },
  {
    name: "LinkedIn",
    username: "Asif Ali Quraishi",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/asifaliquraishy/",
  },
  {
    name: "Twitter",
    username: "@ali376376",
    icon: Icons.twitter,
    link: "https://x.com/ali376376",
  },
  {
    name: "Gmail",
    username: "gufraanquraishi",
    icon: Icons.gmail,
    link: "mailto:gufraanquraishi@gmail.com",
  },
];
