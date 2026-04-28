<script setup lang="ts"></script>

<template>
  <UPage>
    <UPageHeader title="About myself and my skills" />

    <UPageSection
      title="Farkash Stanislav"
      description="Middle+ Vue frontend developer from Moscow, Russia"
      orientation="horizontal"
    >
      <div class="flex items-center justify-center">
        <NuxtImg
          src="images/avatar.webp"
          class="w-3/4 rounded-lg"
          loading="lazy"
        />
      </div>
    </UPageSection>

    <UPageBody>
      <UPageCard title="Quick history overview">
        <p class="text-justify indent-8">
          From an early age, I have been passionate about programming, which has
          allowed me to build a solid foundation in this field. Starting with
          learning Pascal in school and university, I actively participated in
          informatics olympiads, which helped me develop analytical thinking and
          problem-solving skills.
        </p>

        <p class="text-justify indent-8">
          Since 2021, I have been studying Python and web development in depth.
          Since 2022, I have focused on working with Vue 3, which has allowed me
          to enhance my frontend development skills.
        </p>
      </UPageCard>

      <UPageCard title="My work">
        <p class="text-justify indent-8">
          I specialize in building complex Vue 3 + TypeScript applications with
          a strong focus on architecture and user experience.
        </p>

        <p class="text-justify indent-8">
          One of the most challenging projects was developing a custom Gantt
          chart from scratch using Canvas and Konva.js, tailored to specific
          data structures and an existing design system. I also built real-time
          collaborative components using WebSockets and implemented advanced
          form validation with conditional logic and array field validation.
        </p>

        <p class="text-justify indent-8">
          At a government analytics center, I led projects from zero to
          production — setting up CI/CD, configuring build tools, and
          establishing modular architecture. I optimized heavy data tables with
          lazy loading, tree structures, and persistent state management
          (filters, sorting, column settings across sessions and URL sharing).
          Beyond frontend, I worked on data science tasks: vectorizing data with
          embeddings and building K-means clustering visualizations using
          Python, LMStudio, and Milvus.
        </p>

        <p class="text-justify indent-8">
          In the insurance sector, I developed a full meeting room booking
          system with calendar integration (iCalendar recurrence), Google Meet
          auto-generation, and real-time tablet UI for conference rooms — all
          synchronized via WebSocket across every CRUD operation. I also
          implemented role-based access control with Keycloak and route guards.
        </p>

        <p class="text-justify indent-8">
          As a fullstack developer at a venture fund project, I built an
          AI-powered startup search pipeline: parsing documents (PDFs, scans,
          presentations), generating prompts, and processing responses through
          Gemini/OpenAI APIs with Zod-validated JSON schemas stored in MongoDB.
        </p>

        <p class="text-justify indent-8">
          I enjoy mentoring developers, conducting code reviews, and writing
          documentation that serves both humans and LLMs.
        </p>
      </UPageCard>
    </UPageBody>
  </UPage>
</template>
