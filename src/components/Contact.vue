<template>
    <div class="contact">
        <h1>This is contact page</h1>
    </div>
</template>

<script>
export default {
    name: "Contact",
    props: {
        msg: String
    },
    mounted(){
        this.$nextTick(() => {
            
        });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>