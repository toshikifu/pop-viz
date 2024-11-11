---
name: 'component'
description: "Generate standard React component."
root: '.'
output: 'app/**/*'
questions:
  name: 'Please enter a component name.'
---

# `{{ inputs.name | pascal }}/index.tsx`

```typescript
export interface {{inputs.name | pascal }}Props {
  children: React.ReactNode;
}

const {{ inputs.name | pascal }}: React.FC<{{inputs.name | pascal }}Props> = ({ children }) => {
  return (
    <div>{children}</div>
  );
};
export default {{ inputs.name | pascal }}
```

# `{{inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`
```typescript
import type { Meta, StoryObj } from '@storybook/react';

import {{ inputs.name | pascal }} from './';

const meta: Meta<typeof {{inputs.name | pascal }}> = {
  component: {{ inputs.name | pascal }},
  title: "{{ output.dir }}",
};

export default meta;
type Story = StoryObj<typeof {{ inputs.name | pascal}}>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: () => <{{ inputs.name | pascal }}>{{inputs.name}}</{{ inputs.name | pascal }}>,
};

```

# `{{inputs.name | pascal }}/{{ inputs.name | pascal }}.test.tsx`

```typescript
import { render, screen } from '@testing-library/react';
import {{ inputs.name }} from './{{ inputs.name }}';

describe('{{ inputs.name }}', () => {
  it('renders without crashing', () => {
    render(<{{ inputs.name }} />);
    expect(screen.getByText('{{ inputs.name }}')).toBeInTheDocument();
  });
});
