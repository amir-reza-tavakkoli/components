import { defineComponent } from '../../packages/vue.js'

export let ChatHistory = defineComponent({
    template: `
        <article class="middle-part" aria-live="polite" tabindex="0" aria-label="Chat history and new messages">
        </article>
    `,
})
