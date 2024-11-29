import { cn } from "../../libs/utils";
import * as React from "react";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";

type AlertType = "success" | "error" | "info" | "warning";

const defaultBttnClass =
  "py-4 px-4  w-full rounded-lg flex gap-4 md:flex-row flex-col";

const defaultIcons: Record<AlertType, React.ReactNode> = {
  success: <FaCheckCircle className="text-green-500" />,
  error: <FaExclamationCircle className="text-red-500" />,
  info: <FaInfoCircle className="text-blue-500" />,
  warning: <FaExclamationTriangle className="text-yellow-500" />,
};

const AlertTypeClass: Record<AlertType, string> = {
  success:
    " border-green-600  bg-green-100  text-medium border-2 border-green-800",
  error: "bg-red-50 text-medium border-2 border-red-800",
  info: "bg-blue-50  text-medium border-2 border-blue-800",
  warning: "bg-yellow-50  text-medium border-2 border-yellow-800",
  //   hint: "",
};

type AlertColorType = "default" | "colored";

const AlertTypeDifferentClass: Record<
  AlertType,
  Record<AlertColorType, string>
> = {
  success: {
    default: "text-black",
    colored: "text-green-500",
  },
  error: {
    default: "text-black",
    colored: "text-red-500",
  },
  info: {
    default: "text-black",
    colored: "text-blue-500",
  },
  warning: {
    default: "text-black",
    colored: "text-yellow-500",
  },
};

export type AlertPorps = {
  type: AlertType;
  option: AlertColorType;
  title?: string;
  description?: string;
  link?: string;
  alertIcon?: React.ReactNode;
};

const Alert: React.FC<AlertPorps> = ({
  type,
  option,
  title = "Success",
  description = "You can insert a description for the message here.The text relates to the action that has been performed.",
  link,
  alertIcon = defaultIcons[type],
}) => {
  return (
    <div
      className={cn(
        defaultBttnClass,
        AlertTypeClass[type],
        AlertTypeDifferentClass[type][option]
      )}
    >
      {alertIcon && <div className="text-xl">{alertIcon}</div>}
      <div>
        <p className="font-medium">{title} Message</p>
        <p>{description}</p>
        {link && (
          <a href={link} className="underline">
            <p>Learn more</p>
          </a>
        )}
      </div>
    </div>
  );
};

export default Alert;
