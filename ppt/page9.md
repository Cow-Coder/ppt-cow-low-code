---
layout: text-window
---

# Consoles

Use code snippets and get the highlighting directly into a nice looking window!

::window::

```ts
// main.ts

import { createApp } from 'vue';
import { createDynamicForms } from '@asigloo/vue-dynamic-forms';

const VueDynamicForms = createDynamicForms({
  // Global Options go here
});

export const app = createApp(App);

app.use(VueDynamicForms);
```