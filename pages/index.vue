<template>
  <section class="flex flex-col items-center space-y-8">
    <div
      v-motion-slide-top
      class="bg-primary py-2 rounded text-textDark w-full xs:w-auto xs:px-12 text-center"
    >
      From Russian frontend with love!
    </div>
    <div class="flex items-center gap-4" v-motion-slide-top>
      <div class="space-y-2">
        <div class="text-3xl xs:text-4xl font-bold">Stanislav Farkash</div>
        <div class="text-md text-left">Moscow, Russia</div>
      </div>
      <Avatar
        image="/img/avatars/avatar.png"
        shape="circle"
        size="xlarge"
        v-tooltip.top="'Любимая выбирала'"
      />
    </div>
    <HomeAbout
      v-for="section in sections"
      :section="section"
      v-motion-slide-bottom
    />
    <HomeCareer v-if="(careerType = 'timeline')" v-motion-slide-bottom />
  </section>
</template>

<script setup>
const sections = ref([
  {
    title: "About",
    text: "I started programming at school, I wrote programs in Pascal. Now I write code in JS, HTML, CSS, Python and VBA.",
    link: "/skills",
    btnTitle: "See my stack",
  },
  {
    title: "Interests",
    text: "I like reading business and psychology books, watch movies and study screenwriting.",
    link: "/contacts",
    btnTitle: "Call me",
  },
]);

const careerType = ref("timeline");
</script>

<style scoped>
/* .p-avatar-xl {
  width: 6rem;
  height: 6rem;
} */
</style>
