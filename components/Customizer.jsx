import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArrowRight, Check, X } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Please enter your full name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  quantity: z.string().min(1, { message: "Please specify quantity" }),
});

const ProductCustomizer = ({ productName, productType, features }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState({});
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      quantity: "1",
    },
  });

  const handleFeatureChange = (featureId, value) => {
    setSelectedFeatures((prev) => ({
      ...prev,
      [featureId]: value,
    }));
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const sizeOption = selectedFeatures["size"];

    if (!sizeOption) {
      toast({
        title: "Size is required",
        description: "Please select a size for your meter",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    const technologyMap = {
      "NB-IoT": "nbiot",
      "4G CAT 1": "4g",
      LoRaWAN: "lorawan",
    };

    const payload = {
      client_name: data.name,
      client_email: data.email,
      technology: technologyMap[productType] || "nbiot",
      size: sizeOption,
      quantity: parseInt(data.quantity, 10),
    };

    try {
      console.log("Sending payload:", payload);

      const response = await fetch(
        "https://api.waterhub.africa/api/v1/client/meter/quote",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        let errorDetails = "";
        try {
          const errorResponse = await response.json();
          errorDetails = errorResponse.message || JSON.stringify(errorResponse);
        } catch (e) {
          errorDetails = await response.text();
        }

        throw new Error(
          `API request failed with status ${response.status}: ${errorDetails}`
        );
      }

      const responseData = await response.json();
      console.log("API Response:", responseData);

      toast({
        title: "Quote request submitted!",
        description:
          responseData.message ||
          "We'll send your customized price quote to your email shortly.",
        variant: "default",
      });

      setIsOpen(false);
      form.reset();
      setSelectedFeatures({});
    } catch (error) {
      console.error("API Error:", error);
      toast({
        title: "Something went wrong",
        description:
          error.message ||
          "Your quote request couldn't be submitted. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-blue-50 text-sky-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all"
      >
        Customize & Get Quote <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900">
          <DialogHeader>
            <DialogTitle className="text-2xl text-gray-900 dark:text-white">
              Customize Your {productName}
            </DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-300">
              Select your desired features and we'll send you a personalized
              quote.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            <div className="space-y-4">
              <h3 className="font-medium text-lg text-gray-900 dark:text-white">
                1. Select Your Features
              </h3>
              <div className="space-y-4">
                {features.map((feature) => (
                  <div key={feature.id} className="p-4 border rounded-lg ">
                    <div className="mb-2 gap-2">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {feature.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                    <Select
                      value={selectedFeatures[feature.id] || ""}
                      onValueChange={(value) =>
                        handleFeatureChange(feature.id, value)
                      }
                    >
                      <SelectTrigger className="bg-white dark:bg-gray-700">
                        <SelectValue
                          placeholder="Select an option"
                          className="text-gray-900 dark:text-white"
                        />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-50 dark:bg-gray-800">
                        {feature.options.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                            className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {option.label}{" "}
                            {option.pricing && `(${option.pricing})`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-lg text-gray-900 dark:text-white">
                2. Fill Your Information
              </h3>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
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
                              placeholder="Your full name"
                              {...field}
                              className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
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
                              type="email"
                              placeholder="your@email.com"
                              {...field}
                              className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
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
                              type="number"
                              min="1"
                              placeholder="Number of units needed"
                              {...field}
                              className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
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
                      className="text-gray-900 dark:text-white"
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
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCustomizer;
