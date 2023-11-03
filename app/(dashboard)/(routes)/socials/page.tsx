// import { BellIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;

function SocialPage({ className, ...props }: CardProps) {
  return (
    <>
      <div className="flex items-center  md:flex-row flex-col mt-20 justify-center gap-10">
        <div className="max-w-xs  border border-backgroundcolor rounded-lg hover:shadow-blue-700 shadow-lg">
          <div>
            <img src="/discord.jpg" className="rounded-lg" alt="Justimage" />
          </div>
          <div>
            <Button className=" ml-1 bg-[#0808DA] hover:opacity-100 opacity-80 hover:bg-[#0808DA] px-4 mb-4 mt-4 ">
              Join Now
            </Button>
          </div>
        </div>
        {/* Card Two */}
        <div className="max-w-xs  border border-backgroundcolor rounded-lg hover:shadow-blue-700 shadow-lg">
          <div>
            <img src="/discord.jpg" className="rounded-lg" alt="Justimage" />
          </div>
          <div>
            <Button className=" ml-1 bg-[#0808DA] hover:opacity-100 opacity-80 hover:bg-[#0808DA] px-4 mb-4 mt-4 ">
              Join Now
            </Button>
          </div>
        </div>
        {/* Card Three */}
        <div className="max-w-xs  border border-backgroundcolor rounded-lg hover:shadow-blue-700 shadow-lg">
          <div>
            <img src="/discord.jpg" className="rounded-lg" alt="Justimage" />
          </div>
          <div>
            <Button className=" ml-1 bg-[#0808DA] hover:opacity-100 opacity-80 hover:bg-[#0808DA] px-4 mb-4 mt-4 ">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default SocialPage;
