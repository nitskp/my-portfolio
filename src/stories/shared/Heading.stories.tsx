import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Heading } from "../../Components";

export default {
  title: "shared/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const H1 = Template.bind({});
H1.args = {
  type: "h1",
  color: "black",
  fontSize: "40px",
  fontWeight: 800,
  children: "Heading",
};

export const H2 = Template.bind({});
H2.args = {
  type: "h2",
  color: "black",
  fontSize: "32px",
  fontWeight: 700,
  children: "Heading",
};

export const H3 = Template.bind({});
H3.args = {
  type: "h3",
  color: "gray",
  fontSize: "26px",
  fontWeight: 700,
  children: "Heading",
};

export const H4 = Template.bind({});
H4.args = {
  type: "h4",
  color: "gray",
  fontSize: "20px",
  fontWeight: 700,
  children: "Heading",
};

export const H5 = Template.bind({});
H5.args = {
  type: "h5",
  color: "black",
  fontSize: "16px",
  fontWeight: 400,
  children: "Heading",
};

export const H6 = Template.bind({});
H6.args = {
  type: "h6",
  color: "black",
  fontSize: "12px",
  fontWeight: 400,
  children: "Heading",
};
