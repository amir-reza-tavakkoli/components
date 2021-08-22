import { defineComponent } from '../packages/vue.js'

export let ProfilePage = defineComponent({
    template: `
        <article class="profile-page" aria-label="Username1 profile page">
            <article class="Profile">
                <div class="action-buttons-in-image" role="navigation">
                    <button tabindex="button" aria-label="Back to previous page">
                        <svg
                        role="presentation"
                        x="0px"
                        y="0px"
                        viewBox="0 0 219.151 219.151"
                        style="enable-background:new 0 0 219.151 219.151;">
                            <g>
                                <path d="M109.576,219.151c60.419,0,109.573-49.156,109.573-109.576C219.149,49.156,169.995,0,109.576,0S0.002,49.156,0.002,109.575
                                    C0.002,169.995,49.157,219.151,109.576,219.151z M109.576,15c52.148,0,94.573,42.426,94.574,94.575
                                    c0,52.149-42.425,94.575-94.574,94.576c-52.148-0.001-94.573-42.427-94.573-94.577C15.003,57.427,57.428,15,109.576,15z"/>
                                <path d="M94.861,156.507c2.929,2.928,7.678,2.927,10.606,0c2.93-2.93,2.93-7.678-0.001-10.608l-28.82-28.819l83.457-0.008
                                    c4.142-0.001,7.499-3.358,7.499-7.502c-0.001-4.142-3.358-7.498-7.5-7.498l-83.46,0.008l28.827-28.825
                                    c2.929-2.929,2.929-7.679,0-10.607c-1.465-1.464-3.384-2.197-5.304-2.197c-1.919,0-3.838,0.733-5.303,2.196l-41.629,41.628
                                    c-1.407,1.406-2.197,3.313-2.197,5.303c0.001,1.99,0.791,3.896,2.198,5.305L94.861,156.507z"/>
                            </g>
                        </svg>
                    </button>
                <button type="button" aria-label="Call Username 1">
                    <svg
                    width="18px"
                    role="presentation"
                    height="18px"
                    viewBox="0 0 18 18"
                    version="1.1">
                        <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd">
                                <g id="Rounded" transform="translate(-171.000000, -1219.000000)">
                                    <g id="Communication" transform="translate(100.000000, 1162.000000)">
    <g id="-Round-/-Communication-/-call" transform="translate(68.000000, 54.000000)">
                                            <g transform="translate(0.000000, 0.000000)" id="Path">
                                            <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                            <path d="M19.23,15.26 L16.69,14.97 C16.08,14.9 15.48,15.11 15.05,15.54 L13.21,17.38 C10.38,15.94 8.06,13.63 6.62,10.79 L8.47,8.94 C8.9,8.51 9.11,7.91 9.04,7.3 L8.75,4.78 C8.63,3.77 7.78,3.01 6.76,3.01 L5.03,3.01 C3.9,3.01 2.96,3.95 3.03,5.08 C3.56,13.62 10.39,20.44 18.92,20.97 C20.05,21.04 20.99,20.1 20.99,18.97 L20.99,17.24 C21,16.23 20.24,15.38 19.23,15.26 Z" fill="#1D1D1D"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </button>
                <button type="button" aria-label="More options">
                    <svg
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        role="presentation"
                        stroke-linejoin="round"
                        class="feather feather-more-vertical"
                    >
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                </button>
            </div>
            <img src="../users/username-1/username-1.png" tabindex="0" alt="Username 1 profile picture">
            <div class="user-status-in-image">
                <div>
                    <h1>Username1</h1>
                    <p>Last seen recently</p>
                </div>
                <button type="button" aria-label="Chat with Username 1">
                    <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 20 20"
                        role="presentation"
                    >
                        <g
                            id="Icons"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                        >
                            <g id="Rounded" transform="translate(-510.000000, -1218.000000)">
                                <g id="Communication" transform="translate(100.000000, 1162.000000)">
                                    <g id="-Round-/-Communication-/-chat_bubble_outline" transform="translate(408.000000, 54.000000)">
                                        <g transform="translate(0.000000, 0.000000)">
                                            <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                            <path d="M20,2 L4,2 C2.9,2 2,2.9 2,4 L2,22 L6,18 L20,18 C21.1,18 22,17.1 22,16 L22,4 C22,2.9 21.1,2 20,2 Z M19,16 L6,16 L4,18 L4,5 C4,4.45 4.45,4 5,4 L19,4 C19.55,4 20,4.45 20,5 L20,15 C20,15.55 19.55,16 19,16 Z" id="🔹Icon-Color" fill="#1D1D1D"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
            <address class="user-info">
                <div>
                    <svg viewBox="0 0 24 24" role="presentation">
                        <path d="M12 21.9991C10.5991 22.0005 9.2133 21.71 7.93096 21.1461C6.44975 20.4876 5.15079 19.479 4.14599 18.207C3.14118 16.9351 2.46063 15.4379 2.16297 13.8445C1.86531 12.2511 1.95945 10.6093 2.43729 9.06032C2.91514 7.51139 3.76235 6.10183 4.90596 4.95306C5.83276 4.01394 6.93748 3.26901 8.15553 2.7618C9.37359 2.25459 10.6805 1.99529 12 1.99906C12.316 1.99906 12.637 2.01406 12.953 2.04406C15.4512 2.32625 17.757 3.52195 19.427 5.4013C21.097 7.28064 22.0134 9.71097 22 12.2251V12.8991C22 13.8757 21.6139 14.8127 20.9258 15.5059C20.2378 16.199 19.3036 16.5919 18.327 16.5991C18.263 16.5991 18.198 16.5991 18.134 16.5941C17.5677 16.5611 17.017 16.396 16.526 16.1121C16.0349 15.8282 15.6171 15.4333 15.306 14.9591C14.705 15.8047 13.8605 16.4469 12.8851 16.8001C11.9097 17.1533 10.8497 17.2007 9.8467 16.9358C8.84368 16.671 7.94528 16.1065 7.27138 15.3178C6.59748 14.5291 6.18012 13.5537 6.075 12.5216C5.96988 11.4895 6.182 10.45 6.68304 9.54159C7.18409 8.63321 7.95024 7.89924 8.87927 7.4376C9.80829 6.97596 10.856 6.80861 11.8826 6.95789C12.9092 7.10716 13.8659 7.56596 14.625 8.27306C14.6522 8.03322 14.7665 7.81172 14.9462 7.6506C15.1259 7.48949 15.3586 7.39998 15.6 7.39906C15.8652 7.39906 16.1195 7.50442 16.3071 7.69196C16.4946 7.87949 16.6 8.13385 16.6 8.39906V12.7231C16.5824 13.1831 16.7401 13.6326 17.0411 13.9808C17.3422 14.329 17.7643 14.55 18.222 14.5991H18.297C18.5205 14.5995 18.7418 14.5558 18.9484 14.4705C19.155 14.3853 19.3428 14.2601 19.501 14.1022C19.6592 13.9443 19.7846 13.7568 19.8703 13.5503C19.9559 13.3439 20 13.1226 20 12.8991V12.2241C20.0169 10.2076 19.2879 8.25598 17.9532 6.74438C16.6184 5.23278 14.772 4.26785 12.769 4.03506C12.515 4.01206 12.257 3.99906 12 3.99906C10.8794 3.99866 9.77123 4.23368 8.74729 4.68888C7.72334 5.14409 6.80644 5.80933 6.056 6.64151C5.30556 7.47369 4.73832 8.45424 4.39102 9.51963C4.04373 10.585 3.92412 11.7115 4.03996 12.8261C4.18926 14.2397 4.71209 15.5881 5.55477 16.7328C6.39745 17.8776 7.52962 18.7774 8.83503 19.34C10.1404 19.9025 11.572 20.1075 12.9829 19.9339C14.3937 19.7603 15.7329 19.2143 16.863 18.3521C16.9672 18.2722 17.0862 18.2137 17.2131 18.1798C17.34 18.146 17.4723 18.1374 17.6025 18.1547C17.7327 18.172 17.8582 18.2147 17.9718 18.2805C18.0855 18.3463 18.1851 18.4338 18.265 18.5381C18.3448 18.6423 18.4033 18.7613 18.4372 18.8882C18.4711 19.0151 18.4796 19.1474 18.4623 19.2776C18.4451 19.4078 18.4023 19.5333 18.3365 19.647C18.2708 19.7606 18.1832 19.8602 18.079 19.9401C16.332 21.2721 14.1968 21.9953 12 21.9991ZM11.182 8.90806C10.5706 8.90787 9.97286 9.08898 9.46442 9.42851C8.95598 9.76803 8.55964 10.2507 8.32554 10.8155C8.09143 11.3803 8.03008 12.0018 8.14923 12.6015C8.26839 13.2011 8.5627 13.752 8.99494 14.1844C9.42718 14.6168 9.97795 14.9113 10.5776 15.0306C11.1772 15.1499 11.7987 15.0888 12.3636 14.8549C12.9285 14.621 13.4113 14.2248 13.751 13.7164C14.0907 13.2081 14.272 12.6104 14.272 11.9991C14.2709 11.1798 13.945 10.3943 13.3658 9.81492C12.7866 9.2355 12.0012 8.90939 11.182 8.90806V8.90806Z" fill="black"/>
                    </svg>
                    <h2 tabindex="0">@username1</h2>
                    <p aria-label="User ID">Username</p>
                </div>
                <svg
                    width="18px"
                    height="18px"
                    viewBox="0 0 18 18"
                    version="1.1"
                >
                    <g
                        id="Icons"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                    >
                        <g id="Rounded" transform="translate(-171.000000, -1219.000000)">
                            <g id="Communication" transform="translate(100.000000, 1162.000000)">
                                <g id="-Round-/-Communication-/-call" transform="translate(68.000000, 54.000000)">
                                    <g transform="translate(0.000000, 0.000000)" id="Path">
                                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                        <path d="M19.23,15.26 L16.69,14.97 C16.08,14.9 15.48,15.11 15.05,15.54 L13.21,17.38 C10.38,15.94 8.06,13.63 6.62,10.79 L8.47,8.94 C8.9,8.51 9.11,7.91 9.04,7.3 L8.75,4.78 C8.63,3.77 7.78,3.01 6.76,3.01 L5.03,3.01 C3.9,3.01 2.96,3.95 3.03,5.08 C3.56,13.62 10.39,20.44 18.92,20.97 C20.05,21.04 20.99,20.1 20.99,18.97 L20.99,17.24 C21,16.23 20.24,15.38 19.23,15.26 Z" fill="#1D1D1D"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <h2 aria-labelledby="Mobile" tabindex="0">+98765432</h2>
                <p id="Mobile">Mobile</p>
            </address>
        </article>
        <article class="Profile-notify" aria-label="Notification frequency and status">
            <div>
                <svg role="presentation" viewBox="0 0 448 512">
                    <path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"/>
                </svg>
                <h2 tabindex="0">Notification</h2>
                <p aria-label="Frequency">Enabled</p>
            </div>
        </article>
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
