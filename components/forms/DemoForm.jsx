import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from "@/hooks/use-toast"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { format } from 'date-fns';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Calendar } from '../ui/calendar';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Please enter your full name' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  company: z.string().min(2, { message: 'Please enter your company name' }),
  productType: z.string({ required_error: 'Please select a product' }),
  demoType: z.enum(['virtual', 'in-person'], {
    required_error: 'Please select a demo type',
  }),
  preferredDate: z.date({
    required_error: 'Please select a date',
  }),
  additionalInfo: z.string().optional(),
  contactConsent: z.boolean().refine(val => val === true, {
    message: 'You must agree to be contacted',
  }),
});

const DemoForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      productType: '',
      demoType: 'virtual',
      additionalInfo: '',
      contactConsent: false,
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Demo request submitted:', data);
      
      toast({
        title: "Demo request scheduled!",
        description: "We'll contact you shortly to confirm your demo appointment.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your demo request couldn't be submitted. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Full Name*</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your full name" 
                    className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="dark:text-red-400" />
              </FormItem>
            )}
          />
          
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Email Address*</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 "
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="dark:text-red-400" />
              </FormItem>
            )}
          />
          
          {/* Phone Field */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Phone Number*</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="+1 (555) 000-0000" 
                    className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="dark:text-red-400" />
              </FormItem>
            )}
          />
          
          {/* Company Field */}
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Company/Organization*</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your company name" 
                    className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="dark:text-red-400" />
              </FormItem>
            )}
          />
          
          {/* Product Type Field */}
          <FormField
            control={form.control}
            name="productType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Product Interest*</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700">
                      <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700">
                    <SelectItem 
                      value="smart-water-meter" 
                      className="dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                    >
                      Smart Water Meter
                    </SelectItem>
                    <SelectItem 
                      value="water-atm" 
                      className="dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                    >
                      Water ATM
                    </SelectItem>
                    <SelectItem 
                      value="both" 
                      className="dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                    >
                      Both Products
                    </SelectItem>
                    <SelectItem 
                      value="other" 
                      className="dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                    >
                      Other/Custom Solution
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="dark:text-red-400" />
              </FormItem>
            )}
          />
          
          {/* Preferred Date Field */}
          <FormField
            control={form.control}
            name="preferredDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-foreground">Preferred Date*</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent 
                    className="w-auto p-0 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700" 
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => 
                        date < new Date(new Date().setHours(0, 0, 0, 0))
                      }
                      initialFocus
                      className="dark:bg-gray-800"
                      classNames={{
                        day: "dark:hover:bg-gray-700",
                        day_selected: "dark:bg-blue-600 dark:hover:bg-blue-700",
                        day_today: "dark:bg-gray-700 dark:text-white border border-gray-300",
                      }}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage className="dark:text-red-400" />
              </FormItem>
            )}
          />
        </div>
        
        {/* Demo Type Field */}
        <FormField
          control={form.control}
          name="demoType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-foreground">Demo Type*</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem 
                        value="virtual" 
                        className="dark:border-gray-700 dark:data-[state=checked]:bg-sky-600"
                      />
                    </FormControl>
                    <FormLabel className="font-normal text-foreground">
                      Virtual Demo (Video Conference)
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem 
                        value="in-person" 
                        className="dark:border-gray-400 dark:data-[state=checked]:bg-blue-600"
                      />
                    </FormControl>
                    <FormLabel className="font-normal text-foreground">
                      In-person Demo (At our location)
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage className="dark:text-red-400" />
            </FormItem>
          )}
        />
        
        {/* Additional Info Field */}
        <FormField
          control={form.control}
          name="additionalInfo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Additional Information</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your specific needs or questions for the demo..." 
                  className="min-h-[120px] bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
                  {...field} 
                />
              </FormControl>
              <FormMessage className="dark:text-red-400" />
            </FormItem>
          )}
        />
        
        {/* Consent Checkbox */}
        <FormField
          control={form.control}
          name="contactConsent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="dark:border-gray-400 dark:data-[state=checked]:bg-blue-600"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-foreground">
                  I agree to be contacted regarding my demo request*
                </FormLabel>
              </div>
              <FormMessage className="dark:text-red-400" />
            </FormItem>
          )}
        />
        
        {/* Submit Button */}
        <Button 
          type="submit" 
          className="w-full bg-sky-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white border border-gray-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Schedule a Demo"}
        </Button>
      </form>
    </Form>
  );
};

export default DemoForm;