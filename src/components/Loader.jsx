import React,{useState, useEffect } from 'react'
import { useAnimations } from '../contexts/AnimationContext';
import { Fade } from 'react-awesome-reveal';

function Loader() {
    const animations = useAnimations();
   

  return (
    <>  
        <div id="loader">
            <div id="topheading">
                <h5 className="reveal">Design portfolio</h5>
                <h5 className="reveal">&copy; 2022</h5>
            </div>
            <h1 className="">
                <svg className="inline-block lg:w-[30vw]" id="kingpinsLoader" width="50vw" height="200" viewBox="0 0 1551 328" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_186_72" fill="white">
                    <path d="M73.516 11.1351C74.464 9.6048 90.468 3.96243 98.984 2.15679C105.452 0.785106 112.206 0.337186 127.234 0.283316L146.984 0.213485V37.1173V74.0212L137.734 68.9874C132.646 66.2191 126.61 63.0088 124.319 61.8536L120.154 59.7537L113.485 64.9821C109.817 67.8571 106.701 70.0608 106.56 69.8782C104.046 66.6241 73.158 11.7137 73.516 11.1351Z"/>
                    <path d="M155.734 73.3429C155.322 73.1104 154.984 56.5125 154.984 36.4599V0L177.734 0.462883C196.606 0.845957 201.783 1.27692 208.102 2.98878C218.211 5.72717 229.553 10.6563 229.204 12.1586C228.961 13.2001 201.243 61.6192 197.347 67.8072L195.929 70.0578L189.397 65.0639C185.804 62.3165 182.554 60.0799 182.174 60.0919C181.795 60.1048 175.859 63.1864 168.984 66.9403C162.109 70.6943 156.146 73.5753 155.734 73.3429Z"/>
                    <path d="M5.406 47.1002C6.362 46.2772 20.046 38.8063 35.814 30.4983C51.583 22.1904 64.732 15.3439 65.035 15.2851C65.565 15.1813 98.348 71.221 99.482 74.1699C99.854 75.1355 96.106 78.8126 88.153 85.288C76.415 94.8439 76.258 95.0275 75.345 100.211C74.756 103.554 73.963 105.364 73.16 105.196C72.467 105.051 55.722 95.624 35.95 84.2465L0 63.5605L0.0139999 60.0689C0.0299999 56.0726 2.843 49.3049 5.406 47.1002Z"/>
                    <path d="M202.984 75.0028C202.984 74.5619 210.68 60.9079 220.086 44.6611L237.189 15.1225L255.836 24.7442C300.72 47.9013 301.222 48.2614 302.597 58.2663C303.219 62.7913 303.156 62.928 299.358 65.3063C293.489 68.9804 229.152 105.958 228.628 105.958C228.377 105.958 227.855 103.665 227.469 100.861C226.664 95.0255 226.865 95.2619 213.224 84.1478C207.592 79.5598 202.984 75.4438 202.984 75.0028Z"/>
                    <path d="M9.855 115.435C6.14 95.6829 3.074 78.5114 3.042 77.2774C3.01 76.0433 3.203 75.0328 3.471 75.0328C3.914 75.0328 65.656 110.399 70.582 113.474L72.68 114.784L69.723 129.913L66.766 145.044L70.087 148.461L73.407 151.879L45.008 151.614L16.609 151.348L9.855 115.435Z"/>
                    <path d="M231.049 114.518C231.529 114.014 246.899 104.943 265.203 94.3611C283.508 83.7786 298.821 75.1006 299.234 75.0767C299.647 75.0527 299.984 75.5126 299.984 76.0992C299.984 77.1207 287.493 144.961 286.45 149.603L285.946 151.847H257.965C242.575 151.847 229.984 151.543 229.984 151.172C229.984 150.8 231.349 149.341 233.017 147.93L236.051 145.363L233.113 130.399C231.426 121.802 230.547 115.045 231.049 114.518Z"/>
                    <path d="M96.372 114.868C94.509 113.718 92.984 112.56 92.984 112.294C92.984 112.027 93.771 112.033 94.734 112.308C95.697 112.583 105.484 115.153 116.484 118.019C127.484 120.886 136.607 123.32 136.758 123.43C137.094 123.675 128.923 146.162 128.245 146.859C127.979 147.134 128.089 143.586 128.49 138.976C129.18 131.04 129.12 130.635 127.352 131.358C122.939 133.162 121.361 132.957 111.461 129.281L101.036 125.411L100.398 121.184C99.886 117.789 99.094 116.546 96.372 114.868Z"/>
                    <path d="M166.116 123.497C166.318 123.32 175.709 120.699 186.984 117.673C198.259 114.646 208.146 112.119 208.956 112.056C209.765 111.995 208.874 113.005 206.976 114.303C204.432 116.042 203.243 117.811 202.458 121.028L201.393 125.392L191.938 129.133C182.952 132.69 179.312 133.185 174.928 131.449C173.58 130.916 173.468 131.607 174.093 136.601C175.59 148.565 174.946 148.476 170.324 136.087C167.807 129.34 165.913 123.674 166.116 123.497Z"/>
                    <path d="M29.532 220.465C28.898 219.502 18.313 160.185 18.667 159.579C18.906 159.168 33.138 158.833 50.293 158.836L81.484 158.842L91.419 168.112C97.938 174.193 101.155 177.878 100.777 178.829C100.266 180.111 29.999 221.176 29.532 220.465Z"/>
                    <path d="M202.484 179.203C201.679 177.925 203.399 175.789 211.327 168.224L221.169 158.83H252.577H283.984L283.972 161.075C283.948 165.694 273.198 220.175 272.344 220.011C270.084 219.576 203.367 180.604 202.484 179.203Z"/>
                    <path d="M124.531 191.86C124.859 191.525 129.483 190.282 134.806 189.098C146.889 186.41 145.609 186.472 148.6 188.427C150.958 189.968 151.349 189.971 153.905 188.465C156.488 186.942 157.342 186.979 167.247 189.05C173.067 190.267 178.067 191.501 178.358 191.792C178.649 192.082 173.529 196.344 166.981 201.263L155.074 210.206L155.029 218.848L154.984 227.49L162.234 230.209C166.222 231.704 172.077 233.96 175.246 235.22L181.009 237.51L185.246 235.093C187.577 233.763 189.942 232.671 190.501 232.664C191.734 232.649 215.283 273.179 214.814 274.51C214.633 275.026 205.709 282.873 194.984 291.948C175.116 308.759 167.419 313.723 159.182 315.037L154.984 315.707L155.01 291.388L155.035 267.069L166.504 254.955C176.789 244.092 177.741 242.786 175.728 242.302C174.494 242.005 168.427 240.998 162.246 240.064C151.57 238.449 150.445 238.454 139.746 240.148C133.552 241.13 127.731 242.201 126.812 242.529C125.504 242.996 127.514 245.632 136.018 254.599L146.897 266.071L146.941 290.872L146.984 315.674L143.234 315.02C135.293 313.636 127.459 308.501 107.208 291.401C87.941 275.133 86.999 274.176 88.304 272.172C89.058 271.011 94.534 261.645 100.472 251.357C106.41 241.07 111.728 232.652 112.289 232.652C112.849 232.652 115.159 233.734 117.421 235.056L121.535 237.461L134.009 232.724L146.484 227.986L146.771 218.89L147.058 209.794L135.496 201.13C129.136 196.365 124.202 192.193 124.531 191.86Z"/>
                    <path d="M204.484 205.717C203.692 197.761 203.03 190.879 203.014 190.422C202.997 189.966 204.447 190.475 206.234 191.552C208.021 192.63 222.984 201.258 239.484 210.727C255.984 220.196 269.623 228.056 269.793 228.195C270.183 228.512 222.771 268.571 222.03 268.549C221.342 268.529 199.598 231.027 199.164 229.112C198.98 228.299 200.36 226.977 202.414 226C206.555 224.03 206.43 225.254 204.484 205.717Z"/>
                    <path d="M33.047 228.655C33.012 228.376 47.496 219.761 65.234 209.51C82.971 199.259 98.018 190.845 98.671 190.812C99.439 190.774 99.706 191.898 99.426 193.995C98.697 199.475 96.984 218.878 96.984 221.667C96.984 223.71 97.793 224.686 100.58 226.012C103.286 227.3 104.012 228.148 103.517 229.439C102.443 232.238 81.859 267.527 80.986 268.065C80.256 268.515 33.194 229.826 33.047 228.655Z"/>
                    </mask>
                    <path d="M73.516 11.1351C74.464 9.6048 90.468 3.96243 98.984 2.15679C105.452 0.785106 112.206 0.337186 127.234 0.283316L146.984 0.213485V37.1173V74.0212L137.734 68.9874C132.646 66.2191 126.61 63.0088 124.319 61.8536L120.154 59.7537L113.485 64.9821C109.817 67.8571 106.701 70.0608 106.56 69.8782C104.046 66.6241 73.158 11.7137 73.516 11.1351Z" stroke="#B68C49" strokeWidth="10" mask="url(#path-1-inside-1_186_72)"/>
                    <path d="M155.734 73.3429C155.322 73.1104 154.984 56.5125 154.984 36.4599V0L177.734 0.462883C196.606 0.845957 201.783 1.27692 208.102 2.98878C218.211 5.72717 229.553 10.6563 229.204 12.1586C228.961 13.2001 201.243 61.6192 197.347 67.8072L195.929 70.0578L189.397 65.0639C185.804 62.3165 182.554 60.0799 182.174 60.0919C181.795 60.1048 175.859 63.1864 168.984 66.9403C162.109 70.6943 156.146 73.5753 155.734 73.3429Z" stroke="#B68C49" strokeWidth="10" mask="url(#path-1-inside-1_186_72)"/>
                    <path d="M5.406 47.1002C6.362 46.2772 20.046 38.8063 35.814 30.4983C51.583 22.1904 64.732 15.3439 65.035 15.2851C65.565 15.1813 98.348 71.221 99.482 74.1699C99.854 75.1355 96.106 78.8126 88.153 85.288C76.415 94.8439 76.258 95.0275 75.345 100.211C74.756 103.554 73.963 105.364 73.16 105.196C72.467 105.051 55.722 95.624 35.95 84.2465L0 63.5605L0.0139999 60.0689C0.0299999 56.0726 2.843 49.3049 5.406 47.1002Z" stroke="#B68C49" strokeWidth="10" mask="url(#path-1-inside-1_186_72)"/>
                    <path d="M202.984 75.0028C202.984 74.5619 210.68 60.9079 220.086 44.6611L237.189 15.1225L255.836 24.7442C300.72 47.9013 301.222 48.2614 302.597 58.2663C303.219 62.7913 303.156 62.928 299.358 65.3063C293.489 68.9804 229.152 105.958 228.628 105.958C228.377 105.958 227.855 103.665 227.469 100.861C226.664 95.0255 226.865 95.2619 213.224 84.1478C207.592 79.5598 202.984 75.4438 202.984 75.0028Z" stroke="#B68C49" strokeWidth="10" mask="url(#path-1-inside-1_186_72)"/>
                    <path d="M9.855 115.435C6.14 95.6829 3.074 78.5114 3.042 77.2774C3.01 76.0433 3.203 75.0328 3.471 75.0328C3.914 75.0328 65.656 110.399 70.582 113.474L72.68 114.784L69.723 129.913L66.766 145.044L70.087 148.461L73.407 151.879L45.008 151.614L16.609 151.348L9.855 115.435Z" stroke="#B68C49" strokeWidth="10" mask="url(#path-1-inside-1_186_72)"/>
                    <path d="M231.049 114.518C231.529 114.014 246.899 104.943 265.203 94.3611C283.508 83.7786 298.821 75.1006 299.234 75.0767C299.647 75.0527 299.984 75.5126 299.984 76.0992C299.984 77.1207 287.493 144.961 286.45 149.603L285.946 151.847H257.965C242.575 151.847 229.984 151.543 229.984 151.172C229.984 150.8 231.349 149.341 233.017 147.93L236.051 145.363L233.113 130.399C231.426 121.802 230.547 115.045 231.049 114.518Z" stroke="#B68C49" strokeWidth="10" mask="url(#path-1-inside-1_186_72)"/>
                    <path d="M96.372 114.868C94.509 113.718 92.984 112.56 92.984 112.294C92.984 112.027 93.771 112.033 94.734 112.308C95.697 112.583 105.484 115.153 116.484 118.019C127.484 120.886 136.607 123.32 136.758 123.43C137.094 123.675 128.923 146.162 128.245 146.859C127.979 147.134 128.089 143.586 128.49 138.976C129.18 131.04 129.12 130.635 127.352 131.358C122.939 133.162 121.361 132.957 111.461 129.281L101.036 125.411L100.398 121.184C99.886 117.789 99.094 116.546 96.372 114.868Z" stroke="#B68C49" strokeWidth="10" mask="url(#path-1-inside-1_186_72)"/>
                    <path d="M166.116 123.497C166.318 123.32 175.709 120.699 186.984 117.673C198.259 114.646 208.146 112.119 208.956 112.056C209.765 111.995 208.874 113.005 206.976 114.303C204.432 116.042 203.243 117.811 202.458 121.028L201.393 125.392L191.938 129.133C182.952 132.69 179.312 133.185 174.928 131.449C173.58 130.916 173.468 131.607 174.093 136.601C175.59 148.565 174.946 148.476 170.324 136.087C167.807 129.34 165.913 123.674 166.116 123.497Z" stroke="#B68C49" strokeWidth="10" mask="url(#path-1-inside-1_186_72)"/>
                    <path d="M29.532 220.465C28.898 219.502 18.313 160.185 18.667 159.579C18.906 159.168 33.138 158.833 50.293 158.836L81.484 158.842L91.419 168.112C97.938 174.193 101.155 177.878 100.777 178.829C100.266 180.111 29.999 221.176 29.532 220.465Z" stroke="#B68C49" strokeWidth="10" mask="url(#path-1-inside-1_186_72)"/>
                    <path d="M202.484 179.203C201.679 177.925 203.399 175.789 211.327 168.224L221.169 158.83H252.577H283.984L283.972 161.075C283.948 165.694 273.198 220.175 272.344 220.011C270.084 219.576 203.367 180.604 202.484 179.203Z" stroke="#B68C49" strokeWidth="10" mask="url(#path-1-inside-1_186_72)"/>
                    <path d="M124.531 191.86C124.859 191.525 129.483 190.282 134.806 189.098C146.889 186.41 145.609 186.472 148.6 188.427C150.958 189.968 151.349 189.971 153.905 188.465C156.488 186.942 157.342 186.979 167.247 189.05C173.067 190.267 178.067 191.501 178.358 191.792C178.649 192.082 173.529 196.344 166.981 201.263L155.074 210.206L155.029 218.848L154.984 227.49L162.234 230.209C166.222 231.704 172.077 233.96 175.246 235.22L181.009 237.51L185.246 235.093C187.577 233.763 189.942 232.671 190.501 232.664C191.734 232.649 215.283 273.179 214.814 274.51C214.633 275.026 205.709 282.873 194.984 291.948C175.116 308.759 167.419 313.723 159.182 315.037L154.984 315.707L155.01 291.388L155.035 267.069L166.504 254.955C176.789 244.092 177.741 242.786 175.728 242.302C174.494 242.005 168.427 240.998 162.246 240.064C151.57 238.449 150.445 238.454 139.746 240.148C133.552 241.13 127.731 242.201 126.812 242.529C125.504 242.996 127.514 245.632 136.018 254.599L146.897 266.071L146.941 290.872L146.984 315.674L143.234 315.02C135.293 313.636 127.459 308.501 107.208 291.401C87.941 275.133 86.999 274.176 88.304 272.172C89.058 271.011 94.534 261.645 100.472 251.357C106.41 241.07 111.728 232.652 112.289 232.652C112.849 232.652 115.159 233.734 117.421 235.056L121.535 237.461L134.009 232.724L146.484 227.986L146.771 218.89L147.058 209.794L135.496 201.13C129.136 196.365 124.202 192.193 124.531 191.86Z" stroke="#B68C49" strokeWidth="10" mask="url(#path-1-inside-1_186_72)"/>
                    <path d="M204.484 205.717C203.692 197.761 203.03 190.879 203.014 190.422C202.997 189.966 204.447 190.475 206.234 191.552C208.021 192.63 222.984 201.258 239.484 210.727C255.984 220.196 269.623 228.056 269.793 228.195C270.183 228.512 222.771 268.571 222.03 268.549C221.342 268.529 199.598 231.027 199.164 229.112C198.98 228.299 200.36 226.977 202.414 226C206.555 224.03 206.43 225.254 204.484 205.717Z" stroke="#B68C49" strokeWidth="10" mask="url(#path-1-inside-1_186_72)"/>
                    <path d="M33.047 228.655C33.012 228.376 47.496 219.761 65.234 209.51C82.971 199.259 98.018 190.845 98.671 190.812C99.439 190.774 99.706 191.898 99.426 193.995C98.697 199.475 96.984 218.878 96.984 221.667C96.984 223.71 97.793 224.686 100.58 226.012C103.286 227.3 104.012 228.148 103.517 229.439C102.443 232.238 81.859 267.527 80.986 268.065C80.256 268.515 33.194 229.826 33.047 228.655Z" stroke="#B68C49" strokeWidth="10" mask="url(#path-1-inside-1_186_72)"/>
                    <path d="M366 51.5L362.5 50L361.5 49.5V47H441.5V49.5L440.5 50.5H438L431 51.5L427.5 52.5L424.5 55L423 56.5L422 59.5L421.5 122.5H422.5L438 107L452 92.5L473 69L478.5 61L479.5 59L480.5 56L479.5 52.5L476.5 51.5L473.5 50.5L471 49.5V47H534V49.5L532 50.5L524.5 51.5L520.5 52.5L515 54L507 59L496.5 68L452.5 113L460.5 123.5L481.5 150L504 175.5L517 190L528.5 200.5L532.5 204L538 207.5L545 209H549V213.5H505.5L497 212L490 210L485.5 207.5L481.5 205.5L477 202L465.5 190L422 132V196.5L423.5 200.5L426 205.5L430.5 207.5L443.5 209L444.5 210V213.5H365L363 212V210L365 209L375 207.5L378.5 205.5L381 202L382.5 193V80V60.5L380.5 56L377 53L373 51.5H366Z" stroke="#B68C49" strokeWidth="5"/>
                    <path d="M548.5 69.5L550 69H619L620 69.5V72L618.5 73L613.5 73.5L609.5 74.5L607 76L605.5 77.5L604.5 79.5L603.5 83V186L604 194.5L604.5 201.5L605.5 203.5L606 205L608 206.5L611 208L613.5 208.5L617 209H623L624 210V212L623 213H554L552.5 211.5V210L553.5 209L558 208.5L559.5 208L561.5 206.5L562.5 205L563.5 203L564.5 199L565 187.5L565.5 179V96V92L564.5 83L564 79L562.5 76L561 74.5L557 74L554.5 73.5L549.5 73L548.5 71.5V69.5Z" stroke="#B68C49" strokeWidth="5"/>
                    <path d="M660.5 68.5L661.5 66.5H667.5L677 74.5L773 157.5V135L771 81.5L768.5 77L764.5 74.5L751 72.5L750 71.5V70L751 68.5H810.5L811.5 70.5L810.5 72.5H806.5L800.5 74.5L796.5 77L795 81.5L793.5 97L792 208L790.5 213.5L789.5 216.5H785L783.5 215.5L769 205.5L678.5 126L680 195.5L681 201.5L682.5 204.5L684 206L687.5 208L692 209L699.5 209.5L701 210.5V212.5L700 213H639.5L638 212.5L637.5 210.5L639.5 209H646L651.5 207L653.5 205.5L654.5 204.5L656 201L657.5 191L658.5 136.5V97L659.5 71.5L660.5 68.5Z" stroke="#B68C49" strokeWidth="5"/>
                    <path d="M830 139.5C831.5 79.5 889.5 52.5 977 71.5L975.5 92V113L974 114H972L970.5 111.5C967 88.5 955 80.9133 924 79C871.5 75.7597 870.086 126 876.5 157C885.5 200.5 929.5 211 941.5 198V155.5L940 152L938 150L935 148L931 146.5H920.5L919.5 145V143L920.5 142H995H996.5V145L995 146.5H988.5L982.5 148L980.5 152L979 162V205L976.5 208.5C910.5 229.5 828.188 212 830 139.5Z" stroke="#B68C49" strokeWidth="5"/>
                    <path d="M1028 86C1028.4 77.2 1016.83 73.6667 1011 73V70L1012.5 68.5H1078C1169 68.5 1148.5 158 1078 153.5L1073 152.5V150.5L1074.5 149C1113.5 150.5 1110 81 1068.5 81L1066 83V86V187C1067.6 197 1064.5 207 1087 209.5V210.5V212.5L1085 214H1012L1010.5 212.5V210.5L1012 209.5C1024.5 207 1027.17 198.5 1028 192C1027.83 160.333 1027.6 94.8 1028 86Z" stroke="#B68C49" strokeWidth="5"/>
                    <path d="M1173.5 101C1172.7 80.2 1171 73.5 1157.5 73.5H1156.5V71L1157.5 70H1227.5V73.5H1226C1218.8 73.5 1211 80.5 1211 91.5V176.5C1211 213.5 1220 206.5 1231.5 209.5V211V213.5H1156V211L1158 209.5C1165.2 206.7 1172.5 208 1172.5 191L1173.5 101Z" stroke="#B68C49" strokeWidth="5"/>
                    <path d="M1265.5 188L1267.5 72.5L1268.5 68L1270 66.5H1274L1279 70L1380 157.5V92.5C1379.6 83.3 1380 74 1359.5 72.5L1358 71.5V70L1359.5 69H1418.5V71.5L1417.5 72.5C1413.9 72.5 1402.5 76.5 1402.5 84.5L1399 213.5L1397 215.5H1392L1379 207L1286 126L1288 192.5C1288.4 199.3 1289.5 207 1307 209L1308.5 210.5V213.5H1307H1246.5V210.5L1248 209C1254.4 207.8 1265.5 209 1265.5 188Z" stroke="#B68C49" strokeWidth="5"/>
                    <path d="M1442 88.9999C1443.5 54.9999 1483.5 32.5 1538 49.4999V86.5L1536 88.9999L1533 86.5C1532 72.5 1524 54.5 1497.5 56C1484 56 1459.5 70.5 1481.5 95C1520.5 126 1546.01 138 1542.5 173.5C1538.5 214 1483.5 227 1442 210L1438.5 205L1441 166.5L1442 163L1445 164.5C1445 188.5 1468 207.5 1492.5 202C1503.7 201.6 1524 178 1495 156C1475.5 142.5 1443.5 121 1442 88.9999Z" stroke="#B68C49" strokeWidth="5"/>
                    <path d="M356 297V292L677.5 292.5V297H356Z" stroke="#B68C49" strokeWidth="5"/>
                    <path d="M729 313.5C725.8 320.3 721.667 322 720 322V324H742.5V322H736.5V317L749.5 284L756 300.5H743.5L740.5 307.5H759L764.5 321L762.5 322.5L763.5 324H787.5V322H784.5L780.5 319.5L779 317L756 264L754.5 262.5H751.5L729 313.5Z" stroke="#B68C49" strokeWidth="2"/>
                    <path d="M924 274.5C922.8 265.3 918.167 264.333 916 265V263H937.5L938 312C939.6 319.2 946.667 320 950 319.5C981 313.5 968.5 268.332 942 267.5L938 269V263H952.5C964.5 265 985 273 983 292C983 304 978 324 952.5 324H918.5V322C920.5 321.6 924 319.5 924 315.5V274.5Z" stroke="#B68C49" strokeWidth="2"/>
                    <path d="M786 291C793 253.5 829 262 843.5 264.5L842.5 281.5H840.5C843.5 266.5 803.5 253.5 803.5 292C803.5 323 838.5 327 842.5 307.5H843.5L842.5 319.5L840.5 323C826.9 332.2 783 321.5 786 291Z" stroke="#B68C49" strokeWidth="2"/>
                    <path d="M857 313.5C853.8 320.3 849.667 322 848 322V324H870.5V322H864.5V317L877.5 284L884 300.5H871.5L868.5 307.5H887L892.5 321L890.5 322.5L891.5 324H915.5V322H912.5L908.5 319.5L907 317L884 264L882.5 262.5H879.5L857 313.5Z" stroke="#B68C49" strokeWidth="2"/>
                    <path d="M1012.98 294.503H1011.98V295.503V305.408C1011.98 308.478 1012.02 310.885 1012.22 312.746C1012.41 314.592 1012.78 316.058 1013.58 317.139C1014.42 318.269 1015.6 318.834 1017.07 319.123C1018.51 319.405 1020.34 319.447 1022.6 319.447C1025.36 319.447 1027.19 319.364 1028.62 318.973C1030.13 318.56 1031.12 317.821 1032.24 316.706C1032.97 315.977 1033.63 315.13 1034.11 314.34C1034.36 313.945 1034.57 313.548 1034.72 313.174C1034.74 313.119 1034.76 313.062 1034.78 313.005C1034.81 313.992 1034.76 315.219 1034.65 316.498C1034.52 318.045 1034.29 319.626 1034.02 320.9C1033.88 321.539 1033.73 322.08 1033.58 322.493C1033.5 322.699 1033.43 322.859 1033.37 322.977C1033.36 322.985 1033.36 322.994 1033.35 323.002C1033.31 323.009 1033.26 323.018 1033.2 323.027C1032.88 323.073 1032.42 323.118 1031.82 323.162C1030.63 323.249 1028.97 323.322 1026.98 323.381C1023 323.5 1017.77 323.561 1012.53 323.563C1007.3 323.566 1002.06 323.509 998.087 323.395C996.804 323.357 995.655 323.314 994.682 323.265C995.183 323.077 995.676 322.843 996.122 322.49C997.103 321.713 997.627 320.543 997.954 318.748C998.279 316.96 998.439 314.363 998.539 310.525C998.625 307.24 998.667 302.995 998.721 297.495C998.731 296.545 998.741 295.556 998.751 294.529C998.892 280.686 998.924 273.339 998.338 269.475C998.048 267.562 997.573 266.219 996.629 265.424C996.343 265.183 996.034 265.011 995.711 264.887C996.01 264.871 996.324 264.855 996.651 264.84C1000.29 264.671 1005.65 264.58 1012.47 264.58H1032.85L1032.34 269.717C1032.2 271.229 1031.97 272.629 1031.73 273.796C1031.63 273.464 1031.5 273.147 1031.34 272.845C1030.86 271.955 1030.13 271.287 1029.15 270.802C1027.27 269.869 1024.41 269.563 1020.41 269.563H1012.98H1011.98V270.563V279.541V288.52V289.52H1012.98H1021.43C1023.95 289.52 1026.17 289.408 1027.83 289.211C1028.65 289.113 1029.36 288.991 1029.91 288.84C1030.19 288.766 1030.45 288.676 1030.68 288.563C1030.79 288.508 1030.94 288.427 1031.08 288.309C1031.28 289.637 1031.29 292.043 1031.02 295.425L1030.75 298.995L1030.68 298.834L1029 295.093L1028.73 294.503H1028.09H1020.54H1012.98ZM1030.86 287.466C1030.86 287.465 1030.86 287.469 1030.87 287.479C1030.86 287.471 1030.86 287.466 1030.86 287.466ZM1035.18 311.456C1035.18 311.456 1035.18 311.457 1035.17 311.459C1035.18 311.456 1035.18 311.455 1035.18 311.456Z" stroke="#B68C49" strokeWidth="2"/>
                    <path d="M1053.12 292.405C1055.27 277.97 1057.24 265.233 1057.5 264.043L1057.5 264.043C1057.64 263.429 1057.76 262.985 1057.89 262.686C1057.9 262.655 1057.91 262.628 1057.93 262.603C1058.18 262.782 1058.56 263.145 1059.09 263.791C1061.23 266.411 1065.02 272.583 1072.1 284.401L1072.96 283.887L1072.1 284.401L1083.37 303.214L1084.25 304.671L1085.1 303.2L1089.34 295.86L1089.34 295.86C1091.67 291.82 1096.91 282.71 1100.97 275.613C1102.99 272.077 1104.96 268.824 1106.51 266.434C1107.29 265.238 1107.95 264.268 1108.45 263.592C1108.67 263.287 1108.86 263.054 1109 262.891C1109.06 263.036 1109.14 263.245 1109.22 263.543C1109.37 264.046 1109.53 264.74 1109.71 265.693C1110.45 269.521 1111.49 277.137 1113.5 292.065L1114.5 291.931L1113.5 292.065C1115.37 305.897 1116.46 313.394 1117.77 317.409C1118.43 319.428 1119.21 320.769 1120.34 321.555C1120.79 321.865 1121.27 322.068 1121.76 322.2C1119.71 322.319 1117.23 322.398 1114.72 322.431C1111.63 322.473 1108.52 322.446 1106.12 322.341C1104.92 322.289 1103.91 322.217 1103.18 322.128C1102.91 322.096 1102.7 322.062 1102.53 322.029C1102.58 321.859 1102.69 321.648 1102.87 321.439C1103.25 320.984 1103.43 320.347 1103.53 319.682C1103.64 318.985 1103.69 318.093 1103.68 316.992C1103.67 314.786 1103.46 311.597 1103.03 307.145C1102.9 305.728 1102.78 304.405 1102.66 303.178C1102.38 300.02 1102.14 297.499 1101.89 295.639C1101.72 294.355 1101.52 293.309 1101.27 292.561C1101.14 292.19 1100.97 291.821 1100.74 291.524C1100.49 291.213 1100.11 290.918 1099.59 290.879C1099.1 290.843 1098.68 291.049 1098.39 291.261C1098.09 291.478 1097.8 291.774 1097.53 292.104C1097 292.767 1096.38 293.731 1095.68 294.95C1094.67 296.71 1093.4 299.113 1091.81 302.128C1091.19 303.301 1090.52 304.567 1089.8 305.925L1089.8 305.925C1086.76 311.645 1084.38 315.873 1082.64 318.64C1081.77 320.029 1081.08 321.02 1080.57 321.642C1080.44 321.787 1080.34 321.905 1080.25 321.998C1080.08 321.805 1079.88 321.546 1079.63 321.22C1079.01 320.384 1078.18 319.176 1077.21 317.679C1075.28 314.688 1072.8 310.592 1070.25 306.114C1069.57 304.922 1068.94 303.804 1068.34 302.762C1066.66 299.794 1065.33 297.439 1064.27 295.72C1063.55 294.562 1062.93 293.644 1062.38 293.008C1062.11 292.69 1061.82 292.407 1061.52 292.198C1061.23 291.994 1060.84 291.801 1060.38 291.807C1059.88 291.815 1059.49 292.054 1059.21 292.357C1058.96 292.637 1058.78 292.989 1058.65 293.335C1058.39 294.03 1058.19 294.997 1058.03 296.169C1057.78 297.915 1057.55 300.307 1057.28 303.307C1057.18 304.358 1057.08 305.483 1056.96 306.682C1056.65 309.9 1056.45 312.452 1056.38 314.464C1056.32 316.461 1056.4 318.006 1056.69 319.174C1056.99 320.378 1057.54 321.28 1058.5 321.824C1058.85 322.027 1059.24 322.166 1059.65 322.259C1057.89 322.371 1055.63 322.433 1052.98 322.433C1049.79 322.433 1047.15 322.342 1045.29 322.183C1045.53 322.103 1045.76 322.006 1045.99 321.9C1046.64 321.585 1047.29 321.132 1047.75 320.581C1047.91 320.395 1048 320.163 1048.06 320.019C1048.13 319.842 1048.2 319.628 1048.27 319.391C1048.41 318.914 1048.57 318.28 1048.75 317.518C1049.1 315.989 1049.52 313.889 1049.99 311.375C1050.93 306.342 1052.04 299.615 1053.12 292.405ZM1053.12 292.405L1052.13 292.258L1053.12 292.405ZM1057.75 262.501C1057.75 262.501 1057.75 262.501 1057.75 262.504C1057.75 262.503 1057.75 262.501 1057.75 262.501ZM1109.21 262.678C1109.21 262.678 1109.2 262.682 1109.19 262.688C1109.2 262.68 1109.21 262.677 1109.21 262.678ZM1102.19 321.944C1102.19 321.943 1102.2 321.945 1102.2 321.948C1102.2 321.948 1102.2 321.947 1102.2 321.947C1102.2 321.945 1102.19 321.944 1102.19 321.944ZM1080.59 322.343C1080.59 322.343 1080.58 322.34 1080.57 322.331C1080.58 322.338 1080.59 322.342 1080.59 322.343ZM1063.32 321.765C1063.32 321.765 1063.32 321.766 1063.32 321.766C1063.32 321.764 1063.32 321.764 1063.32 321.765ZM1042.65 321.765C1042.64 321.764 1042.64 321.764 1042.65 321.766C1042.65 321.766 1042.65 321.765 1042.65 321.765Z" stroke="#B68C49" strokeWidth="2"/>
                    <path d="M1227 297V292H1548V297H1227Z" stroke="#B68C49" strokeWidth="5"/>
                    <path d="M1121 265.5V263.5H1147L1143 265.5V268L1156.5 290.5L1168.5 269.5V265.5H1164.5V263.5H1185.5C1187.5 263.5 1190 263.9 1184 265.5C1178 267.1 1175.83 270.167 1175.5 271.5L1162 293.5L1160 299.5C1159.83 302.333 1159.6 309.4 1160 315C1160.4 320.6 1165.83 322.333 1168.5 322.5V324.5H1139C1137.5 323.833 1135.4 322.5 1139 322.5C1142.6 322.5 1144.5 319.167 1145 317.5V298L1126.5 268L1125 266.5L1121 265.5Z" stroke="#B68C49" strokeWidth="2"/>
                </svg>    
            </h1>                                     
        </div>
   
        <div id="green"></div>
    </>
  )
}

export default Loader

