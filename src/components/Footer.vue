<template>
    <div class="footer">
        <h1>This is footer</h1>
    </div>
</template>

<script>
export default {
    name: "Footer",
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