import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "solid", "outline", "destructive", "ghost", "link"], 
      defaultValue: "default",
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"], 
      defaultValue: "default",
    },
    
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};


export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Button",
  },
};