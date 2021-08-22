import { defineComponent } from '../../../packages/vue.js'

export let UserRelated = defineComponent({
    template: `

        <nav aria-label="Related items to Username1">
        <ul>
            <li>
                <button type="button">
                    <span class="nonvisual">All</span>
                    MEDIA
                    <span class="nonvisual">from username1</span>
                </button>
            </li>
            <li>
                <button type="button">
                    <span class="nonvisual">All</span>
                    DOCS
                    <span class="nonvisual">from username1</span>
                </button>
            </li>
            <li>
                <button type="button">
                    <span class="nonvisual">All</span>
                    LINKS
                    <span class="nonvisual">Shared by username1</span>
                </button>
            </li>
            <li>
                <button type="button">
                    <span class="nonvisual">All</span>
                    GIFS
                    <span class="nonvisual">from username1</span>
                </button>
            </li>
            <li>
                <button type="button">
                    <span class="nonvisual">All</span>
                    VOICE
                    <span class="nonvisual">Records from username1</span>
                </button>
            </li>
            <li>
                <button type="button">
                    <span class="nonvisual">All</span>
                    <span class="nonvisual">Mutual</span>
                    GROUPS
                </button>
            </li>
        </ul>
    </nav>
    <img src="" alt="">
    <img src="" alt="">
    <img src="" alt="">
</article>
`,
})
