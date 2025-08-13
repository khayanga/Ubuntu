import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const CustomerInfoForm = ({
  form,
  onSubmit,
  isSubmitting,
  setIsOpen,
}) => (
  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900 dark:text-white">
                Full Name*
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
                  placeholder="Your full name"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 dark:text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900 dark:text-white">
                Email Address*
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
                  type="email"
                  placeholder="your@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 dark:text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900 dark:text-white">
                Quantity*
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
                  type="number"
                  min="1"
                  placeholder="Number of units needed"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 dark:text-red-400" />
            </FormItem>
          )}
        />
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => setIsOpen(false)}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="bg-sky-600 hover:bg-blue-700 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Request Quote"}
        </Button>
      </div>
    </form>
  </Form>
);
