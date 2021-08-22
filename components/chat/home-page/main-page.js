import { defineComponent } from '../../packages/vue.js'

export let MainPage = defineComponent({
    template: `
        <nav class="primary-nav" aria-label="primary navigation">
        <button type="button" aria-label="All options">
            <svg
                role="presentation"
                version="1.1"
                id="Layer_1_1_"
                x="0px"
                y="0px"
                viewBox="0 0 16 16"
                style="enable-background:new 0 0 16 16;"
                xml:space="preserve"
            >
                <rect width="16" height="2"/>
                <rect y="7" width="16" height="2"/>
                <rect y="14" width="16" height="2"/>
            </svg>
        </button>
        <button type="button">
            <span class="nonvisual">All</span>Chats
        </button>
        <button type="button">
            <span class="nonvisual">All</span>Calls
        </button>
        <button type="button" onclick="reveal()" aria-label="Search chats">
        <svg fill="#000000"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/></svg>
        </button>
    </nav>
    <nav class="secondary-nav" data-sender="hidden" aria-label="secondary navigation">
        <article class="user-sign">
            <img src="../users/username-1/username-1.png" alt="Your profile picture">
            <p>
                <span class="nonvisual">Your username is:</span>Username
            </p>
            <button type="button" aria-label="Choose account">
                <svg
                    role="presentation"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-down"
                >
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
            <p>
                <span class="nonvisual">Your phone number is:</span>+98 765 4321
            </p>
        </article>
        <ul>
            <li>
                <button type="button">
                    <span class="nonvisual">All your</span>Contacts
                </button>
            </li>
            <li>
                <button type="button">
                    <span class="nonvisual">Go to your</span>Saved messages
                </button>
            </li>
            <li>
                <button type="button">
                    <span class="nonvisual">Go to</span>Settings
                </button>
            </li>
            <li>
                <button type="button">Invite friends</button>
            </li>
            <li>
                <button type="button">Proxy
                    <span class="nonvisual">settings</span>
                </button>
            </li>
            <li>
                <button type="button">
                    <span class="nonvisual">Get</span>Help
                </button>
            </li>
            <li>
                <button type="button">
                    <span class="nonvisual">Activate</span>Night mode
                </button>
            </li>
        </ul>
    </nav>
    <main></main>

    `,
})
