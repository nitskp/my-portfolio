import { Skill } from "../pages/Home/Components";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AiFillHtml5 } from "react-icons/ai";

export default {
  title: "Home/Skill",
  component: Skill,
} as ComponentMeta<typeof Skill>;

const Template: ComponentStory<typeof Skill> = (args) => <Skill {...args} />;

export const HtmlandCss = Template.bind({});
HtmlandCss.args = {
  name: "Html and Css",
  icon: <AiFillHtml5 />,
};
