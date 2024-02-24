import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MdEmail } from "react-icons/md";

export default function ContactDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button
            className="custom-bg inline-block relative overflow-hidden w-fit mx-auto mt-8 p-2 rounded cursor-pointer text-white 
            min-[501px]:mt-20 hover:opacity-80"
          >
            <p className="flex justify-center align-items gap-x-2">
              <MdEmail size={24} />
              Click to CONNECT with me now.
            </p>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form action="https://formspree.io/f/xwkjyarz" method="POST">
            <DialogHeader>
              <DialogTitle>Email me</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Message
                </Label>
                <Input
                  id="name"
                  name="Message"
                  defaultValue="Hi Enoch, I would like to work with you"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Contact
                </Label>
                <Input
                  id="username"
                  name="Contact"
                  placeholder="Your twitter/linkedin/email address"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-gray-100"
              >
                Send
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
