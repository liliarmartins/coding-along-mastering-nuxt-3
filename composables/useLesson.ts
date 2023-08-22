import { LessonWithPath } from "~~/types/course";

export default async (chapterSlug: string, lessonSlug: string) =>
  await useFetchWithCache<LessonWithPath>(
    `/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`,
  );
