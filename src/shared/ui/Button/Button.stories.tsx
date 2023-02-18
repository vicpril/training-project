import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line i18next/no-literal-string
const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Test</Button>

export const Default = Template.bind({})

export const Clear = Template.bind({})
Clear.args = {
  theme: 'clear',
}

export const Outline = Template.bind({})
Outline.args = {
  theme: 'outline',
}
