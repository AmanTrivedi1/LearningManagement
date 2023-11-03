import { Category, Course } from "@prisma/client";

import { CourseCard } from "@/components/course-card";

type CourseWithProgressWithCategory = Course & {
  category: Category | null;
  chapters: { id: string }[];
  progress: number | null;
};

interface CoursesListProps {
  items: CourseWithProgressWithCategory[];
}

export const CoursesList = ({ items }: CoursesListProps) => {
  return (
    <div>
      {items.length === 0 ? (
        <>
          <h1 className="text-center sm:text-xl mb-4  font-semibold text-lg md:text-left text-text ">
            Looks like there is no any course 😔
          </h1>
        </>
      ) : (
        <h1 className="text-center sm:text-xl mb-4  font-semibold text-lg md:text-left text-text ">
          Explore what you want to learn 🥳
        </h1>
      )}
      <div className="grid sm:grid-cols-2   md:grid-cols-2 lg:grid-cols-3 xl:grid-colos-4 2xl:grid-cols-4 gap-5">
        {items.map((item) => (
          <CourseCard
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl!}
            chaptersLength={item.chapters.length}
            price={item.price!}
            progress={item.progress}
            category={item?.category?.name!}
          />
        ))}
      </div>
      {items.length === 0 && (
        <div className="text-center text-sm text-text mt-10">
          No courses found
        </div>
      )}
    </div>
  );
};
