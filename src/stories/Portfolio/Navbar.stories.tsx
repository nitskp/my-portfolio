import { Navbar } from "../../Pages/Portfolio/Components";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Portfolio-2/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar  />

export const Default = Template.bind({})
