import Alert, { AlertPorps } from ".";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["success", "error", "info", "warning"],
      },
    },
    option: {
      control: {
        type: "radio",
        options: ["default", "colored"],
      },
    },
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    link: {
      control: "text",
    },
    alertIcon: {
      control: false,
    },
  },
} as Meta<AlertPorps>;

const Template: StoryFn<AlertPorps> = (args) => <Alert {...args} />;

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  type: "success",
  option: "colored",
  title: "Success!",
  description: "Your action was successful.",
  link: "https://example.com",
  alertIcon: <span>✔️</span>,
};

export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
  type: "error",
  option: "default",
  title: "Error!",
  description: "Something went wrong. Please try again.",
  alertIcon: <span>❌</span>,
};

export const InfoAlert = Template.bind({});
InfoAlert.args = {
  type: "info",
  option: "colored",
  title: "Info!",
  description: "Here is some additional information.",
  link: "https://example.com",
  alertIcon: <span>ℹ️</span>,
};

export const WarningAlert = Template.bind({});
WarningAlert.args = {
  type: "warning",
  option: "default",
  title: "Warning!",
  description: "This action requires caution.",
  alertIcon: <span>⚠️</span>,
};
