<script setup lang="ts"></script>

<template>
  <section class="flex flex-1 flex-col items-center space-y-8">
    <div class="flex items-center gap-4">
      <div class="space-y-2">
        <h1 class="text-3xl xs:text-4xl font-bold">Stanislav Farkash</h1>
        <p class="text-md text-left">Moscow, Russia</p>
      </div>

      <div v-tooltip.focus.top="'Любимая выбирала'" tabindex="0">
        <PrimeImage
          src="/img/avatar.webp"
          alt="avatar"
          width="200"
          pt:image:class="rounded-full border-4" />
      </div>
    </div>

    <p
      class="py-2 px-4 rounded xs:w-auto xs:px-12 text-center font-semibold dark:bg-[#6ee7b7] dark:text-black w-auto">
      From Russian frontend with love!
    </p>

    <section class="text-center max-w-xl">
      <PrimeCard>
        <template #title>
          <h3 class="text-2xl md:text-4xl tracking-widest font-thin">About</h3>
        </template>

        <template #content>
          <p class="text-justify indent-8 my-4">
            From an early age, I have been passionate about programming, which
            has allowed me to build a solid foundation in this field. Starting
            with learning Pascal in school and university, I actively
            participated in informatics olympiads, which helped me develop
            analytical thinking and problem-solving skills.
          </p>
          <p class="text-justify indent-8 my-4">
            Since 2021, I have been studying Python and web development in
            depth. Since 2022, I have focused on working with Vue 3, which has
            allowed me to enhance my frontend development skills.
          </p>
          <p class="text-justify indent-8 my-4">
            I have experience in backend development, including implementing JWT
            authentication and creating REST APIs with Express. This gives me an
            understanding of the full web application development cycle and
            effective interaction between the frontend and backend.
          </p>
          <p class="text-justify indent-8 my-4">
            I am proficient in HTML, CSS, responsive design, and work with Vue
            3, the Composition API, and Pinia. I can quickly adapt to new
            technologies and tools.
          </p>
        </template>

        <template #footer>
          <PrimeButton as="router-link" to="/skills" label="See my stack" />
        </template>
      </PrimeCard>
    </section>

    <section class="text-center max-w-xl mb-8">
      <PrimeCard>
        <template #title>
          <h3 class="text-2xl md:text-4xl tracking-widest font-thin">
            Interests
          </h3>
        </template>

        <template #content>
          <p class="text-justify indent-8 my-4">
            I have a passion for reading business and psychology books,
            exploring various perspectives and gaining insights into human
            behavior and decision-making.
          </p>
          <p class="text-justify indent-8 my-4">
            I also enjoy watching movies and studying screenwriting, fascinated
            by the structure, characters, and storytelling techniques that drive
            impactful narratives.
          </p>
          <p class="text-justify indent-8 my-4">
            Beyond that, I love diving deep into the meanings behind songs,
            albums, and films, trying to uncover the messages the creators
            intended.
          </p>
          <p class="text-justify indent-8 my-4">
            My favorite bands include Би-2, Заточка, ЛСП, and кис-кис, and I
            also enjoy the relaxing vibe of Lofi hip-hop.
          </p>
        </template>

        <template #footer>
          <PrimeButton as="router-link" to="/contacts" label="Call me" />
        </template>
      </PrimeCard>
    </section>
  </section>
</template>
