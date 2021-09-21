import { Story, Meta } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Curso Avançado de React, Next JS',
    description:
      'Sed maiores omnis eos rerum dolorem sit autem sint est veniam dolore vel eligendi ullam et impedit cumque.'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Título Basico',
  description: 'Descrição Básica'
}

export const Default: Story = (args) => <Main {...args} />
