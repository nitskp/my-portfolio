import { ProjectCard } from "../../pages/Home/Components";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'Home/ProjectCard',
    component: ProjectCard
} as ComponentMeta<typeof ProjectCard>

const Template: ComponentStory<typeof ProjectCard> =  (args) => <ProjectCard {...args}/>

export const Default = Template.bind({})
Default.args = {
    img:'Image here',
    title: 'Title',
    subTitle: 'Sub Title',
    projectLink: 'https://www.google.com/'
}