<template>
    <p>Last Modified: {{ lastModified }}</p>
</template>
  
<script>
export default {
    data() {
        return {
            lastModified: '',
        };
    },
    mounted() {
        const date = new Date(document.lastModified);
        const modifiedString = date.toString();
        const removedInfo = modifiedString.replace('00 (Moscow Standard Time)', ''); // Replace with the info you want to remove
        this.lastModified = removedInfo;
    },
};
</script>
  