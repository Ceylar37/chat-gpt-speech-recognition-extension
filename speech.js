var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
let inputWrapper;
let textarea;
let sendButton;

const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onresult = function (event) {
  const rec = event.results[0][0].transcript;
  textarea.value = rec;
};

recognition.onspeechend = function () {
  recognition.stop();
};

recognition.onerror = function (event) {
  console.error('Error occurred in recognition: ' + event.error);
};

function task() {
  inputWrapper = document.querySelector('form > div > div.flex-col');
  if (inputWrapper) {
    textarea = inputWrapper.querySelector('textarea');
    const textareaWidth = textarea.getBoundingClientRect().width;
    textarea.style.width = textareaWidth - 32 + 'px';
    sendButton = inputWrapper.querySelector('button');
    sendButton.style.right = '2rem';
    const recButton = document.createElement('button');
    recButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="16"
														height="16" viewBox="0 0 256 256" xml:space="preserve">
														<defs>
														</defs>
														<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
															transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
															<path
																d="M 45 70.968 c -16.013 0 -29.042 -13.028 -29.042 -29.042 c 0 -1.712 1.388 -3.099 3.099 -3.099 c 1.712 0 3.099 1.388 3.099 3.099 C 22.157 54.522 32.404 64.77 45 64.77 c 12.595 0 22.843 -10.248 22.843 -22.843 c 0 -1.712 1.387 -3.099 3.099 -3.099 s 3.099 1.388 3.099 3.099 C 74.042 57.94 61.013 70.968 45 70.968 z"
																style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: lightgrey; fill-rule: nonzero; opacity: 1;"
																transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
															<path
																d="M 45 60.738 L 45 60.738 c -10.285 0 -18.7 -8.415 -18.7 -18.7 V 18.7 C 26.3 8.415 34.715 0 45 0 h 0 c 10.285 0 18.7 8.415 18.7 18.7 v 23.337 C 63.7 52.322 55.285 60.738 45 60.738 z"
																style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: lightgrey; fill-rule: nonzero; opacity: 1;"
																transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
															<path
																d="M 45 89.213 c -1.712 0 -3.099 -1.387 -3.099 -3.099 V 68.655 c 0 -1.712 1.388 -3.099 3.099 -3.099 c 1.712 0 3.099 1.387 3.099 3.099 v 17.459 C 48.099 87.826 46.712 89.213 45 89.213 z"
																style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: lightgrey; fill-rule: nonzero; opacity: 1;"
																transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
															<path
																d="M 55.451 90 H 34.549 c -1.712 0 -3.099 -1.387 -3.099 -3.099 s 1.388 -3.099 3.099 -3.099 h 20.901 c 1.712 0 3.099 1.387 3.099 3.099 S 57.163 90 55.451 90 z"
																style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: lightgrey; fill-rule: nonzero; opacity: 1;"
																transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
														</g>
													</svg>`;
    recButton.classList.add(
      'absolute',
      'p-1',
      'rounded-md',
      'text-gray-500',
      'bottom-1.5',
      'md:bottom-2.5',
      'hover:bg-gray-100',
      'enabled:dark:hover:text-gray-400',
      'dark:hover:bg-gray-900',
      'disabled:hover:bg-transparent',
      'dark:disabled:hover:bg-transparent',
      'right-1',
      'md:right-2',
      'disabled:opacity-40'
    );
    recButton.onclick = (e) => {
      e.stopPropagation();
      e.preventDefault();
      recognition.start();
    };
    inputWrapper.appendChild(recButton);
    return;
  }
  setTimeout(task, 500);
}

task();
