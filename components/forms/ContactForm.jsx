import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Define the form schema using Zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  phone: z.string().optional(),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters",
  }),
});

export function ContactForm() {
  // Initialize the form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // Handle form submission
  function onSubmit(values) {
    console.log(values);
    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm text-foreground font-medium inline-flex items-center">
                  Full Name <span className="text-destructive ml-1">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm text-foreground font-medium inline-flex items-center">
                  Email Address <span className="text-destructive ml-1">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Field */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm text-foreground font-medium">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="+1 (555) 000-0000"
                    className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Subject Field */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm text-foreground font-medium inline-flex items-center">
                  Subject <span className="text-destructive ml-1">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="How can we help?"
                    className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Message Field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-sm text-foreground font-medium inline-flex items-center">
                Message <span className="text-destructive ml-1">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us how we can help you..."
                  className="min-h-[150px] bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            className="bg-sky-600 hover:bg-sky-700 w-full sm:w-auto group transition-all duration-300"
            size="lg"
          >
            <span className="flex items-center">
              Send Message
              <ArrowRight
                size={16}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </span>
          </Button>
        </div>

        {/* Privacy Notice */}
        <div className="text-sm text-foreground text-muted-foreground flex items-start bg-muted/40 p-3 rounded-lg">
          <CheckCircle
            size={16}
            className="mr-2 mt-1 text-sky-500 flex-shrink-0"
          />
          <span>
            By submitting this form, you agree to our{" "}
            <a href="#" className="text-sky-600 hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-sky-600 hover:underline">
              Terms of Service
            </a>
            .
          </span>
        </div>
      </form>
    </Form>
  );
}