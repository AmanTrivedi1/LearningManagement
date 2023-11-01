import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursesPage = () => {
  return (
    <>
      <div className="p-6">
        <Link href="/teacher/create">
          <Button
            variant="ghost"
            className="border border-text text-text bg-dark"
          >
          Create  New Courses
          </Button>
        </Link>
      </div>
    </>
  );
};

export default CoursesPage;
