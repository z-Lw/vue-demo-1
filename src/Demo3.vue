<template>
    <div class="blue">
        {{message}}
        <button @click="fn">call fn</button>
    </div>
</template>
<script>
export default {
    props:['message','fn']
}
</script>
<style scoped>
.blue{
    color: blue;
}
</style>