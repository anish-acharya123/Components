import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "red",
        "green",
        "yellow",
        "purple",
        "light",
        "dark",
        "alternative",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg"],
    },
    onClick: { action: "clicked" },
    className: { control: false },
  },
} as Meta<ButtonProps>;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Red Button",
  },
};
export const Other: Story = {
  args: {
    variant: "red",
    size: "default",
    children: "Other Button",
  },
};
export const Large: Story = {
  args: {
    variant: "light",
    size: "lg",
    children: "Large Button",
  },
};
export const Small: Story = {
  args: {
    variant: "light",
    size: "sm",
    children: "Small Button",
  },
};
