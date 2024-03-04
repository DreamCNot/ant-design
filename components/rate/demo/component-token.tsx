import React from 'react';
import { ConfigProvider, Rate } from 'antd';

/** Test usage. Do not use in your production. */
export default () => (
  <ConfigProvider
    theme={{
      components: {
        Rate: {
          starColor: 'yellow',
          starSize: 20,
          starHoverScale: 'scale(2)',
          starBg: 'red',
        },
      },
    }}
  >
    <Rate defaultValue={2.5} />
  </ConfigProvider>
);
