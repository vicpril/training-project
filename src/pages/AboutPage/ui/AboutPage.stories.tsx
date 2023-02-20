import { ComponentStory, ComponentMeta } from '@storybook/react'

import AboutPage from './AboutPage'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pages/AboutPage',
  component: AboutPage,
} as ComponentMeta<typeof AboutPage>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />

export const Default = Template.bind({})
Default.args = {}
