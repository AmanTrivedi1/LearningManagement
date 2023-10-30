"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";

import { PenIcon, Pencil } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Course } from "@prisma/client";
import { Combobox } from "@/components/ui/combobox";

interface CategoryFormProps {
  initialData: Course;
  courseId: string;
  options: {
    label: string;
    value: string;
  }[];
}

const formSchema = z.object({
  categoryId: z.string().min(1),
});

export const CategoryForm = ({
  initialData,
  courseId,
  options,
}: CategoryFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryId: initialData?.categoryId || "",
    },
  });
  const [isEditing, setIsEditing] = useState(false);
  const { isSubmitting, isValid } = form.formState;
  const router = useRouter();
  const toggleEdit = () => setIsEditing((current) => !current);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}`, values);
      toggleEdit();
      router.refresh();
      toast.success("Course Updated");
    } catch {
      toast.error("Some Error occurred");
    }
  };

  const selectedOption = options.find(
    (option) => option.value === initialData.categoryId
  );

  return (
    <>
      <div className="mt-6 border hover:border-black/80 hover:cursor-pointer border-black/20 rounded-md p-4">
      <div className="font-semibold text-gray-700 flex items-center justify-between">
          Course Categories
          <Button onClick={toggleEdit} variant="ghost">
            {isEditing && <>Cancel</>}
            {!isEditing && (
              <>
                <Pencil className="h-4 w-4 mr-2 " />
                Edit
              </>
            )}
          </Button>
        </div>
        {!isEditing && (
          <p
            className={cn(
              "text-sm mt-2",
              !initialData.categoryId && "text-slate-500 italic"
            )}
          >
            {selectedOption?.label || "No Category "}
          </p>
        )}
        {isEditing && (
          <Form {...form}>
            <form
              className="space-y-4 mt-4"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Combobox options={...options} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-x-2">
                <Button disabled={!isValid || isSubmitting} type="submit">
                  Save
                </Button>
              </div>
            </form>
          </Form>
        )}
      </div>
    </>
  );
};

export default CategoryForm;