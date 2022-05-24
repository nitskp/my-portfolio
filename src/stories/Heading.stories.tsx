import { ComponentStory, ComponentMeta } from "@storybook/react";
import { string } from "prop-types";

import { Heading } from "../shared/Components";

export default {
  title: "Heading",
  component: Heading,
  parameters: {
    content: string,
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  content: "Hello World",
};
