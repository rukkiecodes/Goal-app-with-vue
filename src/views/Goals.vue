<template>
    <div class="goals">
        <Goals />
    </div>
</template>

<script>
// @ is an alias to /src
import Goals from "@/components/Goals.vue";

export default {
    name: "Goals",
    components: {
        Goals
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>