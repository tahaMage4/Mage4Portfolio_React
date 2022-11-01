import { FaMagento, FaDev } from "react-icons/fa";
import { SiPwa } from "react-icons/si";
import { GrIntegration, GrOptimize, GrResources } from "react-icons/gr";
import { VscExtensions } from "react-icons/vsc";

const services = [
  {
    id: 0,
    className: "taha",
    icon: <FaDev size={80} />,
    tittle: "Backend Development",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit quos id, ea tempora obcaecati ipsam?",
    datafilter: { id: 0, name: "taha", tittle: "developer" },
  },
  {
    id: 1,
    className: "",
    icon: <SiPwa size={80} />,
    tittle: "Frontend & PWA ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint",
    // datafilter: [{ id: 1, name: "haris", tittle: "developer" }],
  },
  {
    id: 2,
    className: "",
    icon: <GrIntegration size={80} />,
    tittle: "3rd Party Integrations ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint",
    // datafilter: [{ id: 2, name: "taha", tittle: "developer" }],
  },
  {
    id: 3,
    className: "",
    icon: <FaMagento size={80} style={{ alignContent: "center" }} />,
    tittle: "Managed Support ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint",
    // datafilter: [{ id: 3, name: "taha", tittle: "developer" }],
  },
  {
    id: 4,
    className: "",
    icon: <FaMagento size={80} style={{ alignContent: "center" }} />,
    tittle: "M2 Migrations ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint",
    datafilter: [{ id: 4, name: "taha", tittle: "developer" }],
  },
  {
    id: 5,
    className: "",
    icon: <GrOptimize size={80} />,
    tittle: "Audits & Optimizations ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint",
    // datafilter: [{ id: 5, name: "taha", tittle: "developer" }],
  },
  {
    id: 6,
    className: "",
    icon: <GrResources size={80} />,
    tittle: "Dedicated Resources  ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint",
    // datafilter: [{ id: 6, name: "taha", tittle: "developer" }],
  },
  {
    id: 7,
    className: "",
    icon: <VscExtensions size={80} />,
    tittle: "Extensions ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint",
    // datafilter: [{ id: 7, name: "taha", tittle: "developer" }],
  },
];

export default services;
