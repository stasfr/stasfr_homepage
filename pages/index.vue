<template>
  <div class="box-border max-w-[440px] my-0 mx-auto px-4 text-center">
    <div class="bg-primary py-2 px-12 rounded mb-8 text-textDark">
      You're welcome!
    </div>
    <div class="flex items-center mb-8">
      <div class="">
        <div class="text-4xl">Stanislav Farkash</div>
        <div class="text-md text-left">Moscow, Russia</div>
      </div>
      <img
        class="rounded-full w-28 ml-4 border-4"
        src="/assets/img/photo.jpeg"
        alt="photo"
      />
    </div>
    <HomeAbout :text="textAbout" />
    <HomeAbout :text="textInterests" />
  </div>
</template>

<script setup>
const textAbout = {
  title: "About",
  text: "I started programming at school, I wrote programs in Pascal. Now I write code in JS, HTML, CSS, Python and VBA.",
  link: "/skills",
  btnTitle: "See my stack",
};

const textInterests = {
  title: "Interests",
  text: "I like reading books on business and psychology. I watch movies and study screenwriting.",
  link: "/contacts",
  btnTitle: "Call me",
};
</script>
