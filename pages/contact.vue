<template>
    <div class="wrapper" style="display: flex; justify-content: space-between; flex-direction: column; min-height: 100vh; width: 100%;">
        <div class="mobile"
            style="position: fixed; top: 0; right: -8px; z-index: 9999; padding: 1rem; font-size: 2rem; ">
            <nuxt-link class="mobile" style="font-size: 2rem; line-height: 50%; padding: 1rem ; border-radius: 20px;"
                to="/">×</nuxt-link>
        </div>
        <div>
            <h1 class="headline">(contact)</h1>
            <h2>Let's create something cool together. <br> Feel free to send me a message.</h2>
        </div>

        <div>
            <NuxtLink to="https://www.linkedin.com/in/oleg-lehnitsky/" class="cta-hero" target="_blank">Chat on Linkedin
            </NuxtLink>
            <button class="cta-hero" @click="copyEmail" :class="{ 'button-disabled': buttonPressed }">{{ buttonContent
            }}</button>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            buttonContent: 'Get email address',
            buttonPressed: false,
        };
    },
    methods: {
        copyEmail() {
            const emailAddress = 'oleg.lekhnitsky@gmail.com'; // Replace with the actual email address

            // Create a temporary input element
            const tempInput = document.createElement('input');
            tempInput.value = emailAddress;
            document.body.appendChild(tempInput);

            // Select the email address inside the input element
            tempInput.select();
            tempInput.setSelectionRange(0, 99999); // For mobile devices

            // Copy the selected email address to the clipboard
            document.execCommand('copy');

            // Remove the temporary input element
            document.body.removeChild(tempInput);

            // Set the buttonContent to the message text
            this.buttonContent = 'Email address copied!';
            this.buttonPressed = true;
        },
    },
};
</script>
  
<style scoped >
.wrapper {
    /* Add your styles for the wrapper container here */
}

.cta-hero {
    /* Add your styles for the buttons here */
}

.button-disabled {
    background-color: var(--bg-sec);
    color: var(--text);
    /* Change the color to your desired disabled color */
    pointer-events: none;
    /* Disable pointer events to prevent further clicks */
    transition: all 300ms ease-inZz;
}</style>
  