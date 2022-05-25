import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../shared/Components";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  title: "Click Me",
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  title: "Click Me",
};
