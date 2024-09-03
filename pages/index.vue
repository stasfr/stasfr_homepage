<template>
  <div class="box-border max-w-[440px] my-0 mx-auto px-4 text-center">
    <div class="bg-primary py-2 px-12 rounded mb-8 text-textDark">
      From Russian frontend with love!
    </div>
    <div class="flex items-center mb-8">
      <div>
        <div class="text-4xl">Stanislav Farkash</div>
        <div class="text-md text-left">Moscow, Russia</div>
      </div>
      <img
        class="rounded-full w-28 ml-4 border-4"
        src="/assets/img/photo.jpeg"
        alt="photo"
      />
    </div>
    <HomeAbout v-for="section in sections" :section="section" />
    <HomeCareer />
  </div>
</template>

<script setup>
const sections = [
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
];
</script>
