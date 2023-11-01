"use client";

import * as z from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { ImageIcon, PenIcon, PlusCircle } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Course } from "@prisma/client";
import Image from "next/image";
import { FileUpload } from "@/components/file-upload";

interface ImageFormProps {
  initialData: Course;
  courseId: string;
}

const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Image is required",
  }),
});

export const ImageForm = ({ initialData, courseId }: ImageFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
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
  return (
    <>
      <div className="mt-6 bg-backgroundcolor  cursor-pointer hover:shadow-lg hover:shadow-slate-600 rounded-md p-4">
        <div className="font-semibold text-text flex items-center justify-between">
          Thumbnail Image
          <Button onClick={toggleEdit} className="border" variant="ghost">
            {isEditing && <>Cancel</>}
            {!isEditing && !initialData.imageUrl && (
              <>
                <PlusCircle className="h-4 w-4  mr-4" />
                Add Image
              </>
            )}
            {!isEditing && initialData.imageUrl && (
              <>
                <PenIcon className="h-4 w-4 mr-2 " />
                Change
              </>
            )}
          </Button>
        </div>
        {!isEditing &&
          (!initialData.imageUrl ? (
            <div className="flex items-center justify-center h-60 bg-text mt-4 rounded-md">
              <ImageIcon className="w-10 h-10 text-backgroundcolor " />
            </div>
          ) : (
            <div className="relative aspect-video mt-2">
              <Image
                className="object-cover rounded-md"
                alt="Upload"
                src={initialData.imageUrl}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          ))}
        {isEditing && (
          <div>
            <FileUpload
              onChange={(url) => {
                if (url) {
                  onSubmit({ imageUrl: url });
                }
              }}
              endpoint="courseImage"
            />

            <div className="text-xs text-muted-foreground text-text mt-4">
              16:9 Aspect Ratio
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageForm;
