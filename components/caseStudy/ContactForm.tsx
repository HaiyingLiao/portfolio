"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { contactFormInfo } from "@/constants";
import { toast } from "../ui/use-toast";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
  contact: z.string().email().or(z.string()),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const emailData = {
        user_name: data.name,
        user_email: data.email,
        user_message: data.message,
        contact_info: data.contact,
      };
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        emailData,
        process.env.NEXT_PUBLIC_EMAILJS_API_KEY!
      );
      toast({
        title: "I have received your message.😃",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oops, something went wrong. please send again.",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-2xl space-y-8"
      >
        {contactFormInfo.map((formField) => (
          <FormField
            key={formField.label}
            control={form.control}
            name={formField.label as keyof z.infer<typeof formSchema>}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="b-regular md:p-regular leading-[160%] text-black-300 dark:text-white md:leading-[150%]">
                  {formField.title}
                  <span className="text-[#778295]"> {formField?.subTitle}</span>
                </FormLabel>
                <FormControl className="md:p-regular b-regular rounded-[20px] border  border-[#CCE1FF] !bg-white-800 focus:!ring-1 focus:!ring-accent-primaryLight dark:!bg-black-300 dark:text-white dark:focus:!ring-accent-primaryDark md:min-h-[70px]">
                  {formField.label === "message" ? (
                    <Textarea
                      className="resize-none !bg-white-800 focus:!ring-1 focus:!ring-accent-primaryLight dark:!bg-black-300 dark:focus:!ring-accent-primaryDark md:min-h-[150px]"
                      {...field}
                    />
                  ) : (
                    <Input {...field} autoComplete="off" />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <div className="flex justify-end">
          <Button className="primaryBtn rounded-2xl md:min-w-[186px]">
            Send
          </Button>
        </div>
      </form>
    </Form>
  );
}
