import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../../Components";

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  secondary: false,
  title: "Click Me",
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  primary: false,
  title: "Click Me",
};
