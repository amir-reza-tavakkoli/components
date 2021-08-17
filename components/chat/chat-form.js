import { defineComponent } from '../../packages/vue.js'

export let ChatForm = defineComponent({
    template: `
        <div id="j" role="presentation"></div>
        s<article class="messaging-1">
            <h2 class="novisuals">Enter your message to send</h2>
            <label for="textarea" class="novisuals"> Hit the send button when you finished</label>
            <textarea name="textarea" id="textarea" placeholder="Enter message">
            </textarea>
            <button class="btn" type="submit" id="submit" aria-label="Send message">Send</button>
            <button class="btn" type="button" id="attach" aria-label="Attach a file">Attach</button>
            <button class="btn" type="button" id="record" aria-label="Record your voice">Record</button>
        </article>
    `,
})
