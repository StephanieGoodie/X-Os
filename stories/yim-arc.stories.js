import { html } from 'lit';
import '../src/yim-arc.js';

export default {
  title: 'YimArc',
  component: 'yim-arc',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <yim-arc
      style="--yim-arc-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </yim-arc>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
