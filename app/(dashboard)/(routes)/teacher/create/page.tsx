"use client";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});

const CreatePage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/courses", values);
      router.push(`/teacher/courses/${response.data.id}`);
      toast.success("Created Successfully");
    } catch {
      toast.error("Some Error Occurred 😭");
    }
    console.log(values);
  };

  return (
    <>
      <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
        <div className=" bg-backgroundcolor  cursor-pointer hover:shadow-lg hover:shadow-slate-600 rounded-md px-6  py-6 ">
          <h1 className="text-2xl text-slate-100">Name your course</h1>
          <p className="text-sm text-text">
            What would you like to name your course? Don&apos;t worry, name can
            be change further.
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 mt-8"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-text">Course title</FormLabel>
                    <FormControl>
                      <Input
                        className="text-dark"
                        disabled={isSubmitting}
                        placeholder="e.g. 'Advanced Javascript'"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-text">
                      What you gona teach in this course?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-x-2">
                <Link href="/">
                  <Button type="button" variant="destructive">
                    Cancel
                  </Button>
                </Link>
                <Button
                  className="bg-[#0F0F0F]"
                  type="submit"
                  disabled={!isValid || isSubmitting}
                >
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreatePage;
