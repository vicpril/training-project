import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MainPage } from '..'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pages/MainPage',
  component: MainPage,
} as ComponentMeta<typeof MainPage>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />

export const Default = Template.bind({})
Default.args = {}
