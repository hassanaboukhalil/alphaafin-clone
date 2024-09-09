import {
  BookText,
  CircleDollarSign,
  WandSparkles,
  Kanban,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

type info = {
  id: string;
  label: string;
  icon?: React.ReactNode;
};

const contactInfo: info[] = [
  {
    id: "0",
    label: "Sydney, Austrailia",
    icon: <MapPin fill="#FF9021" size={20} />, // color="#FF9021"
  },
  {
    id: "1",
    label: "0468328227",
    icon: <Phone fill="#FF9021" size={20} />,
  },
  {
    id: "2",
    label: "Mon - Fri: 9:00am - 5:00pm ",
    icon: <Clock fill="#FF9021" size={20} />,
  },
  {
    id: "3",
    label: "Weekends Appointments Only",
    icon: <Clock fill="#FF9021" size={20} />,
  },
];

export default contactInfo;
