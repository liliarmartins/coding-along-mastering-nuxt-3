import { CourseMeta } from "~~/types/course";

export default async () =>
  await useFetchWithCache<CourseMeta>("/api/course/meta");
